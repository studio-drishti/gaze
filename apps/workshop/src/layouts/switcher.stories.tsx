import type { Meta } from "@storybook/react";

import { Box, Switcher } from "@gaze-ui/react";
import * as React from "react";

const meta: Meta<typeof Switcher> = {
  component: Switcher,
  tags: ["autodocs"],
  title: "Layouts/Switcher",
};

export default meta;

export const Three = () => (
  <Switcher limit={3} space="var(--size-space-40)" threshold="40rem">
    <Box background="var(--color-purple-500)" padding="var(--size-space-50)" />
    <Box background="var(--color-purple-500)" padding="var(--size-space-50)" />
    <Box background="var(--color-purple-500)" padding="var(--size-space-50)" />
  </Switcher>
);

export const Align = () => (
  <Switcher
    align="center"
    limit={3}
    space="var(--size-space-40)"
    threshold="40rem"
  >
    <Box background="var(--color-purple-500)" padding="var(--size-space-30)" />
    <Box background="var(--color-purple-500)" padding="var(--size-space-50)" />
    <Box background="var(--color-purple-500)" padding="var(--size-space-70)" />
  </Switcher>
);
