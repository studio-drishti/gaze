import * as React from "react";
import { Center, Heading } from "@gaze/react";
import styles from "./title.module.css";

export interface TitleProps {
  children: NonNullable<React.ReactNode>;
}

export const Title = ({ children }: TitleProps): JSX.Element => {
  return (
    <div className={styles.title}>
      <Center maxWidth="60rem">
        <Heading as="h2" variant="h3" className={styles.heading}>
          {children}
        </Heading>
      </Center>
    </div>
  );
};
