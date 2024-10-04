import classNames from "classnames/bind";
import * as React from "react";

import { CSSProperties } from "../../types.js";
import styles from "./frame.module.css";

const cx = classNames.bind(styles);

export interface FrameProps extends React.ComponentPropsWithRef<"div"> {
  aspectRatio: number;
  background?: string;
  borderRadius?: string;
  fit?: "contain" | "cover";
}

/** Crop and force a specific aspect ratio for media content. */
export const Frame = React.forwardRef(function Frame(
  {
    aspectRatio,
    background = "transparent",
    borderRadius = "0",
    children,
    className,
    fit = "cover",
    ...props
  }: FrameProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  const cssProperties: CSSProperties = {
    ["--frame-bg"]: background,
    ["--frame-fit"]: fit,
    ["--frame-radius"]: borderRadius,
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
});
