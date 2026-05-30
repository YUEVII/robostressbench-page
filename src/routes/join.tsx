import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, FileJson, Mail } from "lucide-react";

import { Nav } from "@/components/Nav";

export const Route = createFileRoute("/join")({
  head: () => ({
    meta: [
      { title: "Join Evaluation - RoboStressBench" },
      {
        name: "description",
        content:
          "Contact the RoboStressBench team to submit model predictions for evaluation.",
      },
    ],
  }),
  component: JoinPage,
});

const CONTACT_EMAIL = "lwu398@connect.hkust-gz.edu.cn";

const EXAMPLE = `[
  {
    "id": 1,
    "question_id": "CholecTrack20_VID01_q1_distinct-instruments-counting",
    "dataset": "CholecTrack20",
    "answer": "D"
  }
]`;

const CHECKLIST = [
  "Your model name and version",
  "Your affiliation or organization",
  "A contact person for follow-up",
  "A JSON prediction file using the format below",
];

function JoinPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <section className="mx-auto max-w-4xl px-6 pt-16 pb-24">
        <div className="text-xs font-mono uppercase tracking-[0.2em] text-foreground mb-2">
          Join Evaluation
        </div>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
          Submit your <span className="text-gradient">predictions</span>
        </h1>
        <p className="text-muted-foreground leading-relaxed max-w-2xl">
          To participate in the RoboStressBench evaluation, please email your
          prediction file to our team. We will review the submission and follow
          up with the evaluation result.
        </p>

        <div className="mt-10 glass-strong rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-3">
            <Mail className="h-5 w-5 text-primary" />
            <h2 className="text-sm font-mono uppercase tracking-[0.18em] text-foreground">
              Contact
            </h2>
          </div>
          <p className="text-sm text-muted-foreground mb-5">
            Send your evaluation request and JSON prediction file to:
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=RoboStressBench%20Evaluation%20Submission`}
            className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
          >
            {CONTACT_EMAIL}
          </a>
        </div>

        <div className="mt-6 glass rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle2 className="h-4 w-4 text-primary" />
            <h2 className="text-sm font-mono uppercase tracking-[0.18em] text-foreground">
              Please Include
            </h2>
          </div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {CHECKLIST.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-primary">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 glass rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <FileJson className="h-4 w-4 text-primary" />
            <h2 className="text-sm font-mono uppercase tracking-[0.18em] text-foreground">
              Prediction Format
            </h2>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Each entry should include{" "}
            <code className="font-mono text-foreground">id</code>,{" "}
            <code className="font-mono text-foreground">question_id</code>,{" "}
            <code className="font-mono text-foreground">dataset</code>, and{" "}
            <code className="font-mono text-foreground">answer</code>.
          </p>
          <pre className="text-xs md:text-sm font-mono text-foreground/90 overflow-x-auto leading-relaxed">
            {EXAMPLE}
          </pre>
        </div>
      </section>
    </div>
  );
}
