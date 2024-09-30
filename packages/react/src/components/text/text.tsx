import classNames from "classnames/bind";
import * as React from "react";

import styles from "./text.module.css";

const cx = classNames.bind(styles);

type TextElementOptions = "div" | "p" | "span";

export interface TextProps {
  as?: TextElementOptions;
  children: NonNullable<React.ReactNode>;
  fontSize?: `var(--${string})`;
  leading?: `var(--${string})`;
}

export const Text = React.forwardRef<HTMLDivElement, TextProps>(
  ({ as, children, fontSize, leading }, ref) => {
    const TextComponent = as ?? "p";
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
  },
);

Text.displayName = "Text";
