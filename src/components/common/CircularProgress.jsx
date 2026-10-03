import React from 'react';

export const CircularProgress = ({
  score = 0,
  size = 120,
  strokeWidth = 10,
  showLabel = true,
  label = "Match Score",
  subLabel = "",
  className = ""
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (Math.min(Math.max(score, 0), 100) / 100) * circumference;

  const getColor = (s) => {
    if (s >= 85) return { stroke: "url(#emerald-gradient)", text: "text-emerald-400", glow: "rgba(16, 185, 129, 0.4)" };
    if (s >= 70) return { stroke: "url(#indigo-gradient)", text: "text-indigo-400", glow: "rgba(99, 102, 241, 0.4)" };
    if (s >= 50) return { stroke: "url(#amber-gradient)", text: "text-amber-400", glow: "rgba(245, 158, 11, 0.4)" };
    return { stroke: "url(#rose-gradient)", text: "text-rose-400", glow: "rgba(244, 63, 94, 0.4)" };
  };

  const styleConfig = getColor(score);

  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="transform -rotate-90"
      >
        <defs>
          <linearGradient id="emerald-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
          <linearGradient id="indigo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="#4f46e5" />
          </linearGradient>
          <linearGradient id="amber-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
          <linearGradient id="rose-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fb7185" />
            <stop offset="100%" stopColor="#e11d48" />
          </linearGradient>
        </defs>

        {/* Background track circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(255, 255, 255, 0.08)"
          strokeWidth={strokeWidth}
          fill="transparent"
          className="light:stroke-slate-200"
        />

        {/* Progress active circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={styleConfig.stroke}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
          style={{
            filter: `drop-shadow(0 0 6px ${styleConfig.glow})`
          }}
        />
      </svg>

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <span className={`text-2xl font-extrabold tracking-tight ${styleConfig.text}`}>
          {score}%
        </span>
        {subLabel && (
          <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
            {subLabel}
          </span>
        )}
      </div>

      {showLabel && label && (
        <span className="mt-2 text-xs font-semibold text-slate-400 text-center tracking-wide">
          {label}
        </span>
      )}
    </div>
  );
};
