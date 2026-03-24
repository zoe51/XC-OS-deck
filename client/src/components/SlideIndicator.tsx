interface SlideIndicatorProps {
  total: number;
  active: number;
  onNavigate: (index: number) => void;
  labels: string[];
}

export default function SlideIndicator({
  total,
  active,
  onNavigate,
  labels,
}: SlideIndicatorProps) {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-3">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onNavigate(i)}
          className="group flex items-center gap-3"
          aria-label={`Go to slide ${i + 1}`}
        >
          <span
            className={`text-xs font-light tracking-wide transition-all duration-300 ${
              active === i
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-4 group-hover:opacity-60 group-hover:translate-x-0"
            }`}
            style={{
              fontFamily: "'Noto Sans SC', sans-serif",
              color: active === i ? "#d4a853" : "#e8e4df",
            }}
          >
            {labels[i]}
          </span>
          <div
            className={`rounded-full transition-all duration-300 ${
              active === i
                ? "w-2 h-6"
                : "w-1.5 h-1.5 group-hover:w-2 group-hover:h-2"
            }`}
            style={{
              backgroundColor:
                active === i ? "#d4a853" : "rgba(232, 228, 223, 0.3)",
            }}
          />
        </button>
      ))}
    </div>
  );
}
