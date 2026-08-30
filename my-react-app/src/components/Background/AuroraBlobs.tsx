import React from 'react';

export const AuroraBlobs: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[0]">
      <style>{`
        @keyframes blob-1 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(80px, 60px) scale(1.1); }
          66% { transform: translate(-60px, 100px) scale(0.95); }
        }
        @keyframes blob-2 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(-100px, -40px) scale(1.15); }
        }
        @keyframes blob-3 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          40% { transform: translate(60px, -80px) scale(0.9); }
          80% { transform: translate(-30px, 40px) scale(1.05); }
        }
      `}</style>
      {/* Blob 1: Electric Blue */}
      <div 
        className="absolute top-[10%] left-[15%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-[#3B82F6] opacity-[0.12] filter blur-[80px] md:blur-[120px]"
        style={{ animation: 'blob-1 12s infinite ease-in-out' }}
      />
      {/* Blob 2: Violet */}
      <div 
        className="absolute top-[40%] right-[5%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] rounded-full bg-[#8B5CF6] opacity-[0.12] filter blur-[60px] md:blur-[100px]"
        style={{ animation: 'blob-2 15s infinite ease-in-out' }}
      />
      {/* Blob 3: Neon Cyan */}
      <div 
        className="absolute bottom-[10%] left-[20%] w-[200px] md:w-[400px] h-[200px] md:h-[400px] rounded-full bg-[#06B6D4] opacity-[0.12] filter blur-[50px] md:blur-[80px]"
        style={{ animation: 'blob-3 18s infinite ease-in-out' }}
      />
    </div>
  );
};
export default AuroraBlobs;
