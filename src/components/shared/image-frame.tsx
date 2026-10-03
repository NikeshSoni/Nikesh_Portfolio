import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { assetExists } from "@/lib/assets";
import { cn } from "@/lib/utils";

interface ImageFrameProps {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  priority?: boolean;
}

/**
 * Fixed-ratio frame (no layout shift). Shows the image when the file exists
 * in /public, otherwise a neutral empty frame.
 */
export function ImageFrame({ src, alt, sizes, className, priority }: ImageFrameProps) {
  const exists = assetExists(src);
  return (
    <div className={cn("relative overflow-hidden bg-muted", className)}>
      {exists ? (
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      ) : (
        <div className="flex size-full items-center justify-center text-muted-foreground/50" aria-hidden="true">
          <ImageIcon className="size-8" />
        </div>
      )}
    </div>
  );
}
