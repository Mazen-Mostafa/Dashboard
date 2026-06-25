// components/PurpleBackground.tsx
import { ReactNode } from "react";

interface PurpleBackgroundProps {
  children: ReactNode;
  className?: string;
}

export default function PurpleBackground({
  children,
  className = "",
}: PurpleBackgroundProps) {
  return (
    <div
      className={`relative w-full overflow-hidden bg-[var(--primary-1)] ${className}`}
    >
      {/* glowing circle shapes */}
      <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-[var(--primary-2)] opacity-50 blur-2xl pointer-events-none" />
      <div className="absolute bottom-[-160px] right-20 w-[380px] h-[380px] rounded-full bg-[var(--primary-2)] opacity-40 blur-2xl pointer-events-none" />
      <div className="absolute top-1/3 -left-24 w-[260px] h-[260px] rounded-full bg-[var(--primary-2)] opacity-30 blur-2xl pointer-events-none" />

      {/* content sits above the shapes */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
