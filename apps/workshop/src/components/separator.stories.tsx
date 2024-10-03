import type { Meta, StoryObj } from "@storybook/react";

import { Separator } from "@gaze-ui/react";

const meta: Meta<typeof Separator> = {
  component: Separator,
  title: "Components/Separator",
};

export default meta;

type Story = StoryObj<typeof Separator>;

export const Solid: Story = {
  args: {
    color: "var(--gaze-color-text-default)",
    thickness: "var(--gaze-border-width-px)",
    variant: "solid",
  },
};

export const Dotted = {
  args: {
    color: "var(--gaze-color-blue-500)",
    thickness: "var(--gaze-border-width-4)",
    variant: "dotted",
  },
};

export const Dashed = {
  args: {
    color: "var(--gaze-color-purple-700)",
    thickness: "var(--gaze-border-width-8)",
    variant: "dashed",
  },
};
