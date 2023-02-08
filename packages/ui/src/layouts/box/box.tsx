import classNames from "classnames/bind";
import * as React from "react";
import styles from "./box.module.css";

const cx = classNames.bind(styles);

export interface BoxProps {
  as?: "div" | "header" | "main";
  children?: React.ReactNode;
  className?: string;
  paddingX?: `var(--${string})`;
  paddingY?: `var(--${string})`;
  padding?: `var(--${string})`;
  background?: `var(--${string})`;
  invert?: boolean;
}

export const Box = React.forwardRef<HTMLElement, BoxProps>(
  (
    {
      as,
      children,
      className,
      padding,
      paddingX,
      paddingY,
      background,
      invert = false,
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

    return (
      <Component
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
