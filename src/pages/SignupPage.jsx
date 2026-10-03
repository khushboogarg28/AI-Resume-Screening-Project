import React, { useState } from 'react';
import { Sparkles, Eye, EyeOff, Lock, Mail, User, Building2, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { Button } from '../components/common/Button';
import { useAuth } from '../context/AuthContext';
import { useNotifications } from '../context/NotificationContext';

export const SignupPage = ({ onNavigate }) => {
  const { signup } = useAuth();
  const { addToast } = useNotifications();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(true);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Compute password strength
  const getPasswordStrength = () => {
    if (!password) return 0;
    let score = 0;
    if (password.length >= 6) score += 1;
    if (password.length >= 10) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;
    return score;
  };

  const strength = getPasswordStrength();

  const validate = () => {
    const errs = {};
    if (!name.trim()) errs.name = 'Full name is required';
    if (!email.trim()) {
      errs.email = 'Work email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errs.email = 'Please provide a valid work email';
    }
    if (!company.trim()) errs.company = 'Company name is required';
    if (!password) {
      errs.password = 'Password is required';
    } else if (password.length < 6) {
      errs.password = 'Password must be at least 6 characters';
    }
    if (!agreed) {
      errs.agreed = 'Please accept the terms of service';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    setTimeout(() => {
      signup(name, email, company, password);
      setIsLoading(false);
      addToast(`Welcome to ResumeIQ, ${name}! Your recruiter workspace is ready.`, 'success');
      onNavigate('dashboard');
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[450px] bg-gradient-to-tr from-purple-600/20 via-indigo-600/10 to-cyan-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Brand Header */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center mb-6">
        <div
          onClick={() => onNavigate('landing')}
          className="inline-flex items-center gap-2 cursor-pointer group mb-3"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-400 p-[1.5px] shadow-glow-sm">
            <div className="w-full h-full bg-[#090d16] rounded-[10px] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-indigo-400" />
            </div>
          </div>
          <span className="text-2xl font-black tracking-tight text-white light:text-slate-900">
            Resume<span className="text-indigo-400">IQ</span>
          </span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-white light:text-slate-900">
          Create your recruiter workspace
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Start screening candidates with explainable AI and interview intelligence
        </p>
      </div>

      {/* Main Form Box */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md px-4 sm:px-0">
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl relative">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 light:text-slate-700 mb-1.5">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Sarah Jenkins"
                  className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/80 light:bg-white border text-sm text-white light:text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors ${
                    errors.name ? 'border-rose-500' : 'border-slate-700 light:border-slate-300'
                  }`}
                />
              </div>
              {errors.name && <p className="text-xs text-rose-400 mt-1 font-medium">{errors.name}</p>}
            </div>

            {/* Work Email */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 light:text-slate-700 mb-1.5">
                Work Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="sarah@acme-talent.com"
                  className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/80 light:bg-white border text-sm text-white light:text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors ${
                    errors.email ? 'border-rose-500' : 'border-slate-700 light:border-slate-300'
                  }`}
                />
              </div>
              {errors.email && <p className="text-xs text-rose-400 mt-1 font-medium">{errors.email}</p>}
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 light:text-slate-700 mb-1.5">
                Company / Organization
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Building2 className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Acme Talent Partners"
                  className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/80 light:bg-white border text-sm text-white light:text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors ${
                    errors.company ? 'border-rose-500' : 'border-slate-700 light:border-slate-300'
                  }`}
                />
              </div>
              {errors.company && <p className="text-xs text-rose-400 mt-1 font-medium">{errors.company}</p>}
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 light:text-slate-700 mb-1.5">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create secure password"
                  className={`w-full pl-10 pr-10 py-2.5 rounded-xl bg-slate-900/80 light:bg-white border text-sm text-white light:text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors ${
                    errors.password ? 'border-rose-500' : 'border-slate-700 light:border-slate-300'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-200"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {/* Password strength meter */}
              {password && (
                <div className="mt-2 space-y-1">
                  <div className="flex gap-1 h-1">
                    {[1, 2, 3, 4].map((step) => (
                      <div
                        key={step}
                        className={`h-full flex-1 rounded-full transition-colors ${
                          strength >= step
                            ? strength <= 2
                              ? 'bg-amber-400'
                              : 'bg-emerald-400'
                            : 'bg-slate-700'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] text-slate-400">
                    {strength <= 1 && 'Weak password'}
                    {strength === 2 && 'Fair password'}
                    {strength === 3 && 'Good password'}
                    {strength === 4 && 'Strong password'}
                  </span>
                </div>
              )}
              {errors.password && <p className="text-xs text-rose-400 mt-1 font-medium">{errors.password}</p>}
            </div>

            {/* Terms checkbox */}
            <div className="pt-1">
              <label className="flex items-start gap-2.5 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="w-4 h-4 mt-0.5 rounded border-slate-700 bg-slate-900 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="text-xs text-slate-400 leading-normal">
                  I agree to the <span className="text-indigo-400">Terms of Service</span> and acknowledge that AI screening recommendations are assistive.
                </span>
              </label>
              {errors.agreed && <p className="text-xs text-rose-400 mt-1 font-medium">{errors.agreed}</p>}
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <Button
                type="submit"
                variant="primary"
                size="md"
                isLoading={isLoading}
                icon={ArrowRight}
                iconPosition="right"
                className="w-full shadow-glow-sm"
              >
                Create Recruiter Account
              </Button>
            </div>
          </form>

          {/* Footer */}
          <div className="mt-6 pt-5 border-t border-white/10 text-center">
            <p className="text-xs text-slate-400">
              Already have an account?{' '}
              <button
                onClick={() => onNavigate('login')}
                className="font-bold text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                Sign In
              </button>
            </p>
          </div>
        </div>

        <div className="text-center mt-6">
          <button
            onClick={() => onNavigate('landing')}
            className="text-xs text-slate-400 hover:text-slate-200 transition-colors"
          >
            ← Back to Homepage
          </button>
        </div>
      </div>
    </div>
  );
};
