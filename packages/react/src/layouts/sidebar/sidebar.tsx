import * as React from "react";
import classNames from "classnames/bind";

import { CSSProperties } from "../../types";

import styles from "./sidebar.module.css";

const cx = classNames.bind(styles);

export interface SidebarProps extends React.ComponentPropsWithRef<"div"> {
  /** The side of the layout which should be considerethe sidebar. */
  side?: "left" | "right";
  /** Width of the sidebar. */
  sideWidth?: string;
  /** Space between the sidebar and non-sidebar. */
  space?: string;
  /** Narrowest the main element can be before wrapping. */
  minimum?: `${number}%`;
  children: NonNullable<React.ReactNode>;
  /** Should the order of elements be reversed when not wrapping? Useful if you want the sidebar stacked in a certain order. */
  reverse?: boolean;
  align?: string;
}

/** A layout with a fixed width sidebar that stacks when the fluid width element reaches its minimum allowance.  */
export const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  function Sidebar(
    {
      children,
      side = "left",
      sideWidth = "auto",
      space = "0",
      minimum = "50%",
      reverse = false,
      align = "stretch",
      className,
      ...props
    },
    ref,
  ) {
    const cssProperties: CSSProperties = {
      ["--min"]: minimum,
      ["--width"]: sideWidth,
      ["--space"]: space,
      ["--align"]: align,
    };

    return (
      <div
        {...props}
        className={cx("sidebar", { reverse }, side, className)}
        ref={ref}
        style={cssProperties}
      >
        {children}
      </div>
    );
  },
);
