import * as React from "react";
import type { ComponentMeta } from "@storybook/react";
import { Box } from "../box";
import { Center } from "./center";

export default {
  component: Center,
  title: "Layouts/Center",
} as ComponentMeta<typeof Center>;

export const Justified = (): JSX.Element => (
  <Center maxWidth="40rem">
    <Box background="var(--color-purple-500)" padding="var(--size-space-40)" />
  </Center>
);
