import * as React from "react";
import type { Meta } from "@storybook/react";
import { IconSwords } from "@tabler/icons-react";
import { Text, Icon } from "@gaze-ui/react";

const meta: Meta<typeof Icon> = {
  title: "Layouts/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const IconOnly = (): JSX.Element => (
  <Text fontSize="var(--size-font-4xl)">
    <Icon label="I challenge you to a duel">
      <IconSwords />
    </Icon>
  </Text>
);

export const WithText = (): JSX.Element => (
  <Text fontSize="var(--size-font-xl)">
    <Icon>
      <IconSwords /> I challenge you to a duel
    </Icon>
  </Text>
);
