import classNames from "classnames/bind";
import * as React from "react";

import { CSSProperties } from "../../types.js";
import styles from "./switcher.module.css";

const cx = classNames.bind(styles);

export interface SwitcherProps extends React.ComponentPropsWithRef<"div"> {
  align?: string;
  /** Max number of elements that can appear in a row. */
  limit: 2 | 3 | 4;
  /** Should the order of elements be reversed when not wrapping? */
  reverse?: boolean;
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
    reverse = false,
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
        "gaze-switcher",
        `gaze-switcher-limit-${limit.toString()}`,
        { ["gaze-switcher-reverse"]: reverse },
        className,
      )}
      ref={ref}
      style={switcherProperties}
    >
      {children}
    </div>
  );
});
