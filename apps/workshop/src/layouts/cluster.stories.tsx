import type { Meta, StoryObj } from "@storybook/react";

import { Box, Cluster } from "@gaze-ui/react/src";
import * as React from "react";

const meta: Meta<typeof Cluster> = {
  component: Cluster,
  title: "Layouts/Cluster",
};

export default meta;

type Story = StoryObj<typeof Cluster>;

export const Simple: Story = {
  args: {
    space: "var(--gaze-space-20)",
  },
  render: (args) => (
    <Cluster {...args}>
      <Box
        background="var(--gaze-color-purple-200)"
        padding="var(--gaze-space-40)"
      />
      <Box
        background="var(--gaze-color-green-200)"
        padding="var(--gaze-space-40)"
      />
      <Box
        background="var(--gaze-color-yellow-200)"
        padding="var(--gaze-space-40)"
      />
    </Cluster>
  ),
};
