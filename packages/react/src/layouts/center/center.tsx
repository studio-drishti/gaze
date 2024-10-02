import classNames from "classnames/bind";
import * as React from "react";

import { CSSProperties } from "../../types.js";
import styles from "./center.module.css";

const cx = classNames.bind(styles);

export interface CenterProps extends React.ComponentPropsWithRef<"div"> {
  gutter?: string;
  intrinsicCenter?: boolean;
  maxWidth?: string;
  textCenter?: boolean;
}

export const Center = React.forwardRef<HTMLDivElement, CenterProps>(
  function Center(
    {
      children,
      className,
      gutter = "0",
      intrinsicCenter = false,
      maxWidth = "100%",
      textCenter = false,
      ...props
    },
    ref,
  ) {
    const centerProperties: CSSProperties = {
      ["--center-gutter"]: gutter,
      ["--center-width"]: maxWidth,
    };

    return (
      <div
        {...props}
        className={cx(
          "center",
          { intrinsic: intrinsicCenter, text: textCenter },
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
