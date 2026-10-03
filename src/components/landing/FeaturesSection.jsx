import React from 'react';
import { 
  FileCheck, 
  Cpu, 
  Layers, 
  BarChart, 
  HelpCircle, 
  LineChart, 
  UserCheck, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

export const FeaturesSection = ({ onNavigate }) => {
  const features = [
    {
      icon: FileCheck,
      title: "AI Resume Screening",
      description: "Extract structured candidates from PDF and DOCX files automatically, identifying work history, education, skills, and quantifiable achievements.",
      accent: "from-blue-500/20 to-indigo-500/20",
      iconColor: "text-blue-400",
      action: "screen"
    },
    {
      icon: Cpu,
      title: "Job Matching Engine",
      description: "Perform comprehensive semantic comparison between candidate resumes and specific job requirements across skills, experience, and certifications.",
      accent: "from-indigo-500/20 to-purple-500/20",
      iconColor: "text-indigo-400",
      action: "jobs"
    },
    {
      icon: Layers,
      title: "Skill Gap Analysis",
      description: "Categorize skills into Matched, Missing, and Additional competencies so recruiters can immediately diagnose technical gaps.",
      accent: "from-cyan-500/20 to-teal-500/20",
      iconColor: "text-cyan-400",
      action: "candidates"
    },
    {
      icon: BarChart,
      title: "Candidate Ranking",
      description: "Rank candidates dynamically using transparent 6-factor composite scores, eliminating bias and surfacing top talent in seconds.",
      accent: "from-emerald-500/20 to-cyan-500/20",
      iconColor: "text-emerald-400",
      action: "candidates"
    },
    {
      icon: UserCheck,
      title: "Interview Recommendations",
      description: "Generate objective AI-assisted verdicts (Recommended, Needs Further Review, Not Recommended) backed by clear rationales.",
      accent: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-400",
      action: "interviews"
    },
    {
      icon: HelpCircle,
      title: "AI Interview Questions",
      description: "Automatically synthesize targeted interview questions categorized by Technical, Project, Behavioral, Situational, and Skill Gaps.",
      accent: "from-amber-500/20 to-orange-500/20",
      iconColor: "text-amber-400",
      action: "interviews"
    },
    {
      icon: LineChart,
      title: "Analytics Dashboard",
      description: "Track recruitment pipeline health, match score distributions, skill availability trends, and shortlist conversion rates in real time.",
      accent: "from-indigo-500/20 to-blue-500/20",
      iconColor: "text-indigo-400",
      action: "analytics"
    },
    {
      icon: Sparkles,
      title: "Explainable AI Insights",
      description: "No black boxes. Every score is supported by clear evidence citations distinguishing resume claims from job necessities.",
      accent: "from-rose-500/20 to-red-500/20",
      iconColor: "text-rose-400",
      action: "screen"
    }
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Platform Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white light:text-slate-900">
            Engineered For High-Velocity, <span className="text-gradient-brand">High-Precision Hiring</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 light:text-slate-600">
            A complete recruitment intelligence suite designed to eliminate hours of manual resume skimming and prepare hiring managers for decisive technical interviews.
          </p>
        </div>

        {/* 8 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                onClick={() => onNavigate(feature.action)}
                className="group relative glass-card rounded-2xl p-6 border border-slate-800/80 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-sm cursor-pointer flex flex-col justify-between"
              >
                {/* Subtle top corner gradient accent */}
                <div className={`absolute top-0 right-0 w-28 h-28 bg-gradient-to-br ${feature.accent} rounded-bl-full opacity-30 group-hover:opacity-60 transition-opacity blur-xl -z-10`} />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-900/90 border border-slate-700/80 flex items-center justify-center group-hover:scale-110 group-hover:border-indigo-500/60 transition-all duration-300 shadow-sm">
                      <Icon className={`w-6 h-6 ${feature.iconColor}`} />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>

                  <h3 className="text-lg font-bold text-white light:text-slate-900 group-hover:text-indigo-300 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-slate-400 light:text-slate-600 mt-2.5 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-xs font-semibold text-indigo-400 group-hover:text-indigo-300">
                  <span>Explore Feature</span>
                  <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
