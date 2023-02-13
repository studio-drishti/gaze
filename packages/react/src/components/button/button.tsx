import * as React from "react";
import classNames from "classnames/bind";
import styles from "./button.module.css";

const cx = classNames.bind(styles);

export interface ButtonProps {
  variant?: "primary" | "secondary";
  size?: "large" | "small";
  children: React.ReactNode;
}

export const Button = ({ variant, children }: ButtonProps): JSX.Element => {
  return (
    <button
      className={cx({
        button: true,
        primary: variant === "primary",
        secondary: variant === "secondary",
      })}
    >
      {children}
    </button>
  );
};
