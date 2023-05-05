import { useState } from "react";
import type { ChangeEvent, FocusEvent } from "react";

import { Badge, Button, Icon, Input, Typography } from "@/components";
import { formatCurrency, formatDiscount, getDiscount } from "@/lib/helpers";
import type { Product } from "@/types";

import styles from "./product-details.module.css";

type Props = {
  product: Product;
  onAddToCart: (product: Product, quantity: number) => void;
};

export default function ProductDetails({ product, onAddToCart }: Props) {
  const [quantity, setQuantity] = useState(0);

  function handleChange(event: ChangeEvent) {
    const value = (event.currentTarget as HTMLInputElement).valueAsNumber;

    if (value > product.available) {
      setQuantity(product.available);
    } else {
      setQuantity(value);
    }
  }

  function handleDecrease() {
    if (quantity > 0) {
      setQuantity((prev) => prev - 1);
    }
  }

  function handleIncrease() {
    if (quantity < product.available) {
      setQuantity((prev) => prev + 1);
    }
  }

  function handleAddToCart() {
    if (quantity <= product.available && quantity > 0) {
      onAddToCart(product, quantity);
      setQuantity(0);
    }
  }

  function handleFocus(event: FocusEvent) {
    (event.currentTarget as HTMLInputElement).select();
  }

  return (
    <article className={styles.wrapper}>
      <Typography variant="h4">{product.company}</Typography>
      <Typography as="h1" variant="h1">
        {product.name}
      </Typography>
      <Typography>{product.description}</Typography>
      <div className={styles.pricing}>
        <Typography variant="h2" className={styles.price}>
          {formatCurrency(getDiscount(product.price, product.discount))}
          {product.discount && <Badge>{formatDiscount(product.discount)}</Badge>}
        </Typography>
        {product.discount && <p className={styles.outdated}>{formatCurrency(product.price)}</p>}
      </div>

      <div className={styles.buttons}>
        <div className={styles.quantity}>
          <Button
            variant="secondary"
            aria-label="decrease number of items"
            onClick={handleDecrease}
            disabled={quantity === 0}
          >
            <Icon name="minus" />
          </Button>
          <Input
            type="number"
            value={quantity}
            onChange={handleChange}
            onFocus={handleFocus}
            aria-label="number of items to add to cart"
          />
          <Button
            variant="secondary"
            aria-label="increase number of items"
            onClick={handleIncrease}
            disabled={quantity >= product.available}
          >
            <Icon name="plus" />
          </Button>
        </div>

        <Button variant="primary" className={styles.add} onClick={handleAddToCart}>
          <Icon name="cart" />
          Add to cart
        </Button>
      </div>
    </article>
  );
}
