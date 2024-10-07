import type { Meta, StoryObj } from "@storybook/react";

import { Box, Stack } from "@gaze-ui/react/src";
import * as React from "react";

const meta: Meta<typeof Stack> = {
  component: Stack,
  title: "Layouts/Stack",
};

export default meta;

type Story = StoryObj<typeof Stack>;

export const Simple: Story = {
  args: {
    space: "var(--gaze-space-40)",
  },
  render: (args) => (
    <Stack {...args}>
      <Box
        background="var(--gaze-color-purple-500)"
        padding="var(--gaze-space-40)"
      />
      <Box
        background="var(--gaze-color-purple-500)"
        padding="var(--gaze-space-40)"
      />
      <Box
        background="var(--gaze-color-purple-500)"
        padding="var(--gaze-space-40)"
      />
      <Box
        background="var(--gaze-color-purple-500)"
        padding="var(--gaze-space-40)"
      />
    </Stack>
  ),
};

export const Nested: Story = {
  args: {
    space: "var(--gaze-space-40)",
  },
  render: (args) => (
    <Stack {...args}>
      <Box
        background="var(--gaze-color-purple-500)"
        padding="var(--gaze-space-40)"
      />
      <Box
        background="var(--gaze-color-purple-500)"
        padding="var(--gaze-space-40)"
      />
      <Stack space="var(--gaze-space-100)">
        <Box
          background="var(--gaze-color-purple-900)"
          padding="var(--gaze-space-40)"
        />
        <Box
          background="var(--gaze-color-purple-900)"
          padding="var(--gaze-space-40)"
        />
      </Stack>
      <Box
        background="var(--gaze-color-purple-500)"
        padding="var(--gaze-space-40)"
      />
      <Box
        background="var(--gaze-color-purple-500)"
        padding="var(--gaze-space-40)"
      />
    </Stack>
  ),
};
