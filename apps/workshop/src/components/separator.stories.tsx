import type { Meta, StoryObj } from "@storybook/react";

import { Separator } from "@gaze-ui/react";

const meta: Meta<typeof Separator> = {
  component: Separator,
  tags: ["autodocs"],

  title: "Components/Separator",
};

export default meta;

type Story = StoryObj<typeof Separator>;

export const Solid: Story = {
  args: {
    variant: "solid",
  },
};

export const Dotted = {
  args: {
    color: "var(--gaze-color-blue-400)",
    thickness: "var(--gaze-size-border-2)",
    variant: "dotted",
  },
};
