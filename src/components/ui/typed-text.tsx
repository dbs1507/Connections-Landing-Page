"use client";

import { useEffect, useState } from "react";

type TypedTextProps = {
  strings: readonly string[];
  typeSpeed?: number;
  backSpeed?: number;
  backDelay?: number;
};

export function TypedText({
  strings,
  typeSpeed = 50,
  backSpeed = 50,
  backDelay = 2000,
}: TypedTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = strings[stringIndex] ?? "";
    let timeout: number;

    if (!isDeleting && charIndex === current.length) {
      timeout = window.setTimeout(() => setIsDeleting(true), backDelay);
      return () => window.clearTimeout(timeout);
    }

    if (isDeleting && charIndex === 0) {
      timeout = window.setTimeout(() => {
        setIsDeleting(false);
        setStringIndex((prev) => (prev + 1) % strings.length);
      }, 0);
      return () => window.clearTimeout(timeout);
    }

    timeout = window.setTimeout(
      () => {
        const nextIndex = isDeleting ? charIndex - 1 : charIndex + 1;
        setCharIndex(nextIndex);
        setDisplayText(current.slice(0, nextIndex));
      },
      isDeleting ? backSpeed : typeSpeed,
    );

    return () => window.clearTimeout(timeout);
  }, [
    strings,
    stringIndex,
    charIndex,
    isDeleting,
    typeSpeed,
    backSpeed,
    backDelay,
  ]);

  return (
    <span className="typed-text">
      {displayText}
      <span className="typed-cursor">|</span>
    </span>
  );
}
