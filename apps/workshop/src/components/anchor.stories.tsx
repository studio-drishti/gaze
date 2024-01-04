import type { Meta, StoryObj } from "@storybook/react";
import { Anchor } from "@gaze-ui/react";

const meta: Meta<typeof Anchor> = {
  title: "Components/Anchor",
  component: Anchor,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Anchor>;

export const Simple: Story = {
  args: {
    href: "https://studiodrishti.co",
    children: "Studio Drishti",
  },
};
