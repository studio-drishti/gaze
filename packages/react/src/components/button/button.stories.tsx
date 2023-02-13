import * as React from "react";
import type { ComponentMeta } from "@storybook/react";
import { Button } from "./button";

export default {
  component: Button,
  title: "Components/Button",
} as ComponentMeta<typeof Button>;

export const Primary = (): JSX.Element => <Button>Click Me</Button>;

export const Secondary = (): JSX.Element => (
  <Button variant="secondary">Click Me</Button>
);
