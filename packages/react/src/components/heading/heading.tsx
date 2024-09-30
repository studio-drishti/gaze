import classNames from "classnames/bind";
import * as React from "react";

import styles from "./heading.module.css";

const cx = classNames.bind(styles);

type HeadingLevelOptions = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface HeadingProps {
  as: HeadingLevelOptions;
  children: NonNullable<React.ReactNode>;
  className?: string;
  variant?: HeadingLevelOptions;
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ as: HeadingComponent, children, className, variant }, ref) => {
    const headingVariant = variant ?? HeadingComponent;
    return (
      <HeadingComponent
        className={cx("heading", headingVariant, className)}
        ref={ref}
      >
        {children}
      </HeadingComponent>
    );
  },
);

Heading.displayName = "Heading";
