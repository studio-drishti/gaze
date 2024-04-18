import classNames from "classnames/bind";
import * as React from "react";

import { CSSProperties } from "../../types";

import styles from "./box.module.css";

const cx = classNames.bind(styles);

export interface BoxProps extends React.ComponentPropsWithRef<"div"> {
  as?: "article" | "div" | "footer" | "header" | "main" | "section";
  children?: React.ReactNode;
  paddingX?: string;
  paddingY?: string;
  padding?: string;
  background?: string;
  borderRadius?: string;
}

/** A visual grouping of some content. */
export const Box = React.forwardRef<HTMLDivElement, BoxProps>(function Box(
  {
    as,
    children,
    className,
    padding = 0,
    paddingX = 0,
    paddingY = 0,
    background = "var(--color-white)",
    borderRadius = 0,
    ...props
  },
  ref,
) {
  const Component = as || "div";
  const py = paddingY || padding;
  const px = paddingX || padding;
  const boxProperties: CSSProperties = {
    ["--py"]: py,
    ["--px"]: px,
    ["--bg"]: background,
    ["--rad"]: borderRadius,
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
