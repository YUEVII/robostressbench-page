export type ModelFamily = "Qwen" | "InternVL" | "Molmo" | "Gemini" | "GPT";

export type ModelRow = {
  model: string;
  family: ModelFamily;
  size: string;
  overall: number;
  material: number;
  viewpoint: number;
  geometry: number;
  lighting: number;
  grounding: number;
  planning: number;
  reasoning: number;
};

// Source: Table 2 — Overall evaluation results on RoboStressBench.
// Aggregate columns are means of the fine-grained sub-dimensions in the paper:
//   material   = mean(Dark, L-Con, C-Tex, Tran, Spec)
//   viewpoint  = mean(Extr, Trun, Small)
//   geometry   = mean(Occl, Non-R, Stack, Clust)
//   lighting   = mean(G-Ovr, L-Ovr, G-Und, L-Und)
//   grounding  = mean(Plc, Tgt)
//   reasoning  = mean(Spa, Sta)
//   planning   = Plan
export const LEADERBOARD: ModelRow[] = [
  { model: "Qwen3VL",     family: "Qwen",     size: "4B",      overall: 43.2, material: 46.1, viewpoint: 45.6, geometry: 32.2, lighting: 44.1, grounding: 33.0, planning: 53.8, reasoning: 57.3 },
  { model: "Qwen3VL",     family: "Qwen",     size: "8B",      overall: 49.7, material: 52.8, viewpoint: 56.0, geometry: 38.6, lighting: 53.7, grounding: 40.8, planning: 64.2, reasoning: 66.1 },
  { model: "Qwen3VL",     family: "Qwen",     size: "30B-A3B", overall: 55.9, material: 60.1, viewpoint: 61.4, geometry: 42.8, lighting: 57.8, grounding: 40.3, planning: 99.8, reasoning: 70.3 },
  { model: "Qwen3.5",     family: "Qwen",     size: "4B",      overall: 49.8, material: 53.5, viewpoint: 55.6, geometry: 38.6, lighting: 51.4, grounding: 38.3, planning: 68.8, reasoning: 66.1 },
  { model: "Qwen3.5",     family: "Qwen",     size: "9B",      overall: 50.7, material: 52.9, viewpoint: 59.5, geometry: 39.4, lighting: 55.5, grounding: 41.5, planning: 65.5, reasoning: 66.3 },
  { model: "Qwen3.5",     family: "Qwen",     size: "27B",     overall: 58.0, material: 62.0, viewpoint: 63.7, geometry: 44.8, lighting: 62.9, grounding: 51.1, planning: 77.0, reasoning: 70.2 },
  { model: "Qwen3.5",     family: "Qwen",     size: "35B-A3B", overall: 58.1, material: 61.2, viewpoint: 62.2, geometry: 45.0, lighting: 61.8, grounding: 46.4, planning: 92.8, reasoning: 71.0 },
  { model: "Qwen3.6",     family: "Qwen",     size: "27B",     overall: 57.3, material: 61.3, viewpoint: 61.5, geometry: 44.7, lighting: 60.8, grounding: 49.9, planning: 68.8, reasoning: 72.7 },
  { model: "Qwen3.6",     family: "Qwen",     size: "35B-A3B", overall: 55.8, material: 57.9, viewpoint: 63.4, geometry: 43.6, lighting: 60.4, grounding: 45.9, planning: 81.1, reasoning: 72.6 },
  { model: "InternVL3.5", family: "InternVL", size: "4B",      overall: 32.1, material: 31.0, viewpoint: 42.8, geometry: 22.5, lighting: 39.6, grounding: 23.1, planning: 46.2, reasoning: 53.2 },
  { model: "InternVL3.5", family: "InternVL", size: "8B",      overall: 32.9, material: 31.4, viewpoint: 44.3, geometry: 23.1, lighting: 41.9, grounding: 23.4, planning: 50.3, reasoning: 54.7 },
  { model: "InternVL3.5", family: "InternVL", size: "14B",     overall: 29.9, material: 28.1, viewpoint: 40.9, geometry: 21.0, lighting: 36.5, grounding: 19.4, planning: 45.9, reasoning: 53.8 },
  { model: "Molmo2",      family: "Molmo",    size: "4B",      overall: 31.5, material: 29.3, viewpoint: 39.9, geometry: 23.2, lighting: 40.2, grounding: 24.8, planning: 44.5, reasoning: 51.6 },
  { model: "Molmo2",      family: "Molmo",    size: "8B",      overall: 35.2, material: 34.1, viewpoint: 45.2, geometry: 26.0, lighting: 43.4, grounding: 27.3, planning: 54.3, reasoning: 51.4 },
  { model: "Gemini-3.1",  family: "Gemini",   size: "—",       overall: 44.8, material: 45.8, viewpoint: 49.6, geometry: 36.5, lighting: 47.7, grounding: 40.1, planning: 56.3, reasoning: 55.8 },
  { model: "GPT-5.5",     family: "GPT",      size: "—",       overall: 46.2, material: 48.2, viewpoint: 53.4, geometry: 35.0, lighting: 53.9, grounding: 42.6, planning: 57.0, reasoning: 59.6 },
];

export const FAMILIES: ("All" | ModelFamily)[] = ["All", "Qwen", "InternVL", "Molmo", "Gemini", "GPT"];
