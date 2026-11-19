"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

function jumpToTop() {
  if (window.location.hash) return;
  const root = document.documentElement;
  const previous = root.style.scrollBehavior;
  root.style.scrollBehavior = "auto";
  window.scrollTo(0, 0);
  root.style.scrollBehavior = previous;
}

export function ScrollToTop() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    jumpToTop();
    const id = window.setTimeout(jumpToTop, 0);
    return () => window.clearTimeout(id);
  }, [pathname]);

  return null;
}
