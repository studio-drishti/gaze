import * as React from "react";
import type { Meta } from "@storybook/react";
import { Box, Grid } from "@gaze-ui/react";

const meta: Meta<typeof Grid> = {
  title: "Layouts/Grid",
  component: Grid,
  tags: ["autodocs"],
};

export default meta;

export const Simple = (): JSX.Element => (
  <Grid minimum="15rem" space="var(--size-space-40)">
    <Box background="var(--color-purple-500)" padding="var(--size-space-100)" />
    <Box background="var(--color-purple-500)" padding="var(--size-space-100)" />
    <Box background="var(--color-purple-500)" padding="var(--size-space-100)" />
    <Box background="var(--color-purple-500)" padding="var(--size-space-100)" />
  </Grid>
);
