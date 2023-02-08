import * as React from "react";
import classNames from "classnames/bind";
import styles from "./text.module.css";

const cx = classNames.bind(styles);

type TextVariantOptions =
  | "info"
  | "large"
  | "legal"
  | "medium"
  | "regular"
  | "small";
type TextElementOptions = "div" | "p" | "span";

export interface TextProps {
  as?: TextElementOptions;
  variant?: TextVariantOptions;
  children: NonNullable<React.ReactNode>;
}

export const Text = React.forwardRef<HTMLHeadingElement, TextProps>(
  ({ as, variant = "regular", children }, ref) => {
    const TextComponent = as || "p";
    return (
      <TextComponent className={cx({ text: true, [variant]: true })} ref={ref}>
        {children}
      </TextComponent>
    );
  }
);

Text.displayName = "Text";
