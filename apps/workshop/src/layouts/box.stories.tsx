import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "@gaze-ui/react";

const meta: Meta<typeof Box> = {
  title: "Layouts/Box",
  component: Box,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Box>;

export const Simple: Story = {
  args: {
    background: "var(--color-lime-300)",
    padding: "var(--size-space-80)",
    borderRadius: "var(--size-radius-base)",
  },
};
