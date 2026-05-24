"use client";
import React, { useEffect, useState } from "react";

export default function Snowflakes() {
  const [flakes, setFlakes] = useState([]);

  useEffect(() => {
    const sym = ["❄", "❅", "❆", "✦", "·", "•", "*"];
    const tempFlakes = [];
    for (let i = 0; i < 45; i++) {
      tempFlakes.push({
        id: i,
        char: sym[i % sym.length],
        left: Math.random() * 100,
        fontSize: Math.random() * 16 + 7,
        duration: Math.random() * 12 + 7,
        delay: Math.random() * 15,
        opacity: Math.random() * 0.45 + 0.15,
      });
    }
    setFlakes(tempFlakes);
  }, []);

  return (
    <div id="flakes">
      {flakes.map((f) => (
        <span
          key={f.id}
          className="flake"
          style={{
            left: `${f.left}vw`,
            fontSize: `${f.fontSize}px`,
            animationDuration: `${f.duration}s`,
            animationDelay: `${f.delay}s`,
            opacity: f.opacity,
          }}
        >
          {f.char}
        </span>
      ))}
    </div>
  );
}
