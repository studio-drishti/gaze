import classNames from "classnames/bind";
import * as React from "react";

import { CSSProperties } from "../../types.js";
import styles from "./grid.module.css";

const cx = classNames.bind(styles);

export interface GridProps extends React.ComponentPropsWithRef<"div"> {
  /** The minimum width of a grid item before it wraps. */
  minimum: string;
  /** Space between grid items. */
  space?: string;
}

/** Flexible layout component for placing items in a grid. */
export const Grid = React.forwardRef<HTMLDivElement, GridProps>(function Grid(
  { children, className, minimum, space = "0", ...props }: GridProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  const gridProperties: CSSProperties = {
    ["--grid-min"]: minimum,
    ["--grid-space"]: space,
  };

  return (
    <div
      {...props}
      className={cx("gaze-grid", className)}
      ref={ref}
      style={gridProperties}
    >
      {children}
    </div>
  );
});
