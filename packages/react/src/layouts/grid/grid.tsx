import classNames from "classnames/bind";
import * as React from "react";

import { CSSProperties } from "../../types.js";
import styles from "./grid.module.css";

const cx = classNames.bind(styles);

export interface GridProps extends React.ComponentPropsWithRef<"div"> {
  children: NonNullable<React.ReactNode>;
  /** The minimum width of a grid item before it wraps. */
  minimum: string;
  /** Space between grid items. */
  space?: string;
}

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(function Grid(
  { children, className, minimum, space = 0, ...props },
  ref,
) {
  const gridProperties: CSSProperties = {
    ["--min"]: minimum,
    ["--space"]: space,
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
