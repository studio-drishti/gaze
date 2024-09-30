import type { Meta } from "@storybook/react";

import { Box, Center, Sidebar } from "@gaze-ui/react";
import * as React from "react";

const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
  title: "Layouts/Sidebar",
};

export default meta;

export const Left = () => (
  <Center maxWidth="60rem">
    <Sidebar sideWidth="20rem" space="var(--size-space-10)">
      <Box
        background="var(--color-green-500)"
        padding="var(--size-space-100)"
      />
      <Box background="var(--color-blue-500)" padding="var(--size-space-100)" />
    </Sidebar>
  </Center>
);
