import classNames from "classnames/bind";
import * as React from "react";

import { CSSProperties } from "../../types.js";
import styles from "./switcher.module.css";

const cx = classNames.bind(styles);

export interface SwitcherProps extends React.ComponentPropsWithRef<"div"> {
  align?: string;
  /** Max number of elements that can appear in a row. */
  limit: 2 | 3 | 4;
  /** The space between child elements. */
  space?: string;
  /** Breadking point where the layout switches between horizontal and vertical. */
  threshold: string;
}

/** A layout that switches between horizontal and vertical at a set breakpoint. */
export const Switcher = React.forwardRef(function Switcher(
  {
    align = "normal",
    children,
    className,
    limit,
    space = "0",
    threshold,
  }: SwitcherProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  const switcherProperties: CSSProperties = {
    ["--switcher-align"]: align,
    ["--switcher-space"]: space,
    ["--switcher-threshold"]: threshold,
  };
  return (
    <div
      className={cx(
        "switcher",
        {
          limit2: limit === 2,
          limit3: limit === 3,
          limit4: limit === 4,
        },
        className,
      )}
      ref={ref}
      style={switcherProperties}
    >
      {children}
    </div>
  );
});
