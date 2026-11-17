import { cn } from "@/lib/cn";

const A_PATH = "M176 160 C 110 150, 34 162, 40 202 C 46 236, 92 226, 112 192 L 152 120 L 176 76 L 206 206";
const SPARK =
  "M1394 20 C1396 42 1408 54 1430 56 C1408 58 1396 70 1394 92 C1392 70 1380 58 1358 56 C1380 54 1392 42 1394 20 Z";

type BrandLogoProps = {
  className?: string;
  /** Letter colour: cream on dark backgrounds (default), night on light ones. */
  ink?: string;
  spark?: string;
  /** Empty when the logo sits inside a link that already has a label. */
  label?: string;
};

/** "Aslam Rabbi" wordmark from the brand guidelines: looped A + Sora ExtraBold + lime spark. */
export function BrandLogo({ className, ink = "#F1EDE6", spark = "#EDFF49", label = "Aslam Rabbi" }: BrandLogoProps) {
  return (
    <svg
      viewBox="0 0 1440 300"
      className={cn("block aspect-[1440/300] w-auto overflow-visible", className)}
      {...(label ? { role: "img", "aria-label": label } : { "aria-hidden": true })}
    >
      <path
        transform="translate(-10 0) scale(1.12)"
        d={A_PATH}
        fill="none"
        stroke={ink}
        strokeWidth={30}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text
        x={252}
        y={230}
        textLength={1110}
        lengthAdjust="spacing"
        fontWeight={800}
        fontSize={200}
        letterSpacing={-4}
        fill={ink}
        style={{ fontFamily: "var(--font-sora)" }}
      >
        slam Rabbi
      </text>
      <path d={SPARK} fill={spark} />
    </svg>
  );
}
