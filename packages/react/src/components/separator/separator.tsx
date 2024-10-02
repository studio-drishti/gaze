import classNames from "classnames/bind";
import * as React from "react";

import { CSSProperties } from "../../types.js";
import styles from "./separator.module.css";

const cx = classNames.bind(styles);

export interface SeparatorProps {
  className?: string;
  color?: string;
  thickness?: string;
  variant?: "dotted" | "solid";
}

export const Separator = React.forwardRef<HTMLHRElement, SeparatorProps>(
  ({ className, color, thickness, variant = "solid" }, ref) => {
    const separatorProperties: CSSProperties = {};

    if (thickness) {
      separatorProperties["--separator-thickness"] = thickness;
    }

    if (color) {
      separatorProperties["--separator-color"] = color;
    }

    return (
      <hr
        aria-orientation="horizontal"
        className={cx("separator", variant, className)}
        ref={ref}
        style={separatorProperties}
      />
    );
  },
);

Separator.displayName = "Separator";
