import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-imtx-950 text-slate-100 selection:bg-cyan-500 selection:text-white">
      {/* Top Background Atmospheric Light Blobs */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-cyan-600/10 via-violet-600/5 to-transparent blur-[140px] pointer-events-none -z-10 rounded-full" />
      <div className="fixed top-[20%] right-[-10%] w-[500px] h-[500px] bg-violet-600/5 blur-[160px] pointer-events-none -z-10 rounded-full" />

      {/* Main Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow pt-[72px]">
        <Outlet />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};
