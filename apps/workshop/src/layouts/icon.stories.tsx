import type { Meta } from "@storybook/react";

import { Icon, Text } from "@gaze-ui/react";
import { IconSwords } from "@tabler/icons-react";
import * as React from "react";

const meta: Meta<typeof Icon> = {
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Layouts/Icon",
};

export default meta;

export const IconOnly = () => (
  <Text fontSize="var(--gaze-size-font-4xl)">
    <Icon label="I challenge you to a duel">
      <IconSwords />
    </Icon>
  </Text>
);

export const WithText = () => (
  <Text fontSize="var(--gaze-size-font-xl)">
    <Icon>
      <IconSwords /> I challenge you to a duel
    </Icon>
  </Text>
);
