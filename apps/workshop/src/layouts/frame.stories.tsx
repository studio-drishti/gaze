import type { Meta, StoryObj } from "@storybook/react";

import { Center, Frame } from "@gaze-ui/react/src";
import * as React from "react";

import harpoJpg from "../assets/harpo.jpg";
import marxBrothersJpg from "../assets/marx-brothers.jpg";

const meta: Meta<typeof Frame> = {
  component: Frame,
  title: "Layouts/Frame",
};

export default meta;

type Story = StoryObj<typeof Frame>;

export const SixteenByNine: Story = {
  args: {
    aspectRatio: Math.round((16 / 9) * 100) / 100,
    borderRadius: "var(--gaze-radius-md)",
  },
  render: (args) => (
    <Center maxWidth="50rem">
      <Frame {...args}>
        <img alt="The Marx Brothers" src={marxBrothersJpg} />
      </Frame>
    </Center>
  ),
};

export const Avatar: Story = {
  args: {
    aspectRatio: 1,
    borderRadius: "var(--gaze-radius-full)",
  },
  render: (args) => (
    <Center maxWidth="5rem">
      <Frame {...args}>
        <img alt="The Marx Brothers" src={harpoJpg} />
      </Frame>
    </Center>
  ),
};
