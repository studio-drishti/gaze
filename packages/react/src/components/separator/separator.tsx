import classNames from "classnames/bind";
import * as React from "react";

import { CSSProperties } from "../../types.js";
import styles from "./separator.module.css";

const cx = classNames.bind(styles);

export interface SeparatorProps extends React.ComponentPropsWithRef<"hr"> {
  color?: string;
  thickness?: string;
  variant?: "dashed" | "dotted" | "solid";
}

/** Visually separates content in a group. */
export const Separator = React.forwardRef(function Separator(
  { className, color, thickness, variant }: SeparatorProps,
  ref: React.ForwardedRef<HTMLHRElement>,
) {
  const separatorProperties: CSSProperties = {};

  if (variant) {
    separatorProperties["--separator-variant"] = variant;
  }

  if (thickness) {
    separatorProperties["--separator-thickness"] = thickness;
  }

  if (color) {
    separatorProperties["--separator-color"] = color;
  }

  return (
    <hr
      aria-orientation="horizontal"
      className={cx("gaze-separator", className)}
      ref={ref}
      style={separatorProperties}
    />
  );
});
