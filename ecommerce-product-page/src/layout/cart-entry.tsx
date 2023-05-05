import { Button, Icon } from "@/components";
import { formatCurrency, getDiscount, getThumbnail, getTotal } from "@/lib/helpers";
import type { CartEntry as CartEntryType } from "@/types";

import styles from "./cart-entry.module.css";

type Props = {
  entry: CartEntryType;
  onRemove: () => void;
};

export default function CartEntry({ entry, onRemove }: Props) {
  const discountedPrice = getDiscount(entry.product.price, entry.product.discount);

  return (
    <article className={styles.entry}>
      <img
        src={getThumbnail(entry.product.images[0].src)}
        className={styles.image}
        alt={entry.product.images[0].alt}
        width="50"
        height="50"
      />
      <div>
        <h3 className={styles.title}>{entry.product.name}</h3>
        <p>
          {formatCurrency(discountedPrice)} x {entry.quantity}{" "}
          <strong className={styles.total}>{formatCurrency(getTotal(discountedPrice, entry.quantity))}</strong>
        </p>
      </div>
      <Button variant="transparent" aria-label="remove item from cart" onClick={onRemove}>
        <Icon name="trash" />
      </Button>
    </article>
  );
}
