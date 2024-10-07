import type { Meta, StoryObj } from "@storybook/react";

import { Heading } from "@gaze-ui/react/src";

const meta: Meta<typeof Heading> = {
  component: Heading,
  parameters: {
    layout: "centered",
  },
  title: "Components/Heading",
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const Heading1: Story = {
  args: {
    as: "h1",
    children: "Who are you going to believe? Me or your own eyes?",
  },
};

export const Heading2: Story = {
  args: {
    as: "h2",
    children: "Who are you going to believe? Me or your own eyes?",
  },
};

export const Heading3: Story = {
  args: {
    as: "h3",
    children: "Who are you going to believe? Me or your own eyes?",
  },
};

export const Heading4: Story = {
  args: {
    as: "h4",
    children: "Who are you going to believe? Me or your own eyes?",
  },
};

export const Heading5: Story = {
  args: {
    as: "h5",
    children: "Who are you going to believe? Me or your own eyes?",
  },
};

export const Heading6: Story = {
  args: {
    as: "h6",
    children: "Who are you going to believe? Me or your own eyes?",
  },
};
