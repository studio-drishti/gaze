import classNames from "classnames/bind";
import * as React from "react";

import styles from "./anchor.module.css";

const cx = classNames.bind(styles);

export type AnchorProps = React.ComponentPropsWithRef<"a">;

/** Links from one page to another. */
export const Anchor = React.forwardRef(function Anchor(
  { children, className, ...props }: AnchorProps,
  ref: React.ForwardedRef<HTMLAnchorElement>,
) {
  return (
    <a className={cx("gaze-anchor", className)} ref={ref} {...props}>
      {children}
    </a>
  );
});
