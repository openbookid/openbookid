"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const RELEASE_AT = new Date("2025-10-31T00:00:00-04:00");
  const [timeLeft, setTimeLeft] = useState(() => getTimeRemaining(RELEASE_AT));

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeRemaining(RELEASE_AT)), 1000);
    return () => clearInterval(id);
  }, []);

  const isLive =
    timeLeft.total <= 0 ||
    Number.isNaN(timeLeft.days) ||
    Number.isNaN(timeLeft.hours);

  return (
    <section className="relative flex pt-24 sm:pt-36 md:pt-48 flex-col items-center justify-center px-6 text-center">
      <div className="pointer-events-none absolute inset-0 -z-10 translate-y-6">
        <Image
          src="/home/background/wave-indigo.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          aria-hidden
          className="select-none object-cover opacity-75 brightness-125"
        />
      </div>

      <div className="max-w-4xl w-full">
        <h1 className="text-balance text-4xl font-semibold sm:text-5xl md:text-6xl">
          Transparent Identification Standard for Publishing
        </h1>

        <p className="mt-4 text-lg font-medium text-current/65">
          A unique record for every publication, portable across systems and verified through Solana.
        </p>

        {/* Countdown */}
        <div
          className="mt-8 flex w-full max-w-md flex-wrap items-center justify-center rounded-2xl border border-current/15 px-2 sm:px-4 md:px-6 py-4 mx-auto"
          aria-live="polite"
        >
          {isLive ? (
            <span className="text-base font-semibold">Now live</span>
          ) : (
            <>
              <TimeBlock label="Days" value={pad(timeLeft.days)} />
              <Separator />
              <TimeBlock label="Hours" value={pad(timeLeft.hours)} />
              <Separator />
              <TimeBlock label="Minutes" value={pad(timeLeft.minutes)} />
              <Separator />
              <TimeBlock label="Seconds" value={pad(timeLeft.seconds)} />
            </>
          )}
        </div>

        {/* 
        // Keep
        <div className="mt-6 md:mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="/docs"
            className="rounded-full font-semibold bg-[var(--foreground)] text-[var(--background)] px-6 py-2 hover:opacity-80 transition-opacity border border-transparent"
          >
            Read the docs
          </a>
          <a
            href="/updates"
            className="rounded-full border border-current/25 px-6 py-2 font-semibold transition-opacity hover:opacity-80"
          >
            Follow updates
          </a>
        </div>
        */}

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-semibold text-current/75">
          <span>Works with ISBN</span>
          <span>•</span>
          <span>Open API</span>
          <span>•</span>
          <span>Always accessible</span>
          <span>•</span>
          <span>No single point of failure</span>
        </div>
      </div>
    </section>
  );
}

function getTimeRemaining(target: Date) {
  const now = Date.now();
  const total = Math.max(0, target.getTime() - now);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((total / (1000 * 60)) % 60);
  const seconds = Math.floor((total / 1000) % 60);
  return { total, days, hours, minutes, seconds };
}

function pad(n: number) {
  return String(Math.max(0, n)).padStart(2, "0");
}

function TimeBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-1 flex-col items-center px-[6px]">
      <span className="text-2xl font-semibold tabular-nums">{value}</span>
      <span className="text-[12.5px] uppercase tracking-wide text-current/60 font-medium">
        {label}
      </span>
    </div>
  );
}

function Separator() {
  return <span aria-hidden className="text-current/25">:</span>;
}
