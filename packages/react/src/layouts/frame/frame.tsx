import classNames from "classnames/bind";
import * as React from "react";

import { CSSProperties } from "../../types.js";
import styles from "./frame.module.css";

const cx = classNames.bind(styles);

export interface FrameProps extends React.ComponentPropsWithRef<"div"> {
  aspectRatio: number;
  background?: string;
  fit?: "contain" | "cover";
}

export const Frame = React.forwardRef<HTMLDivElement, FrameProps>(
  function Frame(
    {
      aspectRatio,
      background = "transparent",
      children,
      className,
      fit = "cover",
      ...props
    },
    ref,
  ) {
    const cssProperties: CSSProperties = {
      ["--frame-bg"]: background,
      ["--frame-fit"]: fit,
      ["--frame-ratio"]: aspectRatio,
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
