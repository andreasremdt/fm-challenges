import { useState } from "react";
import type { ReactNode } from "react";

import { Avatar, Button, Icon } from "@/components";
import { Navigation } from "@/layout";

import styles from "./header.module.css";

type Props = {
  children?: ReactNode;
};

const links = ["Collections", "Men", "Women", "About", "Contact"];

export default function Header({ children }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Button
        variant="transparent"
        className={styles.toggle}
        aria-label={`${open ? "close" : "show"} mobile navigation`}
        onClick={() => setOpen(true)}
        data-testid="navigation-toggle"
      >
        <Icon name="menu" />
      </Button>

      <img src="images/logo.svg" alt="sneakers logo" width="138" height="20" className={styles.logo} />

      <Navigation links={links} open={open} onClose={() => setOpen(false)} />

      {children}

      <Avatar image="images/image-avatar.png" name="John Doe" className={styles.avatar} />
    </header>
  );
}
