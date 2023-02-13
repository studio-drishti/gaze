import * as React from "react";
import { Box, Center, Text } from "@gaze/react";
import styles from "./header.module.css";

export const Header = (): JSX.Element => (
  <Center maxWidth="60rem">
    <Box as="header" className={styles.header}>
      <Text fontSize="var(--size-font-2xl)">Jay Nielsen</Text>
      <Box>i | i | i</Box>
    </Box>
  </Center>
);
