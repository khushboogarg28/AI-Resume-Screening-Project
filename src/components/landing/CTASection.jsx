import React from 'react';
import { ArrowRight, Sparkles, Shield, Zap, CheckCircle2 } from 'lucide-react';
import { Button } from '../common/Button';

export const CTASection = ({ onNavigate }) => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-indigo-600/30 to-purple-600/30 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-8 sm:p-14 border border-indigo-500/30 shadow-2xl relative overflow-hidden text-center space-y-8 backdrop-blur-2xl">
          {/* Top highlight beam */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
            <Zap className="w-3.5 h-3.5 text-indigo-400" />
            <span>Ready in under 2 minutes</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white light:text-slate-900 leading-tight max-w-2xl mx-auto">
            Find the right candidate <span className="text-gradient-brand">faster.</span>
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 light:text-slate-600 max-w-xl mx-auto leading-relaxed">
            Eliminate resume screening fatigue. Leverage transparent match scores, instant skill gap analysis, and tailored interview questions today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button
              variant="primary"
              size="lg"
              icon={Sparkles}
              onClick={() => onNavigate('screen')}
              className="shadow-glow text-base px-8 py-3.5"
            >
              Start Screening
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => onNavigate('dashboard')}
              className="text-base px-8 py-3.5"
            >
              Open Recruiter Dashboard
            </Button>
          </div>

          {/* Trust Guarantees */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-white/10 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>100% Free & Open-Source Stack</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Full Privacy & Local Storage</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Preloaded Demo Dataset</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
