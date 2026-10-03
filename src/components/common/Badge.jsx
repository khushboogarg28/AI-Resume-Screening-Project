import React from 'react';

export const Badge = ({
  children,
  variant = 'default',
  size = 'md',
  dot = false,
  className = ''
}) => {
  const sizeStyles = {
    sm: "px-2 py-0.5 text-xs font-medium",
    md: "px-2.5 py-1 text-xs font-semibold",
    lg: "px-3 py-1.5 text-sm font-semibold"
  };

  const variantStyles = {
    default: "bg-slate-800 text-slate-300 border border-slate-700/80 light:bg-slate-100 light:text-slate-700 light:border-slate-300",
    primary: "bg-indigo-950/80 text-indigo-300 border border-indigo-500/30",
    success: "bg-emerald-950/80 text-emerald-300 border border-emerald-500/30",
    warning: "bg-amber-950/80 text-amber-300 border border-amber-500/30",
    danger: "bg-rose-950/80 text-rose-300 border border-rose-500/30",
    cyan: "bg-cyan-950/80 text-cyan-300 border border-cyan-500/30",
    purple: "bg-purple-950/80 text-purple-300 border border-purple-500/30",
    glass: "bg-white/5 backdrop-blur-md text-white border border-white/10"
  };

  const dotColors = {
    default: "bg-slate-400",
    primary: "bg-indigo-400",
    success: "bg-emerald-400 animate-pulse",
    warning: "bg-amber-400",
    danger: "bg-rose-400",
    cyan: "bg-cyan-400",
    purple: "bg-purple-400",
    glass: "bg-white"
  };

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      {dot && <span className={`w-1.5 h-1.5 rounded-full ${dotColors[variant] || 'bg-current'}`} />}
      {children}
    </span>
  );
};
