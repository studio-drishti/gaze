import * as React from "react";
import classNames from "classnames/bind";
import styles from "./grid.module.css";

const cx = classNames.bind(styles);

export interface GridProps {
  children: React.ReactNode;
  space?: `var(--${string})`;
  minimum: string;
}

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ children, space = "var(--size-space-0)", minimum }, ref): JSX.Element => {
    return (
      <div
        className={cx({ grid: true })}
        ref={ref}
        style={{ ["--space"]: space, ["--minimum"]: minimum }}
      >
        {children}
      </div>
    );
  }
);

Grid.displayName = "Grid";
