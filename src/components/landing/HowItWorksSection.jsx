import React from 'react';
import { UploadCloud, FileEdit, BrainCircuit, CheckSquare, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '../common/Button';

export const HowItWorksSection = ({ onNavigate }) => {
  const steps = [
    {
      number: "01",
      icon: UploadCloud,
      title: "Upload Resume",
      description: "Drop single or bulk resumes in PDF, DOC, or DOCX format. The parser extracts text, tables, and credentials automatically.",
      detail: "Supports standard PDF & Word documents"
    },
    {
      number: "02",
      icon: FileEdit,
      title: "Add Job Description",
      description: "Define job title, required skills, preferred competencies, minimum years of experience, and educational prerequisites.",
      detail: "Or pick from curated role templates"
    },
    {
      number: "03",
      icon: BrainCircuit,
      title: "AI Analyzes Candidate",
      description: "The engine compares resume claims against job criteria, performing semantic matching, skill gap discovery, and score weighting.",
      detail: "Generates explainable scoring breakdowns"
    },
    {
      number: "04",
      icon: CheckSquare,
      title: "Get Interview Plan",
      description: "Review automated hiring recommendation, shortlist status, and tailored interview questions designed to test detected skill gaps.",
      detail: "Launch live interview simulator with 1-click"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden bg-slate-900/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Seamless 4-Step Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white light:text-slate-900">
            How <span className="text-gradient-cyan">ResumeIQ Works</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 light:text-slate-600">
            Transform an ambiguous stack of resumes into a ranked, structured candidate pipeline with personalized interview prep in under 30 seconds.
          </p>
        </div>

        {/* 4 Steps with connecting line */}
        <div className="relative">
          {/* Desktop Connecting horizontal line */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-gradient-to-r from-indigo-500/20 via-cyan-500/40 to-indigo-500/20 -translate-y-8 pointer-events-none -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="group relative glass-card rounded-2xl p-6 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow-cyan flex flex-col justify-between"
                >
                  <div>
                    {/* Top step number and badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-600/30 to-cyan-500/20 border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                        <Icon className="w-7 h-7 text-cyan-400" />
                      </div>
                      <span className="font-mono text-2xl font-black text-slate-600 group-hover:text-cyan-400 transition-colors">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white light:text-slate-900 mb-2.5">
                      {step.title}
                    </h3>

                    <p className="text-sm text-slate-400 light:text-slate-600 leading-relaxed mb-4">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5">
                    <span className="inline-block text-[11px] font-semibold px-2.5 py-1 rounded-md bg-white/5 text-cyan-300 border border-white/10">
                      {step.detail}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA within How It Works */}
        <div className="mt-16 text-center">
          <Button
            variant="primary"
            size="lg"
            icon={ArrowRight}
            iconPosition="right"
            onClick={() => onNavigate('screen')}
            className="shadow-glow"
          >
            Try It Now With Sample Resumes
          </Button>
        </div>
      </div>
    </section>
  );
};
