import type { Meta, StoryObj } from "@storybook/react";

import { Box, Switcher } from "@gaze-ui/react";
import * as React from "react";

const meta: Meta<typeof Switcher> = {
  component: Switcher,
  title: "Layouts/Switcher",
};

export default meta;

type Story = StoryObj<typeof Switcher>;

export const Three: Story = {
  args: {
    limit: 3,
    space: "var(--gaze-space-40)",
    threshold: "40rem",
  },
  render: (args) => (
    <Switcher {...args}>
      <Box
        background="var(--gaze-color-purple-500)"
        padding="var(--gaze-space-50)"
      />
      <Box
        background="var(--gaze-color-purple-500)"
        padding="var(--gaze-space-50)"
      />
      <Box
        background="var(--gaze-color-purple-500)"
        padding="var(--gaze-space-50)"
      />
    </Switcher>
  ),
};

export const Align: Story = {
  args: {
    align: "center",
    limit: 3,
    space: "var(--gaze-space-40)",
    threshold: "40rem",
  },
  render: (args) => (
    <Switcher {...args}>
      <Box
        background="var(--gaze-color-purple-500)"
        padding="var(--gaze-space-30)"
      />
      <Box
        background="var(--gaze-color-purple-500)"
        padding="var(--gaze-space-50)"
      />
      <Box
        background="var(--gaze-color-purple-500)"
        padding="var(--gaze-space-70)"
      />
    </Switcher>
  ),
};
