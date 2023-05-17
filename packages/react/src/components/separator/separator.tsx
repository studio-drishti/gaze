import * as React from "react";
import classNames from "classnames/bind";
import styles from "./separator.module.css";

const cx = classNames.bind(styles);

export interface SeparatorProps {
  className?: string;
  variant?: "solid" | "dotted";
  thickness?: string;
  color?: string;
}

export const Separator = React.forwardRef<HTMLHRElement, SeparatorProps>(
  ({ className, variant = "solid", thickness, color }, ref) => {
    const separatorProperties: React.CSSProperties = {};

    if (thickness) {
      separatorProperties["--sep-thickness"] = thickness;
    }

    if (color) {
      separatorProperties["--sep-color"] = color;
    }

    return (
      <hr
        role="separator"
        aria-orientation="horizontal"
        className={cx("separator", variant, className)}
        style={separatorProperties}
        ref={ref}
      />
    );
  }
);

Separator.displayName = "Separator";
