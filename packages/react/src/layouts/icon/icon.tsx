import * as React from "react";
import classNames from "classnames/bind";
import styles from "./icon.module.css";
import { CSSProperties } from "../../types";

const cx = classNames.bind(styles);

export interface IconProps
  extends Omit<React.ComponentPropsWithRef<"span">, "size"> {
  label?: string;
  space?: string;
  className?: string;
  size?: string;
  children: NonNullable<React.ReactNode>;
}

export const Icon = React.forwardRef<HTMLSpanElement, IconProps>(function Icon(
  { space = "0.5em", size = "inherit", label, children, className, ...props },
  ref,
) {
  const cssProperties: CSSProperties = {
    ["--space"]: space,
    ["--size"]: size,
  };

  if (space) {
  }

  if (size) {
  }

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
