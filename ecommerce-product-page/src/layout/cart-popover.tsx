import { Popover } from "@headlessui/react";

import { Button, Badge, Icon, Typography } from "@/components";
import { CartEntry } from "@/layout";
import type { CartEntry as CartEntryType } from "@/types";
import { getTotalCartQuantity } from "@/lib/helpers";

import styles from "./cart-popover.module.css";

type Props = {
  entries: CartEntryType[];
  onRemoveCartEntry: (entry: CartEntryType) => void;
};

export default function CartPopover({ entries, onRemoveCartEntry }: Props) {
  return (
    <Popover className={styles.popover}>
      <Popover.Button
        as={Button}
        variant="transparent"
        aria-label="show your cart"
        className={styles.button}
        data-testid="cart-toggle"
      >
        {entries.length > 0 && (
          <Badge variant="small" className={styles.counter} aria-hidden="true">
            {getTotalCartQuantity(entries)}
          </Badge>
        )}
        <Icon name="cart" aria-hidden="true" />
      </Popover.Button>

      <Popover.Panel className={styles.panel} data-testid="cart-popover">
        <header className={styles.header}>
          <Typography as="h2" variant="h3">
            Cart
          </Typography>
        </header>

        {entries.length === 0 ? (
          <Typography className={styles.empty}>Your cart is empty.</Typography>
        ) : (
          <div className={styles.content}>
            {entries.map((entry, index) => (
              <CartEntry key={entry.product.name + index} entry={entry} onRemove={() => onRemoveCartEntry(entry)} />
            ))}
            <Button className={styles.checkout}>Checkout</Button>
          </div>
        )}
      </Popover.Panel>
    </Popover>
  );
}
