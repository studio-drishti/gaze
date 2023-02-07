import * as React from "react";
import classNames from "classnames/bind";
import styles from "./button.module.css";

const cx = classNames.bind(styles);

export interface ButtonProps {
  primary?: boolean;
  size?: "small" | "large";
  label?: string;
}

export const Button = ({
  primary = false,
  label = "Boop",
  size = "small",
}: ButtonProps) => {
  return <button className={cx("button")}>{label}</button>;
};
