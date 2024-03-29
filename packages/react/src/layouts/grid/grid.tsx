import * as React from "react";
import classNames from "classnames/bind";
import styles from "./grid.module.css";

const cx = classNames.bind(styles);

export interface GridProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  space?: `var(--${string})`;
  minimum: string;
  className?: string;
}

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  (
    { children, space = "var(--size-space-0)", minimum, className, ...props },
    ref
  ): JSX.Element => {
    return (
      <div
        {...props}
        className={cx("grid", className)}
        ref={ref}
        style={{ ["--grid-space"]: space, ["--minimum"]: minimum }}
      >
        {children}
      </div>
    );
  }
);

Grid.displayName = "Grid";
