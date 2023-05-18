import * as React from "react";
import classNames from "classnames/bind";
import styles from "./sidebar.module.css";

const cx = classNames.bind(styles);

export interface SidebarProps extends React.HTMLProps<HTMLDivElement> {
  side?: "left" | "right";
  sideWidth?: string;
  space?: string;
  minimum?: string;
  children: NonNullable<React.ReactNode>;
  reverse?: boolean;
}

export const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  (
    { children, side = "left", sideWidth, space, minimum, reverse, ...props },
    ref
  ) => {
    const cssProperties: React.CSSProperties = {};

    if (sideWidth) {
      cssProperties["--side-width"] = sideWidth;
    }

    if (space) {
      cssProperties["--sidebar-space"] = space;
    }

    if (minimum) {
      cssProperties["--minimum"] = minimum;
    }

    return (
      <div
        {...props}
        className={cx({ sidebar: true, reverse: Boolean(reverse) }, side)}
        ref={ref}
        style={cssProperties}
      >
        {children}
      </div>
    );
  }
);

Sidebar.displayName = "Sidebar";
