import { cx, getThumbnail } from "@/lib/helpers";
import type { Image } from "@/types";

import styles from "./product-thumbnails.module.css";

type Props = {
  images: Image[];
  active: number;
  onSelect: (index: number) => void;
};

export default function ProductThumbnails({ images, active, onSelect }: Props) {
  return (
    <div className={styles.thumbnails}>
      {images.map((image, index) => (
        <button
          type="button"
          className={cx(styles.thumbnail, {
            [styles.active]: active === index,
          })}
          onClick={() => onSelect(index)}
          key={image.src + index}
        >
          <img src={getThumbnail(image.src)} alt={image.alt} className={styles.image} width="88" height="88" />
        </button>
      ))}
    </div>
  );
}
