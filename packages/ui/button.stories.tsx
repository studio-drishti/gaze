import { Button } from "./Button";
import { ComponentMeta } from "@storybook/react";

export default {
  component: Button,
  title: "Button",
} as ComponentMeta<typeof Button>;

export const standard = () => <Button />;
