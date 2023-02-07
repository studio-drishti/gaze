import * as React from "react";
import classNames from "classnames/bind";
import styles from "./button.module.css";

const cx = classNames.bind(styles);

export interface ButtonProps {
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children }, ref) => {
    return (
      <button className={cx("button")} ref={ref}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
