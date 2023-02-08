import * as React from "react";
import classNames from "classnames/bind";
import styles from "./frame.module.css";

const cx = classNames.bind(styles);

export interface FrameProps {
  children: React.ReactNode;
  aspectRatio: number;
  className?: string;
}

export const Frame = React.forwardRef<HTMLDivElement, FrameProps>(
  ({ children, aspectRatio, className }, ref): JSX.Element => {
    return (
      <div
        className={cx({ frame: true }, className)}
        ref={ref}
        style={{ ["--aspect-ratio"]: aspectRatio }}
      >
        {children}
      </div>
    );
  }
);

Frame.displayName = "Frame";
