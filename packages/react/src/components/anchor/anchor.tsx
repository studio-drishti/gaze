import classNames from "classnames/bind";
import * as React from "react";

import styles from "./anchor.module.css";

const cx = classNames.bind(styles);

export interface AnchorProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: NonNullable<React.ReactNode>;
}

export const Anchor = React.forwardRef<HTMLAnchorElement, AnchorProps>(
  ({ children, ...props }, ref) => {
    return (
      <a className={cx("anchor")} ref={ref} {...props}>
        {children}
      </a>
    );
  }
);

Anchor.displayName = "Anchor";
