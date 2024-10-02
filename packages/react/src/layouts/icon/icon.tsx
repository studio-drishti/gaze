import classNames from "classnames/bind";
import * as React from "react";

import { CSSProperties } from "../../types.js";
import styles from "./icon.module.css";

const cx = classNames.bind(styles);

export interface IconProps
  extends Omit<React.ComponentPropsWithRef<"span">, "size"> {
  label?: string;
  size?: string;
  space?: string;
}

export const Icon = React.forwardRef<HTMLSpanElement, IconProps>(function Icon(
  { children, className, label, size = "inherit", space = "0.5em", ...props },
  ref,
) {
  const cssProperties: CSSProperties = {
    ["--icon-size"]: size,
    ["--icon-space"]: space,
  };

  return (
    <span
      {...props}
      aria-label={label}
      className={cx(
        "icon",
        { ["with-text"]: React.Children.count(children) > 1 },
        className,
      )}
      ref={ref}
      role={label ? "img" : undefined}
      style={cssProperties}
    >
      {children}
    </span>
  );
});
