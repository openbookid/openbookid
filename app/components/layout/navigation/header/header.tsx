"use client";

import HeaderLandscape from "./components/header-landscape";
import HeaderPortrait from "./components/header-portrait";

export default function Header({ className }: { className?: string }) {
  return (
    <>
      <HeaderPortrait className={className} />
      <HeaderLandscape className={className} />
    </>
  );
}
