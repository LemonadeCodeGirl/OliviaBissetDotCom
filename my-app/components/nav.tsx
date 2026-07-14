"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const blendWithHero = isHome && !scrolled;

  return (
    <nav
      className={[
        "fixed top-0 left-0 right-0 z-50",
        "flex flex-row justify-between items-center p-3",
        "transition-[background-color,box-shadow,color] duration-300 ease-in-out",
        blendWithHero
          ? "bg-transparent shadow-none text-surface"
          : "bg-surface/90 backdrop-blur-md text-foreground border-b border-accent-muted",
      ].join(" ")}
    >
      <div className="flex flex-row gap-4 flex-start">
        <h1 className="text-3xl font-bold font-serif">
          <Link href="/" className="hover:opacity-90 transition-opacity">
            Olivia Bisset
          </Link>
        </h1>
      </div>
      {/* <div className="flex flex-row gap-4 flex-end pr-3">
        <Link
          href="/about"
          className={
            blendWithHero
              ? "hover:text-white transition-colors"
              : "hover:text-accent-pale transition-colors"
          }
        >
          About
        </Link>
        <Link
          href="/projects"
          className={
            blendWithHero
              ? "hover:text-white transition-colors"
              : "hover:text-accent-pale transition-colors"
          }
        >
          Projects
        </Link>
        <Link
          href="/experience"
          className={
            blendWithHero
              ? "hover:text-white transition-colors"
              : "hover:text-accent-pale transition-colors"
          }
        >
          Experience
        </Link>
        <Link
          href="/connect"
          className={
            blendWithHero
              ? "hover:text-white transition-colors"
              : "hover:text-accent-pale transition-colors"
            
          }
        >
          Contact
        </Link>
      </div> */}
    </nav>
  );
}
