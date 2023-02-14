import * as React from "react";
import classNames from "classnames/bind";
import styles from "./icon.module.css";

const cx = classNames.bind(styles);

export interface IconProps {
  label?: string;
  space?: string;
  className?: string;
  children: NonNullable<React.ReactNode>;
}

export const Icon = React.forwardRef<HTMLSpanElement, IconProps>(
  ({ space, label, children, className }, ref) => {
    const cssProperties: React.CSSProperties = {};

    if (space) {
      cssProperties["--icon-space"] = space;
    }

    return (
      <span
        aria-label={label}
        className={cx(
          { icon: true, withText: React.Children.count(children) > 1 },
          className
        )}
        ref={ref}
        role={label ? "img" : undefined}
        style={cssProperties}
      >
        {children}
      </span>
    );
  }
);

Icon.displayName = "Icon";
