import * as React from "react";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Text } from "./text";

export default {
  component: Text,
  title: "Components/Text",
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => (
  <Text {...args}>
    Outside of a dog, a book is man's best friend. Inside of a dog, it's too
    dark to read.
  </Text>
);

export const Normal = Template.bind({});

export const Large = Template.bind({});
Large.args = {
  fontSize: "var(--size-font-2xl)",
};

export const Strong = Template.bind({});
Strong.args = {
  as: "strong",
};
