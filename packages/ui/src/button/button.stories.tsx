import { Button } from "./button";
import { ComponentMeta } from "@storybook/react";

export default {
  component: Button,
  title: "Button",
} as ComponentMeta<typeof Button>;

export const standard = () => <Button />;
