"use client";
import clsx from "clsx";
import colorThief from "colorthief";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type ImageProps = Parameters<typeof Image>[0];

export const ImageFrame = ({ className, src, alt, ...rest }: ImageProps) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const ref = useRef<HTMLImageElement>(null);
  const [color, setColor] = useState<[number, number, number]>();

  useEffect(() => {
    const img = ref.current;
    if (!img) return;

    if (img.complete) {
      setColor(colorThief.getColor(img));
    } else {
      img.addEventListener("load", () => {
        setColor(colorThief.getColor(img));
      });
    }
  }, []);

  return (
    <figure
      className={clsx(
        "relative border-4 border-slate-100 bg-slate-50 transition-all",
        className
      )}
      style={{
        backgroundColor: `rgba(${color?.join(",")}, 0.2)`,
        borderColor: `rgba(${color?.join(",")}, 0.1)`,
      }}
    >
      <Image
        ref={ref}
        {...rest}
        src={src}
        alt={alt}
        fill
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-contain"
      />
    </figure>
  );
};
