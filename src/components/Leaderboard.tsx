import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { LEADERBOARD, FAMILIES, type ModelRow } from "@/lib/leaderboard-data";
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";

type SortKey = keyof Omit<ModelRow, "family">;

const COLUMNS: { key: SortKey; label: string; numeric?: boolean; group?: "robust" | "task" }[] = [
  { key: "model", label: "Model" },
  { key: "size", label: "Size" },
  { key: "overall", label: "Overall %", numeric: true },
  { key: "material", label: "Material", numeric: true, group: "robust" },
  { key: "viewpoint", label: "Viewpoint", numeric: true, group: "robust" },
  { key: "geometry", label: "Geometry", numeric: true, group: "robust" },
  { key: "lighting", label: "Lighting", numeric: true, group: "robust" },
  { key: "grounding", label: "Grounding", numeric: true, group: "task" },
  { key: "planning", label: "Planning", numeric: true, group: "task" },
  { key: "reasoning", label: "Reasoning", numeric: true, group: "task" },
];

function scoreColor(v: number) {
  if (v >= 70) return "text-emerald-700";
  if (v >= 60) return "text-sky-700";
  if (v >= 50) return "text-amber-700";
  return "text-rose-700";
}

export function Leaderboard({ compact = false }: { compact?: boolean }) {
  const [family, setFamily] = useState<(typeof FAMILIES)[number]>("All");
  const [sortKey, setSortKey] = useState<SortKey>("overall");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");

  const rows = useMemo(() => {
    const filtered = family === "All" ? LEADERBOARD : LEADERBOARD.filter((r) => r.family === family);
    return [...filtered].sort((a, b) => {
      const av = a[sortKey];
      const bv = b[sortKey];
      if (typeof av === "number" && typeof bv === "number") {
        return sortDir === "asc" ? av - bv : bv - av;
      }
      return sortDir === "asc"
        ? String(av).localeCompare(String(bv))
        : String(bv).localeCompare(String(av));
    });
  }, [family, sortKey, sortDir]);

  function toggleSort(key: SortKey) {
    if (key === sortKey) setSortDir(sortDir === "asc" ? "desc" : "asc");
    else {
      setSortKey(key);
      setSortDir(typeof LEADERBOARD[0][key] === "number" ? "desc" : "asc");
    }
  }

  const display = compact ? rows.slice(0, 6) : rows;

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center gap-2">
        {FAMILIES.map((f) => {
          const active = family === f;
          return (
            <button
              key={f}
              onClick={() => setFamily(f)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium font-mono tracking-wide transition-all ${
                active
                  ? "bg-primary text-primary-foreground border border-primary shadow-[0_6px_18px_-8px_var(--primary)]"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>

      <div className="glass rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/[0.03] text-left">
                {COLUMNS.map((col) => {
                  const active = sortKey === col.key;
                  return (
                    <th
                      key={col.key}
                      onClick={() => toggleSort(col.key)}
                      className={`px-4 py-3 font-medium text-xs uppercase tracking-wider cursor-pointer select-none whitespace-nowrap transition-colors ${
                        active ? "text-primary" : "text-muted-foreground hover:text-foreground"
                      } ${col.group === "robust" ? "border-l border-white/5" : ""} ${
                        col.key === "grounding" ? "border-l-2 border-violet/30" : ""
                      }`}
                    >
                      <span className="inline-flex items-center gap-1.5">
                        {col.label}
                        {active ? (
                          sortDir === "asc" ? (
                            <ArrowUp className="h-3 w-3" />
                          ) : (
                            <ArrowDown className="h-3 w-3" />
                          )
                        ) : (
                          <ArrowUpDown className="h-3 w-3 opacity-40" />
                        )}
                      </span>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {display.map((r, i) => (
                <tr
                  key={`${r.model}-${r.size}-${i}`}
                  className="border-t border-white/5 hover:bg-white/[0.025] transition-colors group"
                >
                  <td className="px-4 py-3 font-medium">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-muted-foreground w-5">#{i + 1}</span>
                      <span>{r.model}</span>
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono">

                        {r.family}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{r.size}</td>
                  <td className={`px-4 py-3 font-mono font-semibold ${scoreColor(r.overall)}`}>
                    {r.overall.toFixed(1)}
                  </td>
                  {(["material", "viewpoint", "geometry", "lighting"] as const).map((k, idx) => (
                    <td
                      key={k}
                      className={`px-4 py-3 font-mono ${scoreColor(r[k])} ${idx === 0 ? "border-l border-white/5" : ""}`}
                    >
                      {r[k].toFixed(1)}
                    </td>
                  ))}
                  {(["grounding", "planning", "reasoning"] as const).map((k, idx) => (
                    <td
                      key={k}
                      className={`px-4 py-3 font-mono ${scoreColor(r[k])} ${idx === 0 ? "border-l-2 border-violet/30" : ""}`}
                    >
                      {r[k].toFixed(1)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {compact && (
        <div className="text-center">
          <Link
            to="/leaderboards"
            className="text-xs font-mono text-primary hover:underline transition-colors"
          >
            View full leaderboard →
          </Link>
        </div>
      )}
    </div>
  );
}
