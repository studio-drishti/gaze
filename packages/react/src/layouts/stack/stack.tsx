import * as React from "react";
import classNames from "classnames/bind";
import styles from "./stack.module.css";

const cx = classNames.bind(styles);

export interface StackProps {
  children: React.ReactNode;
  space: string;
  className?: string;
}

export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ children, space, className }, ref): JSX.Element => {
    return (
      <div
        className={cx({ stack: true }, className)}
        ref={ref}
        style={{ ["--stack-space"]: space }}
      >
        {children}
      </div>
    );
  }
);

Stack.displayName = "Stack";
