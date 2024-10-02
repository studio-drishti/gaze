import classNames from "classnames/bind";
import * as React from "react";

import styles from "./anchor.module.css";

const cx = classNames.bind(styles);

export type AnchorProps = React.ComponentPropsWithRef<"a">;

export const Anchor = React.forwardRef<HTMLAnchorElement, AnchorProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <a className={cx("anchor", className)} ref={ref} {...props}>
        {children}
      </a>
    );
  },
);

Anchor.displayName = "Anchor";
