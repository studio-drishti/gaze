import type { Meta } from "@storybook/react";

import { Box, Center } from "@gaze-ui/react";
import * as React from "react";

const meta: Meta<typeof Center> = {
  component: Center,
  tags: ["autodocs"],
  title: "Layouts/Center",
};

export default meta;

export const Justified = () => (
  <Box background="var(--color-gray-50)" paddingY="var(--size-space-80)">
    <Center gutter="var(--size-space-80)" maxWidth="40rem">
      <Box background="var(--color-red-500)" padding="var(--size-space-80)" />
    </Center>
  </Box>
);
