import type { Meta } from "@storybook/react";

import { Box, Cluster } from "@gaze-ui/react";
import * as React from "react";

const meta: Meta<typeof Cluster> = {
  component: Cluster,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Layouts/Cluster",
};

export default meta;

export const Simple = () => (
  <Cluster space="var(--gaze-space-20)">
    <Box background="var(--gaze-color-purple-200)">xx</Box>
    <Box background="var(--gaze-color-green-200)">xx</Box>
    <Box background="var(--gaze-color-yellow-200)">xxx</Box>
  </Cluster>
);
