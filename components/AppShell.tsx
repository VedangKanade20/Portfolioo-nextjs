"use client";

import { useEffect, useState } from "react";
import HelloIntro from "@/components/HelloIntro";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [showIntro, setShowIntro] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("intro-shown");
    if (!seen) setShowIntro(true);
    setReady(true);
  }, []);

  if (!ready) return null;

  return (
    <>
      {showIntro && (
        <HelloIntro
          onComplete={() => {
            sessionStorage.setItem("intro-shown", "true");
            setShowIntro(false);
          }}
        />
      )}
      {children}
    </>
  );
}
