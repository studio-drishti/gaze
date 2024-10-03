import type { Meta, StoryObj } from "@storybook/react";

import { Anchor } from "@gaze-ui/react";

const meta: Meta<typeof Anchor> = {
  component: Anchor,
  parameters: {
    layout: "centered",
  },
  title: "Components/Anchor",
};

export default meta;

type Story = StoryObj<typeof Anchor>;

export const Simple: Story = {
  args: {
    children: "Studio Drishti",
    href: "https://studiodrishti.co",
  },
};
