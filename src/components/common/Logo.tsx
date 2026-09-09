import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', showText = true }) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  return (
    <Link 
      to="/" 
      className={`inline-flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1 transition-all duration-200 ${className}`}
      aria-label="IMTX Ana Sayfası"
    >
      {/* High-tech Geometric Shield/Diamond Logo SVG */}
      <div className={`relative flex items-center justify-center ${iconSizes[size]} transition-transform duration-300 group-hover:scale-105`}>
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/30 to-violet-600/30 rounded-xl blur-sm group-hover:blur-md transition-all duration-300"></div>
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full relative z-10 drop-shadow-md">
          <defs>
            <linearGradient id="logoPrimaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00f2fe" />
              <stop offset="50%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
            <linearGradient id="logoInnerGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
          {/* Hexagonal Outer Frame */}
          <polygon
            points="24,4 42,14 42,34 24,44 6,34 6,14"
            stroke="url(#logoPrimaryGrad)"
            strokeWidth="2.5"
            strokeLinejoin="round"
            className="transition-all duration-500 group-hover:stroke-cyan-300"
          />
          {/* Internal Geometric Tech Core */}
          <path
            d="M24,4 L24,24 L42,34"
            stroke="url(#logoPrimaryGrad)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M24,24 L6,34"
            stroke="url(#logoInnerGrad)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Center glowing quantum node */}
          <circle cx="24" cy="24" r="3.5" fill="#38bdf8" className="animate-pulse" />
          <circle cx="24" cy="4" r="1.5" fill="#00f2fe" />
          <circle cx="42" cy="14" r="1.5" fill="#38bdf8" />
          <circle cx="42" cy="34" r="1.5" fill="#8b5cf6" />
          <circle cx="24" cy="44" r="1.5" fill="#a855f7" />
          <circle cx="6" cy="34" r="1.5" fill="#8b5cf6" />
          <circle cx="6" cy="14" r="1.5" fill="#00f2fe" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-1.5">
            <span className={`font-black tracking-wider text-gradient font-sans ${textSizes[size]}`}>
              IMTX
            </span>
            <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              WIN
            </span>
          </div>
        </div>
      )}
    </Link>
  );
};
