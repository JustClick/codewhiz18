"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

interface StatProps {
  stat: {
    name: string;
    value: string;
  };
}

export default function StatsCounter({ stat }: StatProps) {
  const [count, setCount] = useState(0);
  const countingDone = useRef(false);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (!inView || countingDone.current) return;

    const finalValue = parseInt(stat.value.replace(/\D/g, ""));
    const duration = 2000;
    const steps = 50;
    const stepValue = finalValue / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setCount(Math.min(Math.floor(stepValue * currentStep), finalValue));

      if (currentStep === steps) {
        clearInterval(timer);
        countingDone.current = true;
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [inView, stat.value]);

  return (
    <div ref={ref} className="text-center p-6 rounded-lg bg-black/20 border border-green-500/10 hover:border-green-500/20 transition-colors">
      <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
      <dd className="text-4xl font-bold tracking-tight text-white mt-2">
        {count}
        {stat.value.includes("+") && "+"}
      </dd>
    </div>
  );
}