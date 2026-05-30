import { Link } from "@tanstack/react-router";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="glass-strong border-b border-white/5">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative h-7 w-7 rounded-md bg-gradient-to-br from-cyan to-violet shadow-[0_0_20px_-2px_var(--cyan)]" />
            <span className="font-mono text-sm tracking-tight">
              <span className="text-gradient font-semibold">RoboStressBench</span>
            </span>
          </Link>
          <nav className="flex items-center gap-1 text-sm">
            <Link
              to="/"
              activeOptions={{ exact: true }}
              className="px-3 py-1.5 rounded-md text-muted-foreground hover:text-foreground transition-colors [&.active]:text-foreground [&.active]:bg-white/5"
            >
              Home
            </Link>
            <Link
              to="/leaderboards"
              className="px-3 py-1.5 rounded-md text-muted-foreground hover:text-foreground transition-colors [&.active]:text-foreground [&.active]:bg-white/5"
            >
              Leaderboards
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
