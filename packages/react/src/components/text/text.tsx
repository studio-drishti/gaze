import classNames from "classnames/bind";
import * as React from "react";

import { CSSProperties } from "../../types.js";
import styles from "./text.module.css";

const cx = classNames.bind(styles);

type TextElementOptions = "div" | "p" | "span";

export interface TextProps extends React.ComponentPropsWithRef<"p"> {
  as?: TextElementOptions;
  color?: string;
  fontSize?: string;
  leading?: string;
  weight?: string;
}

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ as, children, className, color, fontSize, leading, weight }, ref) => {
    const TextComponent = as ?? "p";
    const cssProperties: CSSProperties = {};

    if (fontSize) {
      cssProperties["--text-size"] = fontSize;
    }

    if (leading) {
      cssProperties["--text-leading"] = leading;
    }

    if (weight) {
      cssProperties["--text-weight"] = weight;
    }

    if (color) {
      cssProperties["--text-color"] = color;
    }

    return (
      <TextComponent
        className={cx("text", className)}
        ref={ref}
        style={cssProperties}
      >
        {children}
      </TextComponent>
    );
  },
);

Text.displayName = "Text";
