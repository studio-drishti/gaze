import { Box, Center, Heading, Stack, Text } from "@gaze/react";
import * as React from "react";

export const AboutMe = (): JSX.Element => (
  <Center maxWidth="60rem">
    <Box
      as="article"
      padding="var(--size-space-100)"
      background="var(--color-purple-900)"
      borderRadius="var(--size-radius-lg)"
      invert
    >
      <Stack space="var(--size-space-60)">
        <Heading as="h2">About Me</Heading>
        <Text>
          Full stack web development professional with bountiful experience
          building hundreds of websites for businesses, law firms, non-profits,
          and universities across the nation. I enjoy exploring opportunities in
          technology for creatively sharing information, and have worked with a
          variety of teams to deliver quality web applications for clients large
          and small.
        </Text>
      </Stack>
    </Box>
  </Center>
);
