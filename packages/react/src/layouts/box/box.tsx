import classNames from "classnames/bind";
import * as React from "react";
import styles from "./box.module.css";

const cx = classNames.bind(styles);

export interface BoxProps extends React.HTMLProps<HTMLElement> {
  as?: "article" | "div" | "footer" | "header" | "main" | "section";
  children?: React.ReactNode;
  className?: string;
  paddingX?: string;
  paddingY?: string;
  padding?: string;
  background?: string;
  borderRadius?: string;
  invert?: boolean;
}

export const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  (
    {
      as,
      children,
      className,
      padding,
      paddingX,
      paddingY,
      background,
      borderRadius,
      invert = false,
      ...props
    },
    ref
  ) => {
    const Component = as || "div";
    const boxProperties: React.CSSProperties = {};
    const py = paddingY || padding;
    const px = paddingX || padding;

    if (py) {
      boxProperties["--py"] = py;
    }

    if (px) {
      boxProperties["--px"] = px;
    }

    if (background) {
      boxProperties["--background"] = background;
    }

    if (borderRadius) {
      boxProperties["--radius"] = borderRadius;
    }

    return (
      <Component
        {...props}
        className={cx({ box: true }, className)}
        data-invert={invert}
        ref={ref}
        style={boxProperties}
      >
        {children}
      </Component>
    );
  }
);

Box.displayName = "Box";
