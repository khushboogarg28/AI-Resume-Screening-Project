import React from 'react';
import { Sparkles, Heart, ShieldAlert, Github, Twitter, Linkedin } from 'lucide-react';

export const Footer = ({ onNavigate }) => {
  return (
    <footer className="border-t border-white/10 bg-[#060810] text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-white/10">
          {/* Brand */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('landing')}>
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center shadow-glow-sm">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Resume<span className="text-indigo-400">IQ</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              AI-assisted resume screening and personalized interview recommendation platform for high-performance recruitment teams.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-3">Product</h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => onNavigate('screen')} className="hover:text-white transition-colors">Screen Resume</button></li>
              <li><button onClick={() => onNavigate('candidates')} className="hover:text-white transition-colors">Candidates Pipeline</button></li>
              <li><button onClick={() => onNavigate('jobs')} className="hover:text-white transition-colors">Job Descriptions</button></li>
              <li><button onClick={() => onNavigate('interviews')} className="hover:text-white transition-colors">Interview Recommender</button></li>
              <li><button onClick={() => onNavigate('analytics')} className="hover:text-white transition-colors">Hiring Analytics</button></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-3">Resources</h4>
            <ul className="space-y-2 text-xs">
              <li><span className="text-slate-400">Explainable AI Architecture</span></li>
              <li><span className="text-slate-400">Skill Taxonomy Guide</span></li>
              <li><span className="text-slate-400">FastAPI & React API Specs</span></li>
              <li><span className="text-slate-400">Candidate Privacy Standard</span></li>
            </ul>
          </div>

          {/* Ethical AI & Legal Notice */}
          <div className="space-y-3">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-300">
              <ShieldAlert className="w-4 h-4 text-amber-400" />
              <span>Ethical AI Disclosure</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              ResumeIQ outputs are designed strictly as decision-support recommendations. Hiring decisions should always be made by qualified human recruiters.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} ResumeIQ. Built for modern talent teams.</p>
          <div className="flex items-center gap-2 text-slate-400">
            <span>Built with React, Vite, Tailwind CSS & FastAPI</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
