import * as React from "react";
import classNames from "classnames/bind";

import { CSSProperties } from "../../types";

import styles from "./frame.module.css";

const cx = classNames.bind(styles);

export interface FrameProps extends React.ComponentPropsWithRef<"div"> {
  children: React.ReactNode;
  aspectRatio: number;
  fit?: "cover" | "contain";
  background?: string;
}

export const Frame = React.forwardRef<HTMLDivElement, FrameProps>(
  function Frame(
    {
      children,
      aspectRatio,
      fit = "cover",
      background = "transparent",
      className,
      ...props
    },
    ref,
  ) {
    const cssProperties: CSSProperties = {
      ["--ratio"]: aspectRatio,
      ["--bg"]: background,
      ["--fit"]: fit,
    };

    return (
      <div
        {...props}
        className={cx("frame", className)}
        ref={ref}
        style={cssProperties}
      >
        {children}
      </div>
    );
  },
);
