import type { ReactNode } from "react";

interface FigureCardProps {
  figure: string;
  src: string;
  alt: string;
  caption: ReactNode;
}

export function FigureCard({ figure, src, alt, caption }: FigureCardProps) {
  return (
    <figure className="space-y-3">
      <img
        src={src}
        alt={alt}
        className="w-full h-auto rounded-xl"
        loading="lazy"
      />
      <figcaption className="text-sm text-muted-foreground leading-relaxed">
        <span className="font-mono text-xs text-primary mr-2">Figure {figure}.</span>
        {caption}
      </figcaption>
    </figure>
  );
}
