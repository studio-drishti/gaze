import type { Meta, StoryObj } from "@storybook/react";

import { Icon, Text } from "@gaze-ui/react/src";
import { IconSwords } from "@tabler/icons-react";
import * as React from "react";

const meta: Meta<typeof Icon> = {
  component: Icon,
  parameters: {
    layout: "centered",
  },
  title: "Layouts/Icon",
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const IconOnly: Story = {
  args: {
    label: "I challenge you to a duel.",
  },
  render: (args) => (
    <Text fontSize="var(--gaze-font-size-4xl)">
      <Icon {...args}>
        <IconSwords />
      </Icon>
    </Text>
  ),
};

export const WithText: Story = {
  render: (args) => (
    <Text fontSize="var(--gaze-font-size-xl)">
      <Icon {...args}>
        <IconSwords /> I challenge you to a duel
      </Icon>
    </Text>
  ),
};
