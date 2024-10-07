import classNames from "classnames/bind";
import * as React from "react";

import styles from "./heading.module.css";

const cx = classNames.bind(styles);

type HeadingLevelOptions = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface HeadingProps extends React.ComponentPropsWithRef<"h1"> {
  /** The underlying HTML heading to render. */
  as: HeadingLevelOptions;
  /** The heading level that the component should visually appear to be. Defaults to `as` when blank. */
  variant?: HeadingLevelOptions;
}

/** h1-h6 text that provides page hierarchy. */
export const Heading = React.forwardRef(function Heading(
  { as: HeadingComponent, children, className, variant }: HeadingProps,
  ref: React.ForwardedRef<HTMLHeadingElement>,
) {
  const headingVariant = variant ?? HeadingComponent;
  return (
    <HeadingComponent
      className={cx("gaze-heading", `gaze-${headingVariant}`, className)}
      ref={ref}
    >
      {children}
    </HeadingComponent>
  );
});
