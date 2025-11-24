// components/blog-section.tsx
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type React from "react";
import type { BlogPost } from "@/app/blog/page";

type BlogSectionProps = {
  posts: BlogPost[];
};

export function BlogSection({ posts }: BlogSectionProps) {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  // Close on ESC
  useEffect(() => {
    if (!activePost) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActivePost(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [activePost]);

  return (
    <>
      <section className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-base font-semibold md:text-lg">
            Latest articles
          </h2>
          <p className="text-xs text-muted-foreground">
            Guides for homeowners, landlords & facility managers.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <button
              key={post.slug}
              type="button"
              onClick={() => setActivePost(post)}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border/60 bg-background/70 text-left transition-colors hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/60"
            >
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
                  sizes="(min-width: 1024px) 400px, 100vw"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-4">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="font-medium uppercase tracking-wide text-primary">
                    {post.category}
                  </span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-sm font-semibold tracking-tight md:text-base">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-auto pt-1 text-xs font-medium text-primary">
                  Read more →
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {activePost && (
        <BlogModal post={activePost} onClose={() => setActivePost(null)} />
      )}
    </>
  );
}

type BlogModalProps = {
  post: BlogPost;
  onClose: () => void;
};

function BlogModal({ post, onClose }: BlogModalProps) {
  // Lock body scroll when modal is open (mobile-friendly)
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  const paragraphs = post.content
    .trim()
    .split("\n")
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={handleBackdropClick}
    >
     <div className="relative w-full max-w-2xl max-h-[90vh] overflow-hidden rounded-3xl border border-border/70 
bg-gradient-to-br from-[#f5c26b] via-[#fa8f4d] to-[#fa6a1e] shadow-2xl text-white">
        {/* Optional image at top */}
        <div className="relative h-40 w-full overflow-hidden rounded-t-3xl">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 640px, 100vw"
          />
        </div>

        {/* Header */}
        <div className="flex items-start justify-between gap-3 border-b border-border/60 px-5 py-3 section-subtitle">
          <div className="space-y-1">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-primary">
              {post.category} · {post.readTime}
            </p>
            <h2 className="text-base font-semibold leading-snug md:text-lg">
              {post.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="ml-2 inline-flex h-8 w-8 items-center justify-center rounded-full border border-border/70 text-xs text-muted-foreground hover:bg-muted/60"
          >
            ✕
          </button>
        </div>

        {/* Scrollable body */}
        <div className="max-h-[60vh] overflow-y-auto px-5 py-4 section-subtitle text-sm text-muted-foreground space-y-3">
          {paragraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
