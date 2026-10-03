import React from 'react';
import { LandingNavbar } from '../components/layout/LandingNavbar';
import { Hero } from '../components/landing/Hero';
import { FeaturesSection } from '../components/landing/FeaturesSection';
import { HowItWorksSection } from '../components/landing/HowItWorksSection';
import { CTASection } from '../components/landing/CTASection';
import { Footer } from '../components/layout/Footer';
import { Sparkles, Brain, CheckCircle2, ChevronRight, HelpCircle, ArrowRight } from 'lucide-react';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';

export const LandingPage = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white">
      {/* Sticky Blurred Navbar */}
      <LandingNavbar onNavigate={onNavigate} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero onNavigate={onNavigate} />

        {/* Features Grid */}
        <FeaturesSection onNavigate={onNavigate} />

        {/* Interactive Screening Preview Showcase */}
        <section id="screening-preview" className="py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl relative">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 space-y-5">
                  <Badge variant="primary" size="md" dot>Explainable Screening</Badge>
                  <h3 className="text-3xl font-extrabold text-white light:text-slate-900 tracking-tight">
                    Beyond Simple Keyword Counting
                  </h3>
                  <p className="text-slate-400 light:text-slate-600 leading-relaxed text-sm sm:text-base">
                    Traditional Applicant Tracking Systems (ATS) reject qualified candidates due to simple keyword omissions. ResumeIQ analyzes semantic relevance, project depth, and years of hands-on experience, providing clear human-readable explanations.
                  </p>
                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300">
                        <strong>Granular Skill Taxonomy:</strong> Discovers frameworks (e.g. FastAPI, Next.js) and maps them to core disciplines.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300">
                        <strong>Clear Evidence Citations:</strong> Quotes directly from the candidate's achievements and projects.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300">
                        <strong>Honest Confidence Intervals:</strong> Flags when information is missing rather than guessing.
                      </p>
                    </div>
                  </div>
                  <div className="pt-4">
                    <Button
                      variant="primary"
                      size="md"
                      icon={ArrowRight}
                      iconPosition="right"
                      onClick={() => onNavigate('screen')}
                    >
                      Screen A Candidate Now
                    </Button>
                  </div>
                </div>

                <div className="lg:col-span-6 bg-slate-900/90 rounded-2xl p-6 border border-white/10 shadow-xl space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                    <span className="font-bold text-white flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-indigo-400" />
                      AI Explainability Audit Card
                    </span>
                    <span className="text-emerald-400 font-mono font-bold">Confidence: 94%</span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30">
                      <div className="flex items-center gap-2 text-emerald-300 font-bold mb-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        Skills Match: 95%
                      </div>
                      <p className="text-slate-300 leading-relaxed text-[11px]">
                        Strong match because candidate has demonstrated 4+ years of Python, SQL, and Machine Learning across 2 production deployments.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-500/30">
                      <div className="flex items-center gap-2 text-amber-300 font-bold mb-1">
                        <span className="w-2 h-2 rounded-full bg-amber-400" />
                        Experience Gap: Moderate
                      </div>
                      <p className="text-slate-300 leading-relaxed text-[11px]">
                        Candidate has 3.8 years total experience vs. 4+ years requested; candidate was promoted twice in 24 months, offsetting the delta.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-500/30">
                      <div className="flex items-center gap-2 text-rose-300 font-bold mb-1">
                        <span className="w-2 h-2 rounded-full bg-rose-400" />
                        Missing Competency: Kubernetes
                      </div>
                      <p className="text-slate-300 leading-relaxed text-[11px]">
                        Role requires multi-cluster orchestration. Candidate mentions Docker and AWS ECS, but not Kubernetes Pod/Deployment architectures.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4-Step How It Works */}
        <HowItWorksSection onNavigate={onNavigate} />

        {/* Interactive Interview Preview */}
        <section id="interview-preview" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 bg-gradient-to-br from-indigo-900/40 to-slate-900 p-6 sm:p-8 rounded-2xl border border-indigo-500/30 shadow-xl space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="purple" size="sm">Interview Generator</Badge>
                  <span className="text-[11px] font-mono text-indigo-300">Role: Senior AI Engineer</span>
                </div>
                <h4 className="text-lg font-bold text-white">Synthesized Skill Gap Question</h4>
                <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="danger" size="sm">Hard</Badge>
                    <span className="text-xs font-semibold text-slate-400">Category: Skill Gap (Kubernetes)</span>
                  </div>
                  <p className="text-sm text-slate-200 font-medium leading-relaxed">
                    "While your resume highlights Docker and AWS ECS, our infrastructure uses multi-node Kubernetes. How would you design a rolling update strategy for our FastAPI LLM services to guarantee zero downtime during schema migrations?"
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-indigo-950/60 border border-indigo-500/30 text-xs text-indigo-200">
                  <strong>Expected Evaluation Rubric:</strong> Pod disruption budgets, liveness/readiness probes, and expand/contract database migrations.
                </div>
              </div>

              <div className="lg:col-span-7 space-y-5">
                <Badge variant="cyan" size="md" dot>Tailored Evaluation</Badge>
                <h3 className="text-3xl font-extrabold text-white light:text-slate-900 tracking-tight">
                  Stop Asking Generic Interview Questions
                </h3>
                <p className="text-slate-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
                  ResumeIQ crafts personalized interview questions mapped specifically to what the candidate wrote in their resume and what the job description requires. Recruiters can probe suspected skill gaps with precision.
                </p>
                <div className="grid grid-cols-2 gap-4 text-xs font-medium text-slate-300">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-indigo-400 font-bold block mb-1">5 Question Categories</span>
                    Technical, Project, Behavioral, Situational & Skill Gaps.
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-cyan-400 font-bold block mb-1">Live Interview Mode</span>
                    Integrated timer, question tracker, and scoring criteria.
                  </div>
                </div>
                <div className="pt-2">
                  <Button
                    variant="outline"
                    size="md"
                    icon={ChevronRight}
                    iconPosition="right"
                    onClick={() => onNavigate('interviews')}
                  >
                    View Interview Recommender
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <CTASection onNavigate={onNavigate} />
      </main>

      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
};
