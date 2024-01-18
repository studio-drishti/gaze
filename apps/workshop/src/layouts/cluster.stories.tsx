import * as React from "react";
import type { Meta } from "@storybook/react";
import { Box, Cluster } from "@gaze-ui/react";

const meta: Meta<typeof Cluster> = {
  title: "Layouts/Cluster",
  component: Cluster,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Simple = (): JSX.Element => (
  <Cluster space="var(--size-space-20)">
    <Box background="var(--color-purple-200)">xx</Box>
    <Box background="var(--color-green-200)">xx</Box>
    <Box background="var(--color-yellow-200)">xxx</Box>
  </Cluster>
);
