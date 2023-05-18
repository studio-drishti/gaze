import * as React from "react";
import classNames from "classnames/bind";
import styles from "./frame.module.css";

const cx = classNames.bind(styles);

export interface FrameProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  aspectRatio: number;
  borderRadius: string;
  className?: string;
}

export const Frame = React.forwardRef<HTMLDivElement, FrameProps>(
  (
    { children, aspectRatio, borderRadius, className, ...props },
    ref
  ): JSX.Element => {
    const cssProperties: React.CSSProperties = {
      ["--frame-ratio"]: aspectRatio,
    };

    if (borderRadius) {
      cssProperties["--frame-radius"] = borderRadius;
    }

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
  }
);

Frame.displayName = "Frame";
