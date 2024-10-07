import classNames from "classnames/bind";
import * as React from "react";

import { CSSProperties } from "../../types.js";
import styles from "./sidebar.module.css";

const cx = classNames.bind(styles);

export interface SidebarProps extends React.ComponentPropsWithRef<"div"> {
  align?: string;
  /** Narrowest the main element can be before wrapping. */
  minimum?: `${number}%`;
  /** Should the order of elements be reversed when not wrapping? Useful if you want the sidebar stacked in a certain order. */
  reverse?: boolean;
  /** The side of the layout which should be considerethe sidebar. */
  side?: "left" | "right";
  /** Width of the sidebar. */
  sideWidth?: string;
  /** Space between the sidebar and non-sidebar. */
  space?: string;
}

/** A layout with a fixed width sidebar that stacks when the fluid width element reaches its minimum allowance.  */
export const Sidebar = React.forwardRef(function Sidebar(
  {
    align = "stretch",
    children,
    className,
    minimum = "50%",
    reverse = false,
    side = "left",
    sideWidth = "auto",
    space = "0",
    ...props
  }: SidebarProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  const cssProperties: CSSProperties = {
    ["--sidebar-align"]: align,
    ["--sidebar-min"]: minimum,
    ["--sidebar-space"]: space,
    ["--sidebar-width"]: sideWidth,
  };

  return (
    <div
      {...props}
      className={cx(
        "gaze-sidebar",
        { ["gaze-sidebar-reverse"]: reverse },
        `gaze-sidebar-${side}`,
        className,
      )}
      ref={ref}
      style={cssProperties}
    >
      {children}
    </div>
  );
});
