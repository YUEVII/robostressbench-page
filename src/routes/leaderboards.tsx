import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Leaderboard } from "@/components/Leaderboard";

export const Route = createFileRoute("/leaderboards")({
  head: () => ({
    meta: [
      { title: "Leaderboards — RoboStressBench" },
      { name: "description", content: "Full VLM robustness leaderboard for RoboStressBench across Material, Viewpoint, Lighting, and Geometry stress." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-10 space-y-3">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-300">Leaderboards</div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gradient">
            VLM Robustness Leaderboard
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Click any column to sort. Filter by model family. Scores are overall accuracy (%) under
            physical visual stress. The leaderboard is updated every two weeks.
          </p>
        </div>
        <Leaderboard />
      </main>
    </div>
  );
}
