import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "@gaze-ui/react";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Normal: Story = {
  args: {
    children:
      "Outside of a dog, a book is man's best friend. Inside of a dog, it's too dark to read.",
  },
};

export const Large: Story = {
  args: {
    children:
      "Outside of a dog, a book is man's best friend. Inside of a dog, it's too dark to read.",
    fontSize: "var(--size-font-2xl)",
  },
};
