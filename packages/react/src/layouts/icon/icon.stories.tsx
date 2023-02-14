import * as React from "react";
import type { ComponentMeta } from "@storybook/react";
import { IconSwords } from "@tabler/icons-react";
import { Text } from "../../components/text";
import { Icon } from "./icon";

export default {
  component: Icon,
  title: "Layouts/Icon",
} as ComponentMeta<typeof Icon>;

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
