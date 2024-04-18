import type { CSSProperties as ReactCSSProperties } from "react";

export type CSSProperties = ReactCSSProperties &
  Record<`--${string}`, number | string>;
