import classNames from "classnames/bind";
import * as React from "react";

import { CSSProperties } from "../../types.js";
import styles from "./box.module.css";

const cx = classNames.bind(styles);

export interface BoxProps extends React.ComponentPropsWithRef<"div"> {
  as?: "article" | "div" | "footer" | "header" | "main" | "section";
  background?: string;
  borderColor?: string;
  borderRadius?: string;
  borderStyle?: "dashed" | "dotted" | "solid";
  borderWidth?: string;
  padding?: string;
  paddingX?: string;
  paddingY?: string;
}

/** A stylized visual grouping of some content. */
export const Box = React.forwardRef(function Box(
  {
    as,
    background,
    borderColor,
    borderRadius,
    borderStyle,
    borderWidth,
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
  const py = paddingY ?? padding;
  const px = paddingX ?? padding;
  const boxProperties: CSSProperties = {};

  if (background) {
    boxProperties["--box-bg"] = background;
  }

  if (borderStyle) {
    boxProperties["--box-bs"] = borderStyle;
  }

  if (borderWidth) {
    boxProperties["--box-bw"] = borderWidth;
  }

  if (borderRadius) {
    boxProperties["--box-rad"] = borderRadius;
  }

  if (borderColor) {
    boxProperties["--box-bc"] = borderColor;
  }

  if (py) {
    boxProperties["--box-py"] = py;
  }

  if (px) {
    boxProperties["--box-px"] = px;
  }

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
