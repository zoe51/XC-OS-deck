interface MountainDividerProps {
  position?: "top" | "bottom";
  color?: string;
  opacity?: number;
}

export default function MountainDivider({
  position = "bottom",
  color = "rgba(212, 168, 83, 0.08)",
  opacity = 1,
}: MountainDividerProps) {
  return (
    <div
      className={`absolute left-0 right-0 pointer-events-none ${
        position === "bottom" ? "bottom-0" : "top-0 rotate-180"
      }`}
      style={{ opacity }}
    >
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto animate-mountain"
        preserveAspectRatio="none"
      >
        <path
          d="M0,120 L0,80 Q120,20 240,60 Q360,100 480,50 Q600,0 720,40 Q840,80 960,30 Q1080,0 1200,50 Q1320,100 1440,60 L1440,120 Z"
          fill={color}
        />
        <path
          d="M0,120 L0,90 Q180,40 360,70 Q540,100 720,55 Q900,10 1080,50 Q1260,90 1440,70 L1440,120 Z"
          fill={color}
          opacity="0.5"
        />
      </svg>
    </div>
  );
}
