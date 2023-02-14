import * as React from "react";
import classNames from "classnames/bind";
import styles from "./cluster.module.css";

const cx = classNames.bind(styles);

export interface ClusterProps {
  space: string;
  className?: string;
  children: NonNullable<React.ReactNode>;
}

export const Cluster = React.forwardRef<HTMLDivElement, ClusterProps>(
  ({ space, children, className }, ref) => {
    return (
      <div
        className={cx("cluster", className)}
        ref={ref}
        style={{ ["--cluster-space"]: space }}
      >
        {children}
      </div>
    );
  }
);

Cluster.displayName = "Cluster";
