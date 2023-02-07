import * as React from "react";
import { ComponentMeta } from "@storybook/react";
import { Button } from "./button";

export default {
  component: Button,
  title: "Button",
} as ComponentMeta<typeof Button>;

export const standard = (): JSX.Element => <Button>Click Me</Button>;
