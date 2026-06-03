"use client";

import * as React from "react";
import { MotionValue, motion, useSpring, useTransform } from "motion/react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const fontSize = 40;
const padding = 10;
const height = fontSize + padding;

interface CounterProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  start?: number;
  end: number;
  duration?: number;
  className?: string;
  fontSize?: number;
}

export const Counter = ({
  start = 0,
  end,
  duration = end,
  className,
  fontSize = 30,
  ...rest
}: CounterProps) => {
  const [value, setValue] = useState(start);

  useEffect(() => {
    const interval = setInterval(() => {
      if (value < end) {
        setValue((prev) => prev + 1);
      }
    }, (duration / (end - start)) * 1000);

    return () => clearInterval(interval);
  }, [value, end, duration, start]);

  const digitHeight = fontSize * 1.2;

  return (
    <div
      style={{ fontSize, lineHeight: 1 }}
      className={cn("inline-flex items-baseline overflow-hidden", className)}
      {...rest}
    >
      {value >= 100000 && <Digit place={100000} value={value} size={fontSize} digitHeight={digitHeight} />}
      {value >= 10000 && <Digit place={10000} value={value} size={fontSize} digitHeight={digitHeight} />}
      {value >= 1000 && <Digit place={1000} value={value} size={fontSize} digitHeight={digitHeight} />}
      {value >= 100 && <Digit place={100} value={value} size={fontSize} digitHeight={digitHeight} />}
      {value >= 10 && <Digit place={10} value={value} size={fontSize} digitHeight={digitHeight} />}
      <Digit place={1} value={value} size={fontSize} digitHeight={digitHeight} />
    </div>
  );
};

function Digit({ place, value, size, digitHeight }: { place: number; value: number; size: number; digitHeight: number }) {
  let valueRoundedToPlace = Math.floor(value / place);
  let animatedValue = useSpring(valueRoundedToPlace);

  useEffect(() => {
    animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace]);

  return (
    <div style={{ height: digitHeight, width: size * 0.6 }} className="relative inline-block">
      {[...Array(10)].map((_, i) => (
        <Number key={i} mv={animatedValue} number={i} digitHeight={digitHeight} />
      ))}
    </div>
  );
}

function Number({ mv, number, digitHeight }: { mv: MotionValue; number: number; digitHeight: number }) {
  let y = useTransform(mv, (latest) => {
    let placeValue = latest % 10;
    let offset = (10 + number - placeValue) % 10;

    let memo = offset * digitHeight;

    if (offset > 5) {
      memo -= 10 * digitHeight;
    }

    return memo;
  });

  return (
    <motion.span
      style={{ y }}
      className="absolute inset-0 flex items-center justify-center font-bold"
    >
      {number}
    </motion.span>
  );
}
