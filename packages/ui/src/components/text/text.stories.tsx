import * as React from "react";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Text } from "./text";

export default {
  component: Text,
  title: "Components/Text",
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => (
  <Text {...args}>
    Create engaging emails easily in Mailchimp to grow your brand and sell more
    stuff. Our email tools will help your business get the most out of your
    email marketing.
  </Text>
);

export const Small = Template.bind({});
Small.args = {
  variant: "small",
};

export const Large = Template.bind({});
Large.args = {
  variant: "large",
};
