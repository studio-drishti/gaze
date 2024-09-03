import type { Meta } from "@storybook/react";

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

export const Simple = () => {
  return (
    <LinkBox>
      <Stack space="0.5rem">
        <Heading as="h4">
          <LinkOverlay href="#">Title of this post</LinkOverlay>
        </Heading>
        <Text>
          Some text to go with it. And hey look: another{" "}
          <Anchor href="#2">link</Anchor>.
        </Text>
      </Stack>
    </LinkBox>
  );
};
