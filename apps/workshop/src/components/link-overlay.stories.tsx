import type { Meta, StoryObj } from "@storybook/react";

import {
  Anchor,
  Heading,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
} from "@gaze-ui/react";
import React from "react";

const meta: Meta<typeof LinkOverlay> = {
  component: LinkOverlay,
  parameters: {
    layout: "centered",
  },
  title: "Components/LinkOverlay",
};

export default meta;

type Story = StoryObj<typeof LinkOverlay>;

export const Simple: Story = {
  args: {
    href: "https://studiodrishti.co",
  },
  render: (args) => (
    <LinkBox>
      <Stack space="0.5rem">
        <Heading as="h4">
          <LinkOverlay {...args}>Title of this post</LinkOverlay>
        </Heading>
        <Text>
          Some text to go with it. And hey look: another{" "}
          <Anchor href="https://rubbishrabble.com">link</Anchor>.
        </Text>
      </Stack>
    </LinkBox>
  ),
};
