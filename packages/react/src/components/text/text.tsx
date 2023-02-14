import * as React from "react";
import classNames from "classnames/bind";
import styles from "./text.module.css";

const cx = classNames.bind(styles);

type TextElementOptions = "div" | "p" | "span";

export interface TextProps {
  as?: TextElementOptions;
  fontSize?: `var(--${string})`;
  leading?: `var(--${string})`;
  children: NonNullable<React.ReactNode>;
}

export const Text = React.forwardRef<HTMLElement, TextProps>(
  ({ as, fontSize, leading, children }, ref) => {
    const TextComponent = as || "p";
    const cssProperties: React.CSSProperties = {};

    if (fontSize) {
      cssProperties["--size"] = fontSize;
    }

    if (leading) {
      cssProperties["--leading"] = leading;
    }

    return (
      <TextComponent className={cx("text")} ref={ref} style={cssProperties}>
        {children}
      </TextComponent>
    );
  }
);

Text.displayName = "Text";
