import * as React from "react";
import type { ComponentMeta } from "@storybook/react";
import { Box } from "../box";
import { Grid } from "./grid";

export default {
  component: Grid,
  title: "Layouts/Grid",
} as ComponentMeta<typeof Grid>;

export const Simple = (): JSX.Element => (
  <Grid minimum="15rem" space="var(--size-space-40)">
    <Box background="var(--color-purple-500)" padding="var(--size-space-100)" />
    <Box background="var(--color-purple-500)" padding="var(--size-space-100)" />
    <Box background="var(--color-purple-500)" padding="var(--size-space-100)" />
    <Box background="var(--color-purple-500)" padding="var(--size-space-100)" />
  </Grid>
);
