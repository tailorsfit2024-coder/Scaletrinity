"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "react-countup";

export function Counter({
  end,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 2.4,
  className,
}: {
  end: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  return (
    <span ref={ref} className={className}>
      {inView ? (
        <CountUp
          end={end}
          prefix={prefix}
          suffix={suffix}
          decimals={decimals}
          duration={duration}
          separator=","
        />
      ) : (
        <>
          {prefix}
          0{suffix}
        </>
      )}
    </span>
  );
}
