"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Closing() {
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
    <section className="mx-auto max-w-6xl px-6 pt-6">
      <div className="relative overflow-hidden rounded-2xl p-6 text-center">
        <Image
          src="/home/background/star.jpg"
          alt=""
          fill
          className="absolute inset-0 object-cover"
          priority
        />

        <div className="relative z-10">
          <h3 className="text-2xl font-semibold text-white">
            Open infrastructure for publishing
          </h3>
          <p className="mx-auto mt-2 max-w-2xl text-white/75">
            OpenBook ID is a shared standard for publishing records. Registries,
            developers, and institutions can build on a common, verifiable foundation
            without central control.
          </p>

          {/* Countdown */}
          <div
            className="mt-8 flex w-full max-w-md flex-wrap items-center justify-center rounded-2xl px-4 py-2 mx-auto bg-white/15 backdrop-blur text-white/95"
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

          {/* CTA */}
          <div className="mt-6 flex flex-col items-center justify-center sm:flex-row">
            <Link
              href="https://github.com/openbookid"
              className="rounded-full px-4 py-2 text-white text-sm font-semibold bg-white/15 hover:opacity-75"
            >
              View on GitHub
            </Link>
          </div>
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
      <span className="text-xl font-semibold tabular-nums">{value}</span>
      <span className="text-[11px] uppercase tracking-wide text-current/60">
        {label}
      </span>
    </div>
  );
}

function Separator() {
  return <span aria-hidden className="text-current/25">:</span>;
}
