import classNames from "classnames/bind";
import * as React from "react";

import { CSSProperties } from "../../types.js";
import styles from "./cluster.module.css";

const cx = classNames.bind(styles);

export interface ClusterProps extends React.ComponentPropsWithRef<"div"> {
  align?: string;
  justify?: string;
  space?: string;
  wrap?: "nowrap" | "wrap";
}

/** Flexible layout component for positioning items in a group. */
export const Cluster = React.forwardRef<HTMLDivElement, ClusterProps>(
  function Cluster(
    {
      align = "center",
      children,
      className,
      justify = "flex-start",
      space = 0,
      wrap = "wrap",
      ...props
    },
    ref,
  ) {
    const clusterProperties: CSSProperties = {
      ["--cluster-align"]: align,
      ["--cluster-justify"]: justify,
      ["--cluster-space"]: space,
      ["--cluster-wrap"]: wrap,
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
