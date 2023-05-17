import * as React from "react";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Separator } from "./separator";

export default {
  component: Separator,
  title: "Components/Separator",
} as ComponentMeta<typeof Separator>;

const Template: ComponentStory<typeof Separator> = (args) => (
  <Separator {...args} />
);

export const Solid = Template.bind({});
Solid.args = {
  variant: "solid",
};

export const Dotted = Template.bind({});
Dotted.args = {
  variant: "dotted",
  thickness: "var(--size-border-2)",
  color: "var(--color-blue-400)",
};
