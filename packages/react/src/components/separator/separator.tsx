import classNames from "classnames/bind";
import * as React from "react";

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
    const separatorProperties: React.CSSProperties = {};

    if (thickness) {
      separatorProperties["--sep-thickness"] = thickness;
    }

    if (color) {
      separatorProperties["--sep-color"] = color;
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
