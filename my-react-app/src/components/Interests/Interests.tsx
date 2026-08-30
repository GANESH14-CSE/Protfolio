import React from 'react';

const interests = [
  { icon: '🤖', label: 'AI & Deep Learning' },
  { icon: '⚡', label: 'Scalable Systems' },
  { icon: '🌐', label: 'Full Stack Engineering' },
  { icon: '🗄️', label: 'Database Optimization' },
  { icon: '🔌', label: 'REST & GraphQL APIs' },
  { icon: '🚀', label: 'Cloud & Microservices' },
  { icon: '🎙️', label: 'Realtime Voice & Media' },
  { icon: '💡', label: 'Open Source' },
  { icon: '🧩', label: 'Problem Solving' },
  { icon: '📈', label: 'System Architecture' },
];

export const Interests: React.FC = () => {
  return (
    <section id="interests" className="py-24 px-6 sm:px-10 lg:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-14 text-left">
          <div className="inline-flex items-center gap-1.5 bg-[#e8f3fd] text-[#1e4db7] px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-3">
            <span className="text-[0.6rem]">◆</span>
            <span>Interests</span>
          </div>
          <h2 className="font-syne font-extrabold text-3xl sm:text-4xl text-[#0f2757] tracking-tight mb-3">
            Things that excite me
          </h2>
          <p className="text-[#6b86a5] text-base sm:text-lg max-w-xl">
            Beyond the resume — the engineering domains and technologies that keep me curious and building every day.
          </p>
        </div>

        {/* Interests Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {interests.map((item) => (
            <div
              key={item.label}
              className="group relative bg-[#f4f8fd] border border-[#c8dff8]/70 rounded-[20px] p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_36px_rgba(72,145,217,0.2)] overflow-hidden cursor-default"
            >
              {/* Hover Gradient Backdrop */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#e8f3fd] to-[#c8dff8] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Emoji Icon */}
              <div className="relative z-10 text-3xl mb-3 group-hover:scale-110 transition-transform duration-200">
                {item.icon}
              </div>

              {/* Label */}
              <div className="relative z-10 text-xs sm:text-sm font-bold text-[#0f2757]">
                {item.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Interests;
