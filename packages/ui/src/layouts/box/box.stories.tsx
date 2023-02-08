import * as React from "react";
import type { ComponentMeta } from "@storybook/react";
import { Box } from "./box";

export default {
  component: Box,
  title: "Layouts/Box",
} as ComponentMeta<typeof Box>;

export const Simple = (): JSX.Element => (
  <Box background="var(--color-purple-500)" padding="var(--size-space-80)" />
);
