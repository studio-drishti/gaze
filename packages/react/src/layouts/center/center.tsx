import classNames from "classnames/bind";
import * as React from "react";

import { CSSProperties } from "../../types";

import styles from "./center.module.css";

const cx = classNames.bind(styles);

export interface CenterProps extends React.ComponentPropsWithRef<"div"> {
  children: NonNullable<React.ReactNode>;
  maxWidth?: string;
  gutter?: string;
  textCenter?: boolean;
  intrinsicCenter?: boolean;
}

export const Center = React.forwardRef<HTMLDivElement, CenterProps>(
  function Center(
    {
      children,
      maxWidth = "100%",
      gutter = "0",
      textCenter = false,
      intrinsicCenter = false,
      className,
      ...props
    },
    ref,
  ) {
    const centerProperties: CSSProperties = {
      ["--width"]: maxWidth,
      ["--gutter"]: gutter,
    };

    return (
      <div
        {...props}
        className={cx(
          "center",
          { text: textCenter, intrinsic: intrinsicCenter },
          className,
        )}
        ref={ref}
        style={centerProperties}
      >
        {children}
      </div>
    );
  },
);
