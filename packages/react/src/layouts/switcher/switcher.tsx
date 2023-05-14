import * as React from "react";
import classNames from "classnames/bind";
import styles from "./switcher.module.css";

const cx = classNames.bind(styles);

export interface SwitcherProps {
  children: React.ReactNode;
  space?: `var(--${string})`;
  threshold: string;
  limit: 2 | 3 | 4;
  align?: "start" | "center" | "end";
  className?: string;
}

export const Switcher = React.forwardRef<HTMLDivElement, SwitcherProps>(
  (
    {
      children,
      space = "var(--size-space-0)",
      threshold,
      limit,
      align,
      className,
    },
    ref
  ): JSX.Element => {
    return (
      <div
        className={cx(
          {
            switcher: true,
            limit2: limit === 2,
            limit3: limit === 3,
            limit4: limit === 4,
            alignStart: align === "start",
            alignCenter: align === "center",
            alignEnd: align === "end",
          },
          className
        )}
        ref={ref}
        style={{ ["--threshold"]: threshold, ["--switcher-space"]: space }}
      >
        {children}
      </div>
    );
  }
);

Switcher.displayName = "Grid";
