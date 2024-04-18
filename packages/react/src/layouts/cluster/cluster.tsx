import * as React from "react";
import classNames from "classnames/bind";

import { CSSProperties } from "../../types";

import styles from "./cluster.module.css";

const cx = classNames.bind(styles);

export interface ClusterProps extends React.ComponentPropsWithRef<"div"> {
  space?: string;
  align?: string;
  justify?: string;
  wrap?: "wrap" | "nowrap";
  children: NonNullable<React.ReactNode>;
}

/** Flexible layout component for positioning items in a group. */
export const Cluster = React.forwardRef<HTMLDivElement, ClusterProps>(
  function Cluster(
    {
      space = 0,
      align = "center",
      justify = "flex-start",
      wrap = "wrap",
      children,
      className,
      ...props
    },
    ref,
  ) {
    const clusterProperties: CSSProperties = {
      ["--space"]: space,
      ["--align"]: align,
      ["--justify"]: justify,
      ["--wrap"]: wrap,
    };

    return (
      <div
        {...props}
        className={cx("cluster", className)}
        ref={ref}
        style={clusterProperties}
      >
        {children}
      </div>
    );
  },
);
