import { useState } from "react";
import { Layers, Eye, Sun, Box } from "lucide-react";
import localOverexposure from "@/assets/stress/local-overexposure.jpg";
import globalUnderexposure from "@/assets/stress/global-underexposure.jpg";
import complexTexture from "@/assets/stress/complex-texture.jpg";
import extremeViewpoint from "@/assets/stress/extreme-viewpoint.jpg";
import truncated from "@/assets/stress/truncated.jpg";
import smallScale from "@/assets/stress/small-scale.jpg";
import occlusion from "@/assets/stress/occlusion.jpg";
import nonRigid from "@/assets/stress/non-rigid.jpg";
import stacked from "@/assets/stress/stacked.jpg";
import cluttered from "@/assets/stress/cluttered.jpg";
import globalOverexposure from "@/assets/stress/global-overexposure.jpg";
import specular from "@/assets/stress/specular.jpg";
import lowContrast from "@/assets/stress/low-contrast.jpg";
import localUnderexposure from "@/assets/stress/local-underexposure.jpg";
import darkAbsorptive from "@/assets/stress/dark-absorptive.jpg";


type Item = { label: string; img?: string };

const PILLARS: {
  key: string;
  name: string;
  icon: typeof Layers;
  color: string;
  ring: string;
  text: string;
  items: Item[];
}[] = [
  {
    key: "M",
    name: "Material",
    icon: Layers,
    color: "from-cyan-400/30 to-cyan-500/5",
    ring: "ring-cyan-400/30",
    text: "text-cyan-700",
    items: [
      { label: "Dark Absorptive", img: darkAbsorptive },
      { label: "Low Contrast Blend", img: lowContrast },
      { label: "Complex Texture", img: complexTexture },
      { label: "Specular Confusion", img: specular },
    ],
  },
  {
    key: "V",
    name: "Viewpoint",
    icon: Eye,
    color: "from-violet-400/30 to-violet-500/5",
    ring: "ring-violet-400/30",
    text: "text-violet-700",
    items: [
      { label: "Extreme Viewpoint", img: extremeViewpoint },
      { label: "Truncated Out-of-frame", img: truncated },
      { label: "Small Scale", img: smallScale },
    ],
  },
  {
    key: "L",
    name: "Lighting",
    icon: Sun,
    color: "from-amber-300/30 to-amber-500/5",
    ring: "ring-amber-300/30",
    text: "text-amber-700",
    items: [
      { label: "Global Overexposure", img: globalOverexposure },
      { label: "Global Underexposure", img: globalUnderexposure },
      { label: "Local Overexposure", img: localOverexposure },
      { label: "Local Underexposure", img: localUnderexposure },
    ],
  },
  {
    key: "G",
    name: "Geometry",
    icon: Box,
    color: "from-emerald-400/30 to-emerald-500/5",
    ring: "ring-emerald-400/30",
    text: "text-emerald-700",
    items: [
      { label: "Occlusion", img: occlusion },
      { label: "Non-rigid Deformation", img: nonRigid },
      { label: "Stacked Layout", img: stacked },
      { label: "Cluttered Layout", img: cluttered },
    ],
  },
];

export function Taxonomy() {
  const [active, setActive] = useState(0);
  const current = PILLARS[active];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {PILLARS.map((p, i) => {
          const Icon = p.icon;
          const isActive = active === i;
          return (
            <button
              key={p.key}
              onClick={() => setActive(i)}
              className={`group relative overflow-hidden rounded-2xl p-5 text-left transition-all duration-300 ${
                isActive
                  ? `glass-strong ring-1 ${p.ring} shadow-[0_10px_50px_-20px_rgba(0,200,255,0.4)]`
                  : "glass hover:border-white/15"
              }`}
            >
              <div
                className={`absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br ${p.color} blur-2xl transition-opacity ${
                  isActive ? "opacity-100" : "opacity-40 group-hover:opacity-80"
                }`}
              />
              <div className="relative space-y-2">
                <div className="flex items-center justify-between">
                  <Icon className={`h-5 w-5 ${p.text}`} />
                  <span className={`font-mono text-xs ${p.text}`}>({p.key})</span>
                </div>
                <div className="text-lg font-semibold">{p.name}</div>
                <div className="text-xs text-muted-foreground">{p.items.length} stress types</div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="glass-strong rounded-2xl p-6 lg:p-8">
        <div className="flex items-center gap-3 mb-6">
          <span className={`font-mono text-sm ${current.text}`}>({current.key})</span>
          <h3 className="text-xl font-semibold">{current.name} Stress</h3>
          <div className="flex-1 h-px bg-gradient-to-r from-foreground/15 to-transparent" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {current.items.map((item, idx) => (
            <div
              key={item.label}
              className="group relative aspect-[4/3] rounded-xl glass overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:border-white/30"
            >
              {item.img ? (
                <>
                  <img
                    src={item.img}
                    alt={item.label}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                </>
              ) : (
                <>
                  <div className={`absolute inset-0 bg-gradient-to-br ${current.color} opacity-60 group-hover:opacity-90 transition-opacity`} />
                  <div className="absolute inset-0 grid-bg opacity-30" />
                </>
              )}
              <div className="absolute inset-0 p-3 flex flex-col justify-end">
                <div
                  className={`text-xs font-mono ${
                    item.img ? "text-white/80" : `${current.text} opacity-80`
                  }`}
                >
                  {current.key}.{idx + 1}
                </div>
                <div
                  className={`text-sm font-semibold ${
                    item.img ? "text-white drop-shadow" : ""
                  }`}
                >
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
