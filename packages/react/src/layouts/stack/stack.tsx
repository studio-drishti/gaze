import classNames from "classnames/bind";
import * as React from "react";

import { CSSProperties } from "../../types.js";
import styles from "./stack.module.css";

const cx = classNames.bind(styles);

export interface StackProps extends React.ComponentPropsWithRef<"div"> {
  /** CSS align-items property */
  align?: string;
  /** CSS flex justify-content property. */
  justify?: string;
  /** Vertical space between each item. */
  space: string;
}

/** A Stack provides physical and conceptual separation from elements in a flow. */
export const Stack = React.forwardRef(function Stack(
  {
    align = "stretch",
    children,
    className,
    justify = "flex-start",
    space,
    ...props
  }: StackProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  const stackProperties: CSSProperties = {
    ["--stack-align"]: align,
    ["--stack-justify"]: justify,
    ["--stack-space"]: space,
  };

  return (
    <div
      {...props}
      className={cx("stack", className)}
      ref={ref}
      style={stackProperties}
    >
      {children}
    </div>
  );
});
