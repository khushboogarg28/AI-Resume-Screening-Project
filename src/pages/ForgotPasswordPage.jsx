import React, { useState } from 'react';
import { Sparkles, Mail, ArrowRight, CheckCircle2, ArrowLeft } from 'lucide-react';
import { Button } from '../components/common/Button';
import { useNotifications } from '../context/NotificationContext';

export const ForgotPasswordPage = ({ onNavigate }) => {
  const { addToast } = useNotifications();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid work email address');
      return;
    }
    setError('');
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
      addToast('Password reset link sent (Simulation)', 'info');
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-gradient-to-tr from-indigo-600/20 to-cyan-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />

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
          Reset your password
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Enter your registered work email and we will send a recovery token
        </p>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md px-4 sm:px-0">
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl relative">
          {submitted ? (
            <div className="text-center space-y-4 py-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-white light:text-slate-900">
                Reset Link Dispatched
              </h3>
              <p className="text-xs text-slate-300 light:text-slate-600 leading-relaxed">
                If an account matches <strong className="text-indigo-300">{email}</strong>, you will receive an email with instructions to securely choose a new password.
              </p>
              <div className="pt-4">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => onNavigate('login')}
                  className="w-full"
                >
                  Return to Sign In
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
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
                      error ? 'border-rose-500' : 'border-slate-700 light:border-slate-300'
                    }`}
                  />
                </div>
                {error && <p className="text-xs text-rose-400 mt-1 font-medium">{error}</p>}
              </div>

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
                  Send Reset Instructions
                </Button>
              </div>

              <div className="pt-2 text-center">
                <button
                  type="button"
                  onClick={() => onNavigate('login')}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Sign In</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
