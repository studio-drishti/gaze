import * as React from "react";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Anchor } from "./anchor";

export default {
  component: Anchor,
  title: "Components/Anchor",
} as ComponentMeta<typeof Anchor>;

const Template: ComponentStory<typeof Anchor> = (args) => (
  <Anchor href="https://studiodrishti.co" {...args}>
    Studio Drishti
  </Anchor>
);

export const Normal = Template.bind({});
