import * as React from "react";
import type { ComponentMeta } from "@storybook/react";
import { Box } from "../box";
import { Center } from "../center";
import { Sidebar } from "./sidebar";

export default {
  component: Sidebar,
  title: "Layouts/Sidebar",
} as ComponentMeta<typeof Sidebar>;

export const Left = (): JSX.Element => (
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
