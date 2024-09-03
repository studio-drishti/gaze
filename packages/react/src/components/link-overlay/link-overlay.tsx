import classNames from "classnames/bind";
import * as React from "react";

import styles from "./link-overlay.module.css";

const cx = classNames.bind(styles);

export type LinkOverlayProps = React.ComponentPropsWithRef<"a">;

export const LinkOverlay = React.forwardRef<
  HTMLAnchorElement,
  LinkOverlayProps
>(function LinkOverlay({ children, ...props }, ref) {
  return (
    <a {...props} className={cx("link-overlay")} ref={ref}>
      {children}
    </a>
  );
});

export type LinkBoxProps = React.ComponentPropsWithRef<"div">;

export const LinkBox = React.forwardRef<HTMLDivElement, LinkBoxProps>(
  function LinkBox({ children, ...props }) {
    return (
      <div {...props} className={cx("link-box")}>
        {children}
      </div>
    );
  },
);
