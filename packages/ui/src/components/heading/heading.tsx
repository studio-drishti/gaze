import * as React from "react";
import classNames from "classnames/bind";
import styles from "./heading.module.css";

const cx = classNames.bind(styles);

type HeadingLevelOptions = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface HeadingProps {
  as?: HeadingLevelOptions;
  variant?: HeadingLevelOptions;
  children: NonNullable<React.ReactNode>;
  className?: string;
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ as, variant, children, className }, ref) => {
    const HeadingComponent = as || "h2";
    const headingVariant = variant || as || "h2";
    return (
      <HeadingComponent
        className={cx({ [headingVariant]: true }, className)}
        ref={ref}
      >
        {children}
      </HeadingComponent>
    );
  }
);

Heading.displayName = "Heading";
