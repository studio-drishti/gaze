import classNames from "classnames/bind";
import * as React from "react";

import styles from "./link-overlay.module.css";

const cx = classNames.bind(styles);

export type LinkOverlayProps = React.ComponentPropsWithRef<"a">;

/** Semantic and accessible overlay for clickable areas such as article cards. */
export const LinkOverlay = React.forwardRef(function LinkOverlay(
  { children, className, ...props }: LinkOverlayProps,
  ref: React.ForwardedRef<HTMLAnchorElement>,
) {
  return (
    <a {...props} className={cx("link-overlay", className)} ref={ref}>
      {children}
    </a>
  );
});

export type LinkBoxProps = React.ComponentPropsWithRef<"div">;

export const LinkBox = React.forwardRef(function LinkBox(
  { children, className, ...props }: LinkBoxProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  return (
    <div {...props} className={cx("link-box", className)} ref={ref}>
      {children}
    </div>
  );
});
