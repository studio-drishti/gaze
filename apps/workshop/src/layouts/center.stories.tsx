import type { Meta } from "@storybook/react";

import { Box, Center } from "@gaze-ui/react";
import * as React from "react";

const meta: Meta<typeof Center> = {
  component: Center,
  title: "Layouts/Center",
};

export default meta;

export const Justified = () => (
  <Box background="var(--gaze-color-gray-50)" paddingY="var(--gaze-space-80)">
    <Center gutter="var(--gaze-space-80)" maxWidth="40rem">
      <Box
        background="var(--gaze-color-red-500)"
        padding="var(--gaze-space-80)"
      />
    </Center>
  </Box>
);
