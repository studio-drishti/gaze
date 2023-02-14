import * as React from "react";
import { Box, Cluster, Center, Icon, Text } from "@gaze/react";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import classNames from "classnames/bind";
import styles from "./header.module.css";

const cx = classNames.bind(styles);

export const Header = (): JSX.Element => (
  <Center maxWidth="60rem">
    <Box as="header" className={cx("header")}>
      <Text fontSize="var(--size-font-2xl)">Jay Nielsen</Text>
      <Cluster space="var(--size-space-10)" className={cx("social")}>
        <a
          href="https://www.instagram.com/jayarnielsen/"
          target="_blank"
          rel="nofollow"
        >
          <Icon label="GitHub">
            <IconBrandGithub color="var(--color-slate-500)" />
          </Icon>
        </a>
        <a
          href="https://linkedin.com/in/nielsen/"
          target="_blank"
          rel="nofollow"
        >
          <Icon label="LinkedIn">
            <IconBrandLinkedin color="var(--color-slate-500)" />
          </Icon>
        </a>
        <a
          href="https://www.instagram.com/jayarnielsen/"
          target="_blank"
          rel="nofollow"
        >
          <Icon label="Instagram">
            <IconBrandInstagram color="var(--color-slate-500)" />
          </Icon>
        </a>
      </Cluster>
    </Box>
  </Center>
);
