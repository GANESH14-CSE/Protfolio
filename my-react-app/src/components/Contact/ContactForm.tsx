import React, { useState } from 'react';
import { Mail, Sparkles, ArrowUpRight, Check } from 'lucide-react';
import { FaGoogle } from 'react-icons/fa';

interface TopicOption {
  id: string;
  emoji: string;
  label: string;
  subject: string;
  message: string;
}

const topics: TopicOption[] = [
  {
    id: 'job',
    emoji: '💼',
    label: 'Job Opportunity',
    subject: 'Software Engineering / AI Opportunity for Ganesh',
    message: 'Hi Ganesh,\n\nWe came across your portfolio and would like to discuss an engineering opportunity that matches your backend and AI skills.',
  },
  {
    id: 'ai-project',
    emoji: '🤖',
    label: 'AI & ML Project',
    subject: 'AI & Machine Learning Project Collaboration',
    message: 'Hi Ganesh,\n\nI saw your work with BERT, NLP, and AI applications and would love to collaborate on an AI project with you.',
  },
  {
    id: 'backend-api',
    emoji: '⚡',
    label: 'Backend & APIs',
    subject: 'Backend Architecture & API Development',
    message: 'Hi Ganesh,\n\nI would like to discuss building scalable backend architectures, Django systems, and high-performance REST APIs.',
  },
  {
    id: 'freelance',
    emoji: '🚀',
    label: 'Full-Stack Web App',
    subject: 'Web Application Development Inquiry',
    message: 'Hi Ganesh,\n\nI have a web application project and would like to discuss design, architecture, and development with you.',
  },
  {
    id: 'connect',
    emoji: '☕',
    label: 'Quick Tech Chat',
    subject: 'Connecting & Tech Chat with Ganesh',
    message: 'Hi Ganesh,\n\nLoved your portfolio projects! Reaching out to connect and exchange thoughts on tech and software engineering.',
  },
];

export const ContactForm: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<TopicOption>(topics[0]);
  const [customNote, setCustomNote] = useState('');
  const [copied, setCopied] = useState(false);

  const email = 'ganeshkutty859@gmail.com';
  const finalMessage = customNote.trim() ? customNote : selectedTopic.message;

  // Direct Gmail Web composer link
  const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(selectedTopic.subject)}&body=${encodeURIComponent(finalMessage)}`;
  
  // Direct default mail app link (mailto)
  const defaultMailtoUrl = `mailto:${email}?subject=${encodeURIComponent(selectedTopic.subject)}&body=${encodeURIComponent(finalMessage)}`;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-8 bg-[#0B0F19]/90 border border-white/10 rounded-2xl backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-hidden text-left">
      {/* Ambient Backing Glow */}
      <div className="absolute -top-20 -left-20 w-60 h-60 bg-violet/20 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-electric-blue/20 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 space-y-5">
        {/* Header Badge */}
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet/10 border border-violet/20 text-violet text-xs font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Instant One-Click Contact</span>
          </div>
          <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5 font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Zero Typing Needed
          </span>
        </div>

        {/* Title */}
        <div>
          <h4 className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight mb-1.5">
            What would you like to discuss?
          </h4>
          <p className="font-body text-xs sm:text-sm text-text-secondary">
            Pick a topic below and tap to instantly launch your Gmail with pre-filled details!
          </p>
        </div>

        {/* Interactive Topic Chips */}
        <div>
          <label className="block text-[11px] font-mono text-text-muted uppercase tracking-wider mb-2 font-semibold">
            Select Topic:
          </label>
          <div className="flex flex-wrap gap-2">
            {topics.map((topic) => {
              const isSelected = selectedTopic.id === topic.id;
              return (
                <button
                  key={topic.id}
                  type="button"
                  onClick={() => {
                    setSelectedTopic(topic);
                    setCustomNote('');
                  }}
                  className={`px-3.5 py-2 rounded-xl text-xs font-body font-medium transition-all duration-200 flex items-center gap-2 cursor-pointer border select-none ${
                    isSelected
                      ? 'bg-gradient-to-r from-violet to-electric-blue text-white border-transparent shadow-[0_0_15px_rgba(139,92,246,0.35)] scale-[1.03]'
                      : 'bg-white/[0.03] text-text-secondary border-white/10 hover:border-white/25 hover:text-white'
                  }`}
                >
                  <span className="text-sm">{topic.emoji}</span>
                  <span>{topic.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Preview Message Box */}
        <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4 relative">
          <div className="flex items-center justify-between text-[11px] font-mono text-text-muted mb-2">
            <span className="text-neon-cyan font-semibold">Subject: {selectedTopic.subject}</span>
            <button
              onClick={handleCopyEmail}
              type="button"
              className="text-[10px] text-text-muted hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check size={11} className="text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">Email Copied!</span>
                </>
              ) : (
                <span>Copy Email</span>
              )}
            </button>
          </div>
          <div className="font-mono text-xs text-text-secondary leading-relaxed whitespace-pre-line bg-[#060913]/60 p-3 rounded-lg border border-white/5">
            {finalMessage}
          </div>
        </div>
      </div>

      {/* Action Buttons: Instant Gmail / Mail App Launchers */}
      <div className="relative z-10 pt-5 mt-5 border-t border-white/5 flex flex-col sm:flex-row gap-3">
        {/* Primary Action: Direct Gmail Web Composer */}
        <a
          href={gmailWebUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#EA4335] via-[#E1306C] to-violet text-white font-display font-bold text-sm shadow-[0_0_25px_rgba(234,67,53,0.3)] hover:shadow-[0_0_35px_rgba(234,67,53,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
        >
          <FaGoogle className="w-4 h-4" />
          <span>Open in Gmail</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>

        {/* Secondary Action: Default Mail App */}
        <a
          href={defaultMailtoUrl}
          className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-xs font-semibold transition-all hover:border-white/25 active:scale-[0.98]"
        >
          <Mail className="w-4 h-4 text-electric-blue" />
          <span>Default Mail App</span>
        </a>
      </div>
    </div>
  );
};

export default ContactForm;
