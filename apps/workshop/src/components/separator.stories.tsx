import type { Meta, StoryObj } from "@storybook/react";
import { Separator } from "@gaze-ui/react";

const meta: Meta<typeof Separator> = {
  title: "Components/Separator",
  component: Separator,

  tags: ["autodocs"],
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
    variant: "dotted",
    thickness: "var(--size-border-2)",
    color: "var(--color-blue-400)",
  },
};
