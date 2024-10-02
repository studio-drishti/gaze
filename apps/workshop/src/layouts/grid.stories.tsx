import type { Meta } from "@storybook/react";

import { Box, Grid } from "@gaze-ui/react";
import * as React from "react";

const meta: Meta<typeof Grid> = {
  component: Grid,
  tags: ["autodocs"],
  title: "Layouts/Grid",
};

export default meta;

export const Simple = () => (
  <Grid minimum="15rem" space="var(--gaze-size-space-40)">
    <Box
      background="var(--gaze-color-purple-500)"
      padding="var(--gaze-size-space-100)"
    />
    <Box
      background="var(--gaze-color-purple-500)"
      padding="var(--gaze-size-space-100)"
    />
    <Box
      background="var(--gaze-color-purple-500)"
      padding="var(--gaze-size-space-100)"
    />
    <Box
      background="var(--gaze-color-purple-500)"
      padding="var(--gaze-size-space-100)"
    />
  </Grid>
);
