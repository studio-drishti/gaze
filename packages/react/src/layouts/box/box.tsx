import classNames from "classnames/bind";
import * as React from "react";

import { CSSProperties } from "../../types.js";
import styles from "./box.module.css";

const cx = classNames.bind(styles);

export interface BoxProps extends React.ComponentPropsWithRef<"div"> {
  as?: "article" | "div" | "footer" | "header" | "main" | "section";
  background?: string;
  borderRadius?: string;
  padding?: string;
  paddingX?: string;
  paddingY?: string;
}

/** A visual grouping of some content. */
export const Box = React.forwardRef(function Box(
  {
    as,
    background = "var(--gaze-color-white)",
    borderRadius = "var(--gaze-radius-none)",
    children,
    className,
    padding,
    paddingX,
    paddingY,
    ...props
  }: BoxProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  const Component = as ?? "div";
  const py = paddingY ?? padding ?? "0";
  const px = paddingX ?? padding ?? "0";
  const boxProperties: CSSProperties = {
    ["--box-bg"]: background,
    ["--box-px"]: px,
    ["--box-py"]: py,
    ["--box-rad"]: borderRadius,
  };

  return (
    <Component
      {...props}
      className={cx("box", className)}
      ref={ref}
      style={boxProperties}
    >
      {children}
    </Component>
  );
});
