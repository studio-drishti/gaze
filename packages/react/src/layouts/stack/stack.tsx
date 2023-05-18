import * as React from "react";
import classNames from "classnames/bind";
import styles from "./stack.module.css";

const cx = classNames.bind(styles);

export interface StackProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  space: string;
  className?: string;
}

export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ children, space, className, ...props }, ref): JSX.Element => {
    return (
      <div {...props} className={cx("stack", className)} ref={ref}>
        <div style={{ ["--stack-space"]: space }}>{children}</div>
      </div>
    );
  }
);

Stack.displayName = "Stack";
