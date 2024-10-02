import type { Meta } from "@storybook/react";

import { Box, Frame } from "@gaze-ui/react";
import * as React from "react";

const meta: Meta<typeof Frame> = {
  component: Frame,
  tags: ["autodocs"],
  title: "Layouts/Frame",
};

export default meta;

export const SixteenByNine = () => (
  <Frame aspectRatio={16 / 9}>
    <Box
      background="var(--gaze-color-purple-500)"
      padding="var(--gaze-space-40)"
    />
  </Frame>
);
