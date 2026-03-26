"use client";

import Image from "next/image";
import Countdown from "@/components/Countdown";

// ── Configure your launch date here ──────────────────────────────────────
const LAUNCH_DATE = new Date("2025-09-01T00:00:00");
// ─────────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <main className="min-h-[100dvh] flex flex-col items-center justify-center py-8 px-4 pb-20 relative isolate">
      {/* ── Background ──────────────────────────────────────────── */}
      <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,230,0,0.1)_1.5px,transparent_1.5px)] bg-[length:30px_30px] animate-halftone-drift" />
        <div className="absolute rounded-full blur-[100px] pointer-events-none w-[600px] h-[240px] bg-[rgba(255,230,0,0.07)] -top-[60px] left-1/2 -translate-x-1/2" />
        <div className="absolute rounded-full blur-[100px] pointer-events-none w-[350px] h-[350px] bg-[rgba(255,230,0,0.04)] -bottom-[80px] -right-[60px]" />
      </div>

      {/* ── Card ────────────────────────────────────────────────── */}
      <div className="w-full max-w-[660px] bg-card border border-border rounded-card p-12 px-6 sm:px-11 pb-11 shadow-[0_0_0_1px_rgba(255,230,0,0.14),0_40px_80px_rgba(0,0,0,0.75),0_0_80px_rgba(255,230,0,0.04)] flex flex-col items-center relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-[linear-gradient(90deg,transparent,#FFE600,transparent)] animate-fade-up">

        {/* Logo */}
        <div className="mb-7 opacity-0 animate-fade-up [animation-delay:0.05s]">
          <Image
            src="/logo.png"
            alt="Aspiring Legal Network"
            width={240}
            height={96}
            className="h-24 w-auto rounded-[14px] block drop-shadow-[0_4px_24px_rgba(255,230,0,0.3)] transition-[filter,transform] duration-300 hover:drop-shadow-[0_6px_36px_rgba(255,230,0,0.5)] hover:scale-[1.04] hover:-rotate-1"
            priority
          />
        </div>

        {/* Eyebrow */}
        <p className="inline-flex items-center gap-[7px] bg-[rgba(255,230,0,0.09)] border border-border-strong rounded-full py-1.5 px-4 text-[0.67rem] font-bold tracking-[0.16em] uppercase text-yellow mb-4.5 opacity-0 animate-fade-up [animation-delay:0.12s]">
          <span className="animate-star-pulse inline-block">★</span>
          Launching Soon
          <span className="animate-star-pulse inline-block">★</span>
        </p>

        {/* Headline */}
        <h1 className="font-display text-[clamp(2.5rem,11vw,5.8rem)] leading-[0.94] text-center text-text mb-2 tracking-[0.02em] uppercase opacity-0 animate-fade-up [animation-delay:0.22s]">
          Something Big
          <span className="text-yellow block [text-shadow:3px_3px_0_rgba(0,0,0,0.6),0_0_40px_rgba(255,230,0,0.35)]">is Coming</span>
        </h1>

        {/* Subtext */}
        <p className="text-[0.95rem] leading-[1.7] text-muted text-center max-w-[520px] mb-10 opacity-0 animate-fade-up [animation-delay:0.34s]">
          Transforming legal careers through an AI-powered ecosystem of career 
          tools, structured learning, and professional collaboration. Built for 
          the next generation of legal talent. Est. 2024.
        </p>

        {/* Countdown */}
        <div className="opacity-0 animate-fade-up [animation-delay:0.46s]">
          <Countdown targetDate={LAUNCH_DATE} />
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[linear-gradient(90deg,transparent,rgba(255,230,0,0.32),transparent)] my-8 opacity-0 animate-fade-up [animation-delay:0.72s]" />

        {/* Status Message */}
        <div className="w-full flex flex-col items-center gap-3.5 opacity-0 animate-fade-up [animation-delay:0.8s]">
          <p className="text-[0.875rem] text-muted text-center italic">Be prepared for the revolution.</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-6 text-[0.7rem] text-faint tracking-[0.05em] text-center opacity-0 animate-fade-up [animation-delay:1s]">
        © {new Date().getFullYear()} Aspiring Legal Network · Est. 2024 · All rights reserved
      </footer>
    </main>
  );
}