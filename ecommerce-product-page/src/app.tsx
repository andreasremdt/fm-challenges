import { useState } from "react";

import { Container } from "@/components";
import { CartPopover, Header, ProductGallery, ProductDetails } from "@/layout";
import type { CartEntry } from "@/types";

import styles from "./app.module.css";
import product from "./data.json";

export default function App() {
  const [cartEntries, setCartEntries] = useState<CartEntry[]>([]);

  return (
    <>
      <Container>
        <Header>
          <CartPopover
            entries={cartEntries}
            onRemoveCartEntry={(entry) => setCartEntries((prev) => prev.filter((p) => p !== entry))}
          />
        </Header>
      </Container>

      <Container as="main" variant="small" className={styles.layout}>
        <ProductGallery images={product.images} />

        <ProductDetails
          product={product}
          onAddToCart={(product, quantity) => setCartEntries((prev) => [...prev, { product, quantity }])}
        />
      </Container>
    </>
  );
}
