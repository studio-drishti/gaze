import * as React from "react";
import type { ComponentMeta } from "@storybook/react";
import { Box } from "../box";
import { Cluster } from "./cluster";

export default {
  component: Cluster,
  title: "Layouts/Cluster",
} as ComponentMeta<typeof Cluster>;

export const Simple = (): JSX.Element => (
  <Cluster space="var(--size-space-20)">
    <Box background="var(--color-purple-200)">xx</Box>
    <Box background="var(--color-green-200)">xx</Box>
    <Box background="var(--color-yellow-200)">xxx</Box>
  </Cluster>
);
