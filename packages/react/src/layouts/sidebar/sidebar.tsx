import * as React from "react";
import classNames from "classnames/bind";
import styles from "./sidebar.module.css";

const cx = classNames.bind(styles);

export interface SidebarProps {
  side?: "left" | "right";
  sideWidth?: string;
  space?: string;
  minimum?: string;
  children: NonNullable<React.ReactNode>;
}

export const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  ({ children, side = "left", sideWidth, space, minimum }, ref) => {
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
      <div className={cx("sidebar", side)} ref={ref} style={cssProperties}>
        {children}
      </div>
    );
  }
);

Sidebar.displayName = "Sidebar";
