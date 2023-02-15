import {
  Box,
  Center,
  Frame,
  Grid,
  Heading,
  Sidebar,
  Stack,
  Text,
} from "@gaze/react";
import * as React from "react";
import styles from "./projects.module.css";

export const Projects = (): JSX.Element => (
  <Center maxWidth="60rem">
    <Sidebar space="var(--size-space-100)" side="left" sideWidth="20rem">
      <Frame aspectRatio={16 / 9} className={styles.frame}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/bsXqCi4zp-s"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ border: "none" }}
        ></iframe>
      </Frame>
      <Box
        background="var(--color-red-900)"
        borderRadius="var(--size-radius-lg)"
        padding="var(--size-space-100)"
        invert
      >
        <Stack space="var(--size-space-25)">
          <Heading as="h3" variant="h5">
            The Hello World Program
          </Heading>
          <Text>
            Learn computer science, programming, and web development with your
            educational and entertaining super friends.
          </Text>
        </Stack>
      </Box>
    </Sidebar>
  </Center>
);
