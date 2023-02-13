import * as React from "react";
import type { ComponentMeta } from "@storybook/react";
import { Box } from "../box";
import { Switcher } from "./switcher";

export default {
  component: Switcher,
  title: "Layouts/Switcher",
} as ComponentMeta<typeof Switcher>;

export const Three = (): JSX.Element => (
  <Switcher limit={3} space="var(--size-space-40)" threshold="40rem">
    <Box background="var(--color-purple-500)" padding="var(--size-space-50)" />
    <Box background="var(--color-purple-500)" padding="var(--size-space-50)" />
    <Box background="var(--color-purple-500)" padding="var(--size-space-50)" />
  </Switcher>
);
