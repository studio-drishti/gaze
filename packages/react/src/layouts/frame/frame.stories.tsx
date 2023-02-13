import * as React from "react";
import type { ComponentMeta } from "@storybook/react";
import { Box } from "../box";
import { Frame } from "./frame";

export default {
  component: Frame,
  title: "Layouts/Frame",
} as ComponentMeta<typeof Frame>;

export const SixteenByNine = (): JSX.Element => (
  <Frame aspectRatio={16 / 9}>
    <Box background="var(--color-purple-500)" padding="var(--size-space-40)" />
  </Frame>
);
