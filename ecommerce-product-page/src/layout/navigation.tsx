import { Dialog } from "@headlessui/react";

import { Button, Icon } from "@/components";
import { cx } from "@/lib/helpers";

import styles from "./navigation.module.css";

type Props = {
  links: string[];
  open: boolean;
  onClose: () => void;
};

export default function Navigation({ links, open, onClose }: Props) {
  function getLinks(className: string) {
    return (
      <nav className={cx(styles.navigation, className)}>
        {links.map((link) => (
          <a href="#" key={link} className={styles.link}>
            {link}
          </a>
        ))}
      </nav>
    );
  }

  return (
    <>
      {getLinks(styles.desktop)}

      <Dialog open={open} onClose={onClose}>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Panel className={styles.dialog}>
          <Button variant="transparent" aria-label="close mobile navigation" onClick={onClose} className={styles.close}>
            <Icon name="close" />
          </Button>

          {getLinks(styles.mobile)}
        </Dialog.Panel>
      </Dialog>
    </>
  );
}
