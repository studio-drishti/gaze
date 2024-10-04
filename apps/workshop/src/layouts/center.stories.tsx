import type { Meta, StoryObj } from "@storybook/react";

import { Box, Center } from "@gaze-ui/react";
import * as React from "react";

const meta: Meta<typeof Center> = {
  component: Center,
  title: "Layouts/Center",
};

export default meta;

type Story = StoryObj<typeof Center>;

export const Justified: Story = {
  args: {
    gutter: "var(--gaze-space-80)",
    maxWidth: "40rem",
  },
  render: (args) => (
    <Box
      borderColor="var(--gaze-color-slate-400)"
      borderStyle="dashed"
      borderWidth="var(--gaze-border-width-px)"
      paddingY="var(--gaze-space-80)"
    >
      <Center {...args}>
        <Box
          background="var(--gaze-color-red-500)"
          padding="var(--gaze-space-80)"
        />
      </Center>
    </Box>
  ),
};

export const Intrinsic: Story = {
  args: {
    gutter: "var(--gaze-space-80)",
    intrinsicCenter: true,
    maxWidth: "40rem",
  },
  render: (args) => (
    <Box
      borderColor="var(--gaze-color-slate-400)"
      borderStyle="dashed"
      borderWidth="var(--gaze-border-width-px)"
      paddingY="var(--gaze-space-80)"
    >
      <Center {...args}>
        <Box
          background="var(--gaze-color-red-500)"
          padding="var(--gaze-space-80)"
        />
      </Center>
    </Box>
  ),
};
