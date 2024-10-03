import type { Meta } from "@storybook/react";

import { Box, Stack } from "@gaze-ui/react";
import * as React from "react";

const meta: Meta<typeof Stack> = {
  component: Stack,
  title: "Layouts/Stack",
};

export default meta;

export const Simple = () => (
  <Stack space="var(--gaze-space-40)">
    <Box
      background="var(--gaze-color-purple-500)"
      padding="var(--gaze-space-40)"
    />
    <Box
      background="var(--gaze-color-purple-500)"
      padding="var(--gaze-space-40)"
    />
    <Box
      background="var(--gaze-color-purple-500)"
      padding="var(--gaze-space-40)"
    />
    <Box
      background="var(--gaze-color-purple-500)"
      padding="var(--gaze-space-40)"
    />
  </Stack>
);

export const Nested = () => (
  <Stack space="var(--gaze-space-40)">
    <Box
      background="var(--gaze-color-purple-500)"
      padding="var(--gaze-space-40)"
    />
    <Box
      background="var(--gaze-color-purple-500)"
      padding="var(--gaze-space-40)"
    />
    <Stack space="var(--gaze-space-100)">
      <Box
        background="var(--gaze-color-purple-900)"
        padding="var(--gaze-space-40)"
      />
      <Box
        background="var(--gaze-color-purple-900)"
        padding="var(--gaze-space-40)"
      />
    </Stack>
    <Box
      background="var(--gaze-color-purple-500)"
      padding="var(--gaze-space-40)"
    />
    <Box
      background="var(--gaze-color-purple-500)"
      padding="var(--gaze-space-40)"
    />
  </Stack>
);
