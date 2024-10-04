import type { Meta, StoryObj } from "@storybook/react";

import { Box, Grid } from "@gaze-ui/react";
import * as React from "react";

const meta: Meta<typeof Grid> = {
  component: Grid,
  title: "Layouts/Grid",
};

export default meta;

type Story = StoryObj<typeof Grid>;

export const Simple: Story = {
  args: {
    minimum: "15rem",
    space: "var(--gaze-space-40)",
  },
  render: (args) => (
    <Grid {...args}>
      <Box
        background="var(--gaze-color-purple-500)"
        padding="var(--gaze-space-100)"
      />
      <Box
        background="var(--gaze-color-purple-500)"
        padding="var(--gaze-space-100)"
      />
      <Box
        background="var(--gaze-color-purple-500)"
        padding="var(--gaze-space-100)"
      />
      <Box
        background="var(--gaze-color-purple-500)"
        padding="var(--gaze-space-100)"
      />
    </Grid>
  ),
};
