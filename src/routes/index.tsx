import type { ReactNode } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";

import { Nav } from "@/components/Nav";
import { Taxonomy } from "@/components/Taxonomy";
import { Leaderboard } from "@/components/Leaderboard";
import { FigureCard } from "@/components/FigureCard";
import { ArrowRight, BarChart3, FileText, Code2, Sparkles, Search, Wand2, Brain, CheckCircle2 } from "lucide-react";
import fig1 from "@/assets/figures/fig1-overview.png";
import heroBg from "@/assets/hero-bg.png";
import fig2 from "@/assets/figures/fig2-motivation.png";
import fig3 from "@/assets/figures/fig3-radar.png";
import fig4 from "@/assets/figures/fig4-statistics.png";
import fig5 from "@/assets/figures/fig5-pipeline.png";
import fig6 from "@/assets/figures/fig6-stressdart.png";
import fig7 from "@/assets/figures/fig7-permodel-radar.png";
import fig8 from "@/assets/figures/fig8-task-sensitivity.png";



export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RoboStressBench — Benchmarking VLM Robustness to Physical Visual Stress" },
      {
        name: "description",
        content:
          "RoboStressBench is a benchmark for evaluating Vision-Language Models on Material, Viewpoint, Lighting, and Geometry stress in embodied scenes.",
      },
      { property: "og:title", content: "RoboStressBench" },
      {
        property: "og:description",
        content: "Benchmarking VLM Robustness to Physical Visual Stress in Embodied Scenes.",
      },
    ],
  }),
  component: Index,
});

const NEWS: { date: string; emoji: string; content: ReactNode }[] = [
  {
    date: "2026/05/31",
    emoji: "📄",
    content: (
      <>
        Our paper of{" "}
        <a href="https://arxiv.org/abs/2606.00828" target="_blank" rel="noreferrer" className="text-primary hover:underline font-medium">
          RoboStressBench
        </a>{" "}
        is now available on arXiv. Check it out for more details 🔍!
      </>
    ),
  },
  {
    date: "2026/05/31",
    emoji: "🌐",
    content: (
      <>
        We launched the{" "}
        <a href="https://yuevii.github.io/robostressbench-page/" target="_blank" rel="noreferrer" className="text-primary hover:underline font-medium">
          Official website
        </a>{" "}
        of RoboStressBench 🚀.
      </>
    ),
  },
];


const AUTHORS = [
  { name: "Leyi Wu", aff: "1,3,*" },
  { name: "Yifan Zhao", aff: "1,*" },
  { name: "Jinjie Zhang", aff: "1,*" },
  { name: "Suzeyu Chen", aff: "1,3,*" },
  { name: "Wosong Chen", aff: "1,3" },
  { name: "Zhifei Chen", aff: "1" },
  { name: "Tianshuo Xu", aff: "1" },
  { name: "Qingchun He", aff: "1" },
  { name: "Hongxin Hu", aff: "1" },
  { name: "Haojian Huang", aff: "1,3" },
  { name: "Yangkai Wei", aff: "3" },
  { name: "Wenqian Li", aff: "3" },
  { name: "Yinchuan Li", aff: "3" },
  { name: "Ying-Cong Chen", aff: "1,2,†" },
];

const AFFS = [
  { id: 1, name: "HKUST(GZ)" },
  { id: 2, name: "HKUST" },
  { id: 3, name: "Knowin" },
];


function Index() {
  return (
    <div className="min-h-screen">
      <Nav />

      {/* HERO */}
      <section className="relative overflow-hidden min-h-[98vh] flex items-center">


        {/* Photo-grid background — full image, crisp */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "saturate(118%)",
          }}
          aria-hidden
        />
        <div className="absolute inset-0 -z-10 bg-background/5" aria-hidden />
        <div className="relative mx-auto w-full max-w-5xl px-6 pt-24 pb-32 text-center">

          {/* Title + subtitle plate */}
          <div className="inline-block rounded-3xl px-8 md:px-14 py-8 md:py-10 max-w-4xl mx-auto border border-white/50 bg-white/65 backdrop-blur-xl shadow-[0_20px_60px_-20px_rgba(20,30,60,0.45)]">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95]">
              <span className="text-gradient">RoboStressBench</span>
            </h1>
            <p className="mt-5 text-base md:text-xl max-w-3xl mx-auto leading-relaxed font-semibold text-[oklch(0.25_0.08_265)]">
              Benchmarking VLM Robustness to Physical Visual Stress in Embodied Scenes.
            </p>
          </div>


          {/* Authors */}
          <div className="mt-10 glass-strong rounded-2xl px-6 py-5 max-w-3xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm">
              {AUTHORS.map((a) => (
                <span key={a.name} className="text-foreground/90">
                  {a.name}
                  <sup className="text-primary ml-0.5 font-mono text-[10px]">{a.aff}</sup>
                </span>
              ))}
            </div>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-muted-foreground font-mono">
              {AFFS.map((af) => (
                <span key={af.id}>
                  <sup className="text-primary/80">{af.id}</sup> {af.name}

                </span>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
            <Link
              to="/join"
              className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_-12px_oklch(0.62_0.13_220_/_0.6)] transition-transform hover:scale-[1.02] active:scale-[0.99]"
            >
              <Sparkles className="h-4 w-4" />
              JOIN EVALUATION
            </Link>
            <Link
              to="/leaderboards"
              className="group inline-flex items-center justify-center gap-2 rounded-xl glass-strong px-5 py-3.5 text-sm font-semibold text-foreground hover:text-primary transition-all"
            >
              <BarChart3 className="h-4 w-4" />
              VIEW LEADERBOARDS
            </Link>
            <a
              href="https://github.com/YUEVII/RoboStressBench"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-xl glass-strong px-5 py-3.5 text-sm font-semibold text-foreground hover:text-primary transition-all"
            >
              <Code2 className="h-4 w-4" />
              EVALUATION FRAMEWORK
            </a>
            <a
              href="https://arxiv.org/abs/2606.00828"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-xl glass-strong px-5 py-3.5 text-sm font-semibold text-foreground hover:text-primary transition-all"
            >
              <FileText className="h-4 w-4" />
              OUR PAPER
            </a>
          </div>


        </div>
      </section>

      {/* NEWS */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-foreground">News</h2>
        </div>

        <ul className="space-y-2.5">
          {NEWS.map((n, i) => (
            <li key={i} className="flex items-start gap-3 text-sm group">
              <span className="font-mono text-xs text-muted-foreground mt-0.5 shrink-0 px-2 py-0.5 rounded glass">
                [{n.date}]
              </span>
              <span className="text-foreground/90 group-hover:text-foreground transition-colors">
                <span className="mr-1.5">{n.emoji}</span>
                {n.content}
              </span>
            </li>
          ))}

        </ul>
      </section>

      {/* MOTIVATION */}
      <section id="motivation" className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 mb-8">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-foreground mb-3">
              Motivation
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Why <span className="text-gradient">RoboStressBench?</span>
            </h2>
          </div>
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              General benchmarks rely on clean nominal images and miss real-world stress.
              Robustness benchmarks add artificial noise (Gaussian, Impulse, Pixelation) that
              rarely occurs in embodied scenes. RoboStressBench captures{" "}
              <span className="text-foreground">real physical stress</span> with{" "}
              <span className="text-foreground">careful annotations</span> and{" "}
              <span className="text-foreground">task-aligned evaluation</span>.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Real-world physical stress", "Careful annotation", "Task-aligned evaluation"].map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5 glass px-3 py-1.5 rounded-full text-xs font-mono text-foreground">
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
        <FigureCard
          figure="1"
          src={fig2}
          alt="Motivation for RoboStressBench"
          caption="Existing benchmarks either lack explicit stress annotation or rely on artificial perturbations, whereas RoboStressBench provides realistic physical stress with careful annotations."
        />
      </section>

      {/* OVERVIEW */}
      <section id="overview" className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 mb-10">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-foreground mb-3">
              Overview
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              What is <span className="text-gradient">RoboStressBench?</span>
            </h2>
          </div>
          <div className="space-y-5">
            <p className="text-muted-foreground leading-relaxed">
              RoboStressBench defines <span className="text-foreground">visual stress</span> through
              the four image-formation factors of inverse graphics. Every observed image is the
              composition of <em>material</em>, <em>viewpoint</em>, <em>lighting</em>, and{" "}
              <em>geometry</em> — and any of them can become a stressor for embodied vision-language
              models.
            </p>
            <div className="glass-strong rounded-2xl p-6 text-center">
              <div className="font-mono text-2xl md:text-3xl tracking-wide text-foreground">
                I <span className="text-muted-foreground">=</span> F
                <span className="text-muted-foreground">(</span>M
                <span className="text-muted-foreground">, </span>V
                <span className="text-muted-foreground">, </span>L
                <span className="text-muted-foreground">, </span>G
                <span className="text-muted-foreground">)</span>
              </div>
              <div className="mt-2 text-xs font-mono text-muted-foreground uppercase tracking-wider">
                Image = F(Material, Viewpoint, Lighting, Geometry)
              </div>
            </div>
          </div>
        </div>

        <FigureCard
          figure="2"
          src={fig1}
          alt="Overview of RoboStressBench"
          caption="RoboStressBench evaluates VLM robustness under physical visual stress in embodied scenes. We organize visual stress along four image-formation factors (Material, Viewpoint, Lighting, Geometry), build the benchmark via human-curated filtering, stress synthesis, and real-world collection, and support task-aligned evaluation through multiple-choice VQA and grounding tasks."
        />

        <div id="taxonomy" className="mt-16">
          <div className="flex items-center gap-3 mb-6">
            <h3 className="text-xl font-semibold">Stress Taxonomy</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
            <span className="text-xs font-mono text-muted-foreground">4 pillars · 14 stress types</span>
          </div>
          <Taxonomy />
        </div>
      </section>

      {/* PIPELINE */}
      <section id="pipeline" className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-foreground mb-2">
            Benchmark Construction
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Data <span className="text-gradient">Pipeline</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {[
            { tag: "A", title: "Human-Curated Filtering", text: "Filter open benchmarks for genuinely stressed embodied scenes, with per-image stress tags." },
            { tag: "B", title: "Stress Synthesis", text: "Augment nominal images with controlled, physically meaningful stress (e.g. local over-exposure)." },
            { tag: "C", title: "Real-World Collection", text: "Self-captured embodied scenes covering the full M·V·L·G taxonomy." },
          ].map((s) => (
            <div key={s.tag} className="glass rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs text-primary">({s.tag})</span>
                <h3 className="text-base font-semibold">{s.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
        <FigureCard
          figure="3"
          src={fig5}
          alt="Stress categories and curation pipeline"
          caption="Stress categories and curation pipeline. Overview of the four stress dimensions and three data sources in RoboStressBench."
        />
      </section>

      {/* STATISTICS */}
      <section id="statistics" className="mx-auto max-w-6xl px-6 py-16 space-y-6">
        <div>
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-foreground mb-2">
            Dataset
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Benchmark <span className="text-gradient">Statistics</span>
          </h2>
          <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-3xl leading-relaxed">
            RoboStressBench spans four stress dimensions and a wide range of embodied scenes.
            The distribution below summarises sample counts across stress types, task formats,
            and data sources, showing balanced coverage of both real-world and synthesised stress.
          </p>
        </div>
        <FigureCard
          figure="4"
          src={fig4}
          alt="RoboStressBench dataset statistics"
          caption="Dataset statistics. Distribution of samples across stress dimensions, sub-stress categories, task formats, and data sources in RoboStressBench."
        />
      </section>


      {/* TASKS */}
      <section id="tasks" className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-foreground mb-2">
            Evaluation
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Two <span className="text-gradient">Task Formats</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="glass rounded-2xl p-6">
            <div className="text-xs font-mono text-primary mb-2">1 · Multi-Choice VQA</div>
            <h3 className="text-lg font-semibold mb-3">Visual Question Answering</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <span className="text-foreground">Reasoning</span> — interpret the scene under stress</li>
              <li>• <span className="text-foreground">Planning</span> — decide next embodied action</li>
              <li>• <span className="text-foreground">Spatial</span> — relative positions and layout</li>
              <li>• <span className="text-foreground">State Understanding</span> — task completion judgement</li>
            </ul>
          </div>
          <div className="glass rounded-2xl p-6">
            <div className="text-xs font-mono text-primary mb-2">2 · Grounding</div>
            <h3 className="text-lg font-semibold mb-3">Localization Tasks</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <span className="text-foreground">Placement Grounding</span> — point to free space for placing an object</li>
              <li>• <span className="text-foreground">Target Grounding</span> — bounding box or point on the target object</li>
            </ul>
          </div>
        </div>
      </section>

      {/* LEADERBOARD PREVIEW */}
      <section id="leaderboard" className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-end justify-between mb-6 gap-4 flex-wrap">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-foreground mb-2">
              Leaderboard
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              VLM Robustness <span className="text-gradient">Rankings</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              The leaderboard is updated every two weeks.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs font-mono">
              {["16 VLMs", "5 families", "Qwen", "GPT", "InternVL", "Gemini", "Molmo"].map((c) => (
                <span key={c} className="glass px-2.5 py-1 rounded-full text-muted-foreground">{c}</span>
              ))}
            </div>
          </div>
          <Link
            to="/leaderboards"
            className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline font-mono"
          >
            Full leaderboard <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <Leaderboard compact />
      </section>

      {/* RESULTS — ROBUSTNESS */}
      <section id="robustness" className="mx-auto max-w-6xl px-6 py-16 space-y-6">
        <div>
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-foreground mb-2">
            Results
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Stress-wise <span className="text-gradient">Robustness</span>
          </h2>
        </div>
        <FigureCard
          figure="5"
          src={fig3}
          alt="RoboStressBench evaluation results"
          caption="Performance of all evaluated VLMs across RoboStressBench stress dimensions. Comprehensive numerical results are reported in Table 2."
        />
      </section>

      {/* RESULTS — PER MODEL */}
      <section id="permodel" className="mx-auto max-w-6xl px-6 py-16 space-y-6">
        <div>
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-foreground mb-2">
            Results
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Per-model <span className="text-gradient">Profiles</span>
          </h2>
        </div>
        <FigureCard
          figure="6"
          src={fig7}
          alt="Per-model dimension profiles on RoboStressBench"
          caption="Table 2 plus per-model dimension profiles. Each radar shows one model's scores over the 16 fine-grained stress dimensions."
        />
      </section>

      {/* RESULTS — TASK SENSITIVITY */}
      <section id="sensitivity" className="mx-auto max-w-6xl px-6 py-16 space-y-6">
        <div>
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-foreground mb-2">
            Results
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Task-dependent <span className="text-gradient">Sensitivity</span>
          </h2>
        </div>
        <FigureCard
          figure="7"
          src={fig8}
          alt="Task-dependent sensitivity to physical visual stress"
          caption="For each task format, we visualize model accuracy across Material, Viewpoint, Lighting, and Geometry stress."
        />
      </section>

      {/* METHOD — STRESSDART */}
      <section id="method" className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-foreground mb-2">
            Method
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            StressDART <span className="text-gradient">Test-time Solver</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-3xl leading-relaxed">
            Given a stressed image and a question, StressDART first <span className="text-foreground">detects</span>{" "}
            the dominant visual stress, then applies targeted <span className="text-foreground">rectification</span>{" "}
            to recover task-relevant evidence, and finally <span className="text-foreground">reasons</span> over both
            the original and rectified images to produce the answer.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {[
            { icon: Search, tag: "1 · Detect", title: "Stress Detector", text: "Predict coarse stress s ∈ {M,V,L,G} and sub-stress tags from the input image." },
            { icon: Wand2, tag: "2 · Rectify", title: "Stress Rectifier", text: "Apply targeted image editing to alleviate the dominant stress, preserving the original when unsafe." },
            { icon: Brain, tag: "3 · Reason", title: "Stress Reasoner", text: "Reason jointly over the original and rectified images to produce the final answer." },
          ].map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.tag} className="glass rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="h-4 w-4 text-primary" />
                  <span className="font-mono text-xs text-primary">{s.tag}</span>
                </div>
                <h3 className="text-base font-semibold mb-1">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
              </div>
            );
          })}
        </div>
        <FigureCard
          figure="8"
          src={fig6}
          alt="Overview of StressDART"
          caption="Overview of StressDART. Given a stressed image and a question, StressDART detects the dominant visual stress, applies targeted rectification to recover task-relevant evidence, and finally reasons over both the original and rectified images to produce the answer."
        />
      </section>

      {/* CITATION */}
      <section id="citation" className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-6">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-foreground mb-2">
            Citation
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Cite <span className="text-gradient">RoboStressBench</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-3xl leading-relaxed">
            If you find RoboStressBench useful, please cite our paper.
          </p>
        </div>
        <div className="glass rounded-2xl p-5">
          <pre className="text-xs md:text-sm font-mono text-muted-foreground whitespace-pre-wrap leading-relaxed">
{`@misc{wu2026robostressbenchbenchmarkingvlmrobustness,
      title={RoboStressBench: Benchmarking VLM Robustness to Physical Visual Stress in Embodied Scenes}, 
      author={Leyi Wu and Yifan Zhao and Jinjie Zhang and Suzeyu Chen and Wosong Chen and Zhifei Chen and Tianshuo Xu and Qingchun He and Hongxin Hu and Haojian Huang and Yangkai Wei and Wenqian Li and Yinchuan Li and Ying-Cong Chen},
      year={2026},
      eprint={2606.00828},
      archivePrefix={arXiv},
      primaryClass={cs.CV},
      url={https://arxiv.org/abs/2606.00828}, 
}`}
          </pre>
        </div>
      </section>


      <footer className="border-t border-white/5 mt-20">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-muted-foreground">
          <span>© 2026 RoboStressBench</span>
          <span>HKUST(GZ) · HKUST · Knowin</span>
        </div>
      </footer>
    </div>
  );
}
