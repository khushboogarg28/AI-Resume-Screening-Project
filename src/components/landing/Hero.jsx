import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Bot, FileText, Zap, ChevronRight, BarChart3, Star } from 'lucide-react';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { CircularProgress } from '../common/CircularProgress';

export const Hero = ({ onNavigate }) => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Gradients & Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/15 to-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold backdrop-blur-md animate-pulse-slow">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Next-Generation Autonomous Talent Screening</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white light:text-slate-900 leading-[1.15]">
              Smarter Hiring Starts With{' '}
              <span className="text-gradient-brand">Better Screening.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 light:text-slate-600 font-normal leading-relaxed max-w-2xl">
              AI-powered resume screening and interview recommendations that help recruiters discover the right candidates faster — with explainable match scores and tailored technical evaluations.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                icon={Sparkles}
                onClick={() => onNavigate('screen')}
                className="shadow-glow"
              >
                Start Screening
              </Button>
              <Button
                variant="outline"
                size="lg"
                icon={ChevronRight}
                iconPosition="right"
                onClick={() => {
                  const featSection = document.getElementById('features');
                  if (featSection) featSection.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Features
              </Button>
            </div>

            {/* Micro Highlights */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-medium text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero Paid API Key Required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>PDF & DOCX Instant Parsing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Explainable AI Reasons</span>
              </div>
            </div>
          </div>

          {/* Right Column: Animated Interactive AI Showcase Preview */}
          <div className="lg:col-span-5 relative">
            {/* Glow framing */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-3xl opacity-30 blur-lg group-hover:opacity-100 transition duration-1000 -z-10 animate-pulse-slow" />

            {/* Glass Card Mockup */}
            <div className="glass-card rounded-2xl p-6 border border-slate-700/80 shadow-2xl relative overflow-hidden backdrop-blur-xl">
              {/* Top window dots */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-slate-400 ml-2">resumeiq_screening_engine.py</span>
                </div>
                <Badge variant="success" size="sm" dot>Live AI Match</Badge>
              </div>

              {/* Candidate Quick Header */}
              <div className="flex items-center gap-4 mb-5">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                    alt="Aarav Sharma"
                    className="w-14 h-14 rounded-xl object-cover border-2 border-indigo-500/50 shadow-md"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-[#090d16] flex items-center justify-center">
                    <CheckCircle2 className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-base font-bold text-white light:text-slate-900">Aarav Sharma</h4>
                  <p className="text-xs text-indigo-300 font-medium">Applied for: Senior Full-Stack AI Engineer</p>
                  <p className="text-[11px] text-slate-400">5.2 Years Exp • M.S. Stanford University</p>
                </div>
              </div>

              {/* Match Score Meter & Key Metrics */}
              <div className="grid grid-cols-12 gap-4 items-center bg-slate-900/70 rounded-xl p-4 border border-white/5 mb-5">
                <div className="col-span-5 flex justify-center">
                  <CircularProgress score={92} size={94} strokeWidth={8} subLabel="High" label="" />
                </div>
                <div className="col-span-7 space-y-2.5">
                  <div>
                    <div className="flex justify-between text-xs font-medium mb-1">
                      <span className="text-slate-300">Technical Skills</span>
                      <span className="text-emerald-400 font-bold">95%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full w-[95%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-medium mb-1">
                      <span className="text-slate-300">Experience Match</span>
                      <span className="text-indigo-400 font-bold">92%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-400 rounded-full w-[92%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-medium mb-1">
                      <span className="text-slate-300">Project Relevance</span>
                      <span className="text-cyan-400 font-bold">90%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-400 rounded-full w-[90%]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Skill Chips Comparison */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-300">Matched Core Skills</span>
                  <span className="text-emerald-400 text-[11px] font-bold">7 of 8 Found</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {["Python", "FastAPI", "React", "TypeScript", "SQL", "Docker", "Machine Learning"].map(s => (
                    <span key={s} className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                      ✓ {s}
                    </span>
                  ))}
                  <span className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-rose-500/15 text-rose-300 border border-rose-500/30">
                    ✕ Kubernetes (Missing)
                  </span>
                </div>
              </div>

              {/* Explainable AI callout */}
              <div className="p-3 rounded-xl bg-indigo-950/40 border border-indigo-500/30 flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <p className="text-xs text-indigo-200/90 leading-relaxed">
                  <strong className="text-white">AI Verdict:</strong> Strongly recommended for technical interview. High overlap with production FastAPI and ML pipelines.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Statistics Banner */}
        <div className="mt-20 pt-10 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 transition-all duration-300">
              <span className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight text-gradient-brand">
                10K+
              </span>
              <span className="text-sm font-semibold text-slate-300 mt-1">Resumes Screened</span>
              <span className="text-[11px] text-slate-400 mt-0.5">Platform Demo Metric</span>
            </div>

            <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 transition-all duration-300">
              <span className="text-3xl sm:text-4xl font-extrabold text-emerald-400 tracking-tight">
                95%
              </span>
              <span className="text-sm font-semibold text-slate-300 mt-1">Matching Accuracy</span>
              <span className="text-[11px] text-slate-400 mt-0.5">Semantic + Skill Overlap</span>
            </div>

            <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 transition-all duration-300">
              <span className="text-3xl sm:text-4xl font-extrabold text-cyan-400 tracking-tight">
                70%
              </span>
              <span className="text-sm font-semibold text-slate-300 mt-1">Faster Screening</span>
              <span className="text-[11px] text-slate-400 mt-0.5">Hours to Seconds</span>
            </div>

            <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 transition-all duration-300">
              <span className="text-3xl sm:text-4xl font-extrabold text-purple-400 tracking-tight">
                5K+
              </span>
              <span className="text-sm font-semibold text-slate-300 mt-1">Candidates Analyzed</span>
              <span className="text-[11px] text-slate-400 mt-0.5">Across Tech Verticals</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
