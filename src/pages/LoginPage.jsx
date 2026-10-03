import React, { useState } from 'react';
import { Sparkles, Eye, EyeOff, Lock, Mail, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { Button } from '../components/common/Button';
import { useAuth } from '../context/AuthContext';
import { useNotifications } from '../context/NotificationContext';
import { useTheme } from '../context/ThemeContext';

export const LoginPage = ({ onNavigate }) => {
  const { login } = useAuth();
  const { addToast } = useNotifications();
  const { isDark } = useTheme();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validate = () => {
    const errs = {};
    if (!email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errs.email = 'Please enter a valid work email';
    }

    if (!password) {
      errs.password = 'Password is required';
    } else if (password.length < 6) {
      errs.password = 'Password must be at least 6 characters';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    setTimeout(() => {
      login(email, password, rememberMe);
      setIsLoading(false);
      addToast('Signed in successfully as Recruiter', 'success');
      onNavigate('dashboard');
    }, 600);
  };

  const handleDemoLogin = () => {
    setEmail('alexandra.vance@resumeiq.ai');
    setPassword('DemoPass2026!');
    setIsLoading(true);
    setTimeout(() => {
      login('alexandra.vance@resumeiq.ai', 'DemoPass2026!', true);
      setIsLoading(false);
      addToast('Signed in as Demo Recruiter (Alexandra Vance)', 'success');
      onNavigate('dashboard');
    }, 400);
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[450px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/10 to-cyan-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Brand Header */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center mb-8">
        <div
          onClick={() => onNavigate('landing')}
          className="inline-flex items-center gap-2 cursor-pointer group mb-4"
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
          Welcome back, Recruiter
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Access your candidate screening pipeline and interview recommendations
        </p>
      </div>

      {/* Main Form Box */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md px-4 sm:px-0">
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl relative">
          {/* Quick Demo Fill Banner */}
          <div className="mb-6 p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-indigo-300">
              <ShieldCheck className="w-4 h-4 text-indigo-400" />
              <span>Instant Recruiter Demo</span>
            </div>
            <button
              type="button"
              onClick={handleDemoLogin}
              className="text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 px-2.5 py-1 rounded-lg transition-colors shadow-sm"
            >
              1-Click Demo Login
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 light:text-slate-700 mb-1.5">
                Work Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="recruiter@company.com"
                  className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/80 light:bg-white border text-sm text-white light:text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors ${
                    errors.email ? 'border-rose-500' : 'border-slate-700 light:border-slate-300'
                  }`}
                />
              </div>
              {errors.email && (
                <p className="text-xs text-rose-400 mt-1 font-medium">{errors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-semibold text-slate-300 light:text-slate-700">
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => onNavigate('forgot-password')}
                  className="text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
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
              {errors.password && (
                <p className="text-xs text-rose-400 mt-1 font-medium">{errors.password}</p>
              )}
            </div>

            {/* Remember Me Checkbox */}
            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-slate-700 bg-slate-900 text-indigo-600 focus:ring-indigo-500 focus:ring-offset-0"
                />
                <span className="text-xs text-slate-400 light:text-slate-600">Remember this device</span>
              </label>
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
                Sign In to ResumeIQ
              </Button>
            </div>
          </form>

          {/* Footer inside Card */}
          <div className="mt-6 pt-5 border-t border-white/10 text-center">
            <p className="text-xs text-slate-400">
              Don't have a recruiter account?{' '}
              <button
                onClick={() => onNavigate('signup')}
                className="font-bold text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                Sign up for free
              </button>
            </p>
          </div>
        </div>

        {/* Back to landing */}
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
