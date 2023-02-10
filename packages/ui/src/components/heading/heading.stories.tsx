import * as React from "react";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Heading } from "./heading";

export default {
  component: Heading,
  title: "Components/Heading",
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args}>
    Who are you going to believe, me or your own eyes?
  </Heading>
);

export const Heading1 = Template.bind({});
Heading1.args = {
  as: "h1",
};

export const Heading2 = Template.bind({});
Heading2.args = {
  as: "h2",
};

export const Heading3 = Template.bind({});
Heading3.args = {
  as: "h3",
};

export const Heading4 = Template.bind({});
Heading4.args = {
  as: "h4",
};

export const Heading5 = Template.bind({});
Heading5.args = {
  as: "h5",
};

export const Heading6 = Template.bind({});
Heading6.args = {
  as: "h6",
};
