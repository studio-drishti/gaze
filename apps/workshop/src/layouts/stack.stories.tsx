import type { Meta } from "@storybook/react";

import { Box, Stack } from "@gaze-ui/react";
import * as React from "react";

const meta: Meta<typeof Stack> = {
  component: Stack,
  tags: ["autodocs"],
  title: "Layouts/Stack",
};

export default meta;

export const Simple = () => (
  <Stack space="var(--size-space-40)">
    <Box background="var(--color-purple-500)" padding="var(--size-space-40)" />
    <Box background="var(--color-purple-500)" padding="var(--size-space-40)" />
    <Box background="var(--color-purple-500)" padding="var(--size-space-40)" />
    <Box background="var(--color-purple-500)" padding="var(--size-space-40)" />
  </Stack>
);

export const Nested = () => (
  <Stack space="var(--size-space-40)">
    <Box background="var(--color-purple-500)" padding="var(--size-space-40)" />
    <Box background="var(--color-purple-500)" padding="var(--size-space-40)" />
    <Stack space="var(--size-space-100)">
      <Box
        background="var(--color-purple-900)"
        padding="var(--size-space-40)"
      />
      <Box
        background="var(--color-purple-900)"
        padding="var(--size-space-40)"
      />
    </Stack>
    <Box background="var(--color-purple-500)" padding="var(--size-space-40)" />
    <Box background="var(--color-purple-500)" padding="var(--size-space-40)" />
  </Stack>
);
