export const metadata = {
  title: "Career – QuickAccess DXB",
  description:
    "Explore career opportunities with QuickAccess DXB across design, engineering and site operations."
};

export default function CareerPage() {
  return (
    <div className="section-padding">
      <div className="container max-w-3xl space-y-6">
        <div>
          <h1 className="section-heading">Career</h1>
          <p className="section-subtitle">
            We are always interested in meeting talented designers, engineers,
            project managers and technicians who care about quality.
          </p>
        </div>
        <p className="text-sm text-muted-foreground md:text-base">
          To be considered for future openings, send your CV and portfolio (if
          applicable) to{" "}
          <span className="font-medium text-foreground">
            careers@quickaccessdxb.com
          </span>
          .
        </p>
      </div>
    </div>
  );
}
