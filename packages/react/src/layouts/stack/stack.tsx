import classNames from "classnames/bind";
import * as React from "react";

import { CSSProperties } from "../../types.js";
import styles from "./stack.module.css";

const cx = classNames.bind(styles);

export interface StackProps extends React.ComponentPropsWithRef<"div"> {
  space: string;
}

/** A Stack provides physical and conceptual separation from elements in a flow. */
export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  function Stack({ children, className, space, ...props }, ref) {
    const stackProperties: CSSProperties = {
      ["--stack-space"]: space,
    };

    return (
      <div {...props} className={cx("stack", className)} ref={ref}>
        <div style={stackProperties}>{children}</div>
      </div>
    );
  },
);
