import classNames from "classnames/bind";
import * as React from "react";
import styles from "./center.module.css";

const cx = classNames.bind(styles);

export interface CenterProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  maxWidth?: string;
  gutter?: `var(--${string})`;
  textCenter?: boolean;
  intrinsicCenter?: boolean;
  className?: string;
}

export const Center = React.forwardRef<HTMLDivElement, CenterProps>(
  (
    {
      children,
      maxWidth = "80rem",
      gutter = "var(--size-space-40)",
      textCenter = false,
      intrinsicCenter = false,
      className,
      ...props
    },
    ref
  ): JSX.Element => {
    return (
      <div
        {...props}
        className={cx({ center: true, textCenter, intrinsicCenter }, className)}
        ref={ref}
        style={{ "--max-width": maxWidth, "--gutter": gutter }}
      >
        {children}
      </div>
    );
  }
);

Center.displayName = "Center";
