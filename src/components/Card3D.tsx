import React, { useEffect, useRef } from "react";
import "./Card3D.css";

type Card3DProps = {
  title: string;
  content: string;
  icon?: React.ReactNode;
  color?: string;
  className?: string;
  maxTilt?: number;
  svgPath?: string;
};

const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));

const Card3D: React.FC<Card3DProps> = ({
  title,
  content,
  icon,
  color,
  className,
  maxTilt = 16,
  svgPath
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const raf = useRef<number | null>(null);
  const pending = useRef<{ rx: number; ry: number } | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Set the SVG background if provided
    if (svgPath) {
      el.style.setProperty('--card-svg', `url('${svgPath}')`);
    }

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const nx = x / rect.width * 2 - 1;
      const ny = y / rect.height * 2 - 1;

      const ry = clamp(nx * maxTilt, -maxTilt, maxTilt);
      const rx = clamp(-ny * maxTilt, -maxTilt, maxTilt);

      pending.current = { rx, ry };
      if (raf.current == null) {
        raf.current = requestAnimationFrame(() => {
          const p = pending.current;
          if (p) {
            el.style.setProperty("--rotateX", `${p.rx}deg`);
            el.style.setProperty("--rotateY", `${p.ry}deg`);
          }
          raf.current = null;
        });
      }
    };

    const reset = () => {
      el.style.setProperty("--rotateX", "0deg");
      el.style.setProperty("--rotateY", "0deg");
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", reset);
    el.addEventListener("pointercancel", reset);
    el.addEventListener("blur", reset, true);

    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", reset);
      el.removeEventListener("pointercancel", reset);
      el.removeEventListener("blur", reset, true);
      if (raf.current != null) cancelAnimationFrame(raf.current);
    };
  }, [maxTilt]);

  return (
    <div
      ref={ref}
      className={`card-3d ${className ?? ""}`}
      style={
        color
          ? ({ ["--accent" as any]: color } as React.CSSProperties)
          : undefined
      }
      tabIndex={0}
      role="group"
      aria-label={`${title} card`}
      data-svg-path={svgPath}
    >
      {icon && <div className="card-3d__icon" aria-hidden>{icon}</div>}
      <h3 className="card-3d__title">{title}</h3>
      <p className="card-3d__content">{content}</p>
    </div>
  );
};

export default Card3D;
