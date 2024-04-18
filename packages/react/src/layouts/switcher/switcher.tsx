import * as React from "react";
import classNames from "classnames/bind";

import { CSSProperties } from "../../types";

import styles from "./switcher.module.css";

const cx = classNames.bind(styles);

export interface SwitcherProps extends React.ComponentPropsWithRef<"div"> {
  children: NonNullable<React.ReactNode>;
  /** The space between child elements. */
  space?: string;
  /** Breadking point where the layout switches between horizontal and vertical. */
  threshold: string;
  /** Max number of elements that can appear in a row. */
  limit: 2 | 3 | 4;
  align?: string;
}

/** A layout that switches between horizontal and vertical at a set breakpoint. */
export const Switcher = React.forwardRef<HTMLDivElement, SwitcherProps>(
  function Switcher(
    { children, space = 0, threshold, limit, align = "normal", className },
    ref,
  ) {
    const switcherProperties: CSSProperties = {
      ["--threshold"]: threshold,
      ["--space"]: space,
      ["--align"]: align,
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
  },
);
