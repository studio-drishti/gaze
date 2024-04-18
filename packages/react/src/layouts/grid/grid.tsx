import * as React from "react";
import classNames from "classnames/bind";

import { CSSProperties } from "../../types";

import styles from "./grid.module.css";

const cx = classNames.bind(styles);

export interface GridProps extends React.ComponentPropsWithRef<"div"> {
  children: NonNullable<React.ReactNode>;
  /** Space between grid items. */
  space?: string;
  /** The minimum width of a grid item before it wraps. */
  minimum: string;
}

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(function Grid(
  { children, space = 0, minimum, className, ...props },
  ref,
) {
  const gridProperties: CSSProperties = {
    ["--space"]: space,
    ["--min"]: minimum,
  };

  return (
    <div
      {...props}
      className={cx("grid", className)}
      ref={ref}
      style={gridProperties}
    >
      {children}
    </div>
  );
});
