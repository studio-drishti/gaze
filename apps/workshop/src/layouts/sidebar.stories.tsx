import type { Meta, StoryObj } from "@storybook/react";

import { Box, Center, Sidebar } from "@gaze-ui/react";
import * as React from "react";

const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
  title: "Layouts/Sidebar",
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Left: Story = {
  args: {
    sideWidth: "20rem",
    space: "var(--gaze-space-10)",
  },
  render: (args) => (
    <Center maxWidth="60rem">
      <Sidebar {...args}>
        <Box
          background="var(--gaze-color-green-500)"
          padding="var(--gaze-space-100)"
        />
        <Box
          background="var(--gaze-color-blue-500)"
          padding="var(--gaze-space-100)"
        />
      </Sidebar>
    </Center>
  ),
};
