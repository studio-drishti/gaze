import * as React from "react";
import type { Meta } from "@storybook/react";
import { Box, Frame } from "@gaze-ui/react";

const meta: Meta<typeof Frame> = {
  title: "Layouts/Frame",
  component: Frame,
  tags: ["autodocs"],
};

export default meta;

export const SixteenByNine = (): JSX.Element => (
  <Frame aspectRatio={16 / 9}>
    <Box background="var(--color-purple-500)" padding="var(--size-space-40)" />
  </Frame>
);
