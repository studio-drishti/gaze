import * as React from "react";
import type { ComponentMeta } from "@storybook/react";
import { Box } from "../box";
import { Stack } from "./stack";

export default {
  component: Stack,
  title: "Layouts/Stack",
} as ComponentMeta<typeof Stack>;

export const Simple = (): JSX.Element => (
  <Stack space="var(--size-space-40)">
    <Box background="var(--color-purple-500)" padding="var(--size-space-40)" />
    <Box background="var(--color-purple-500)" padding="var(--size-space-40)" />
    <Box background="var(--color-purple-500)" padding="var(--size-space-40)" />
    <Box background="var(--color-purple-500)" padding="var(--size-space-40)" />
  </Stack>
);

export const Nested = (): JSX.Element => (
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
