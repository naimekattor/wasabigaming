"use client";

import { useState, useEffect, useCallback } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownProps {
  targetDate: Date;
}

function CountdownUnit({
  value,
  label,
  index,
}: {
  value: number;
  label: string;
  index: number;
}) {
  const [prevValue, setPrevValue] = useState(value);
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    if (value !== prevValue) {
      setFlip(true);
      const t = setTimeout(() => {
        setPrevValue(value);
        setFlip(false);
      }, 300);
      return () => clearTimeout(t);
    }
  }, [value, prevValue]);

  return (
    <div
      className="opacity-0 animate-fade-up"
      style={{ animationDelay: `${index * 0.1 + 0.55}s` }}
    >
      <div className="group flex flex-col items-center bg-black border border-border rounded-[14px] min-w-[68px] sm:min-w-[82px] overflow-hidden relative transition-[border-color,box-shadow] duration-200 hover:border-border-strong hover:shadow-[0_0_18px_rgba(255,230,0,0.08)]">
        {/* Animated bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-yellow scale-x-0 transition-transform duration-250 origin-center group-hover:scale-x-100" />
        
        <div className="w-full p-3.5 px-4 pt-3.5 pb-2.5 flex items-center justify-center">
          <div className={`${flip ? "animate-number-flip" : ""}`}>
            <span className="font-display text-[clamp(1.9rem,4.5vw,2.7rem)] leading-none text-yellow tracking-[0.04em] [text-shadow:0_0_20px_rgba(255,230,0,0.38)] block">
              {String(value).padStart(2, "0")}
            </span>
          </div>
        </div>
        <div className="w-full py-1.5 px-2 bg-[rgba(255,230,0,0.05)] border-t border-border flex items-center justify-center">
          <span className="text-[0.57rem] font-bold tracking-[0.14em] uppercase text-[rgba(255,230,0,0.55)]">
            {label}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Countdown({ targetDate }: CountdownProps) {
  const calculate = useCallback((): TimeLeft | null => {
    const diff = targetDate.getTime() - Date.now();
    if (diff <= 0) return null;
    return {
      days:    Math.floor(diff / 86400000),
      hours:   Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(calculate);

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(calculate()), 1000);
    return () => clearInterval(id);
  }, [calculate]);

  if (!timeLeft) {
    return (
      <div className="inline-flex items-center gap-[10px] bg-[rgba(255,230,0,0.1)] border border-[rgba(255,230,0,0.38)] rounded-full py-2.5 px-7 font-display text-[1.6rem] tracking-[0.08em] text-yellow [text-shadow:0_0_20px_rgba(255,230,0,0.5)]">
        <span className="w-[9px] h-[9px] rounded-full bg-yellow shadow-[0_0_10px_#FFE600] animate-pulse-dot" />
        We Are Live!
      </div>
    );
  }

  const units = [
    { value: timeLeft.days,    label: "Days"    },
    { value: timeLeft.hours,   label: "Hours"   },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <div className="flex gap-[0.6rem] sm:gap-[0.85rem] flex-wrap justify-center mb-2">
      {units.map((u, i) => (
        <CountdownUnit key={u.label} value={u.value} label={u.label} index={i} />
      ))}
    </div>
  );
}