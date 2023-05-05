import { useState } from "react";
import { Dialog } from "@headlessui/react";
import type { MouseEvent } from "react";

import { Icon } from "@/components";
import { ProductThumbnails } from "@/layout";
import type { Image } from "@/types";

import styles from "./product-gallery.module.css";

type Props = {
  images: Image[];
};

export default function ProductGallery({ images }: Props) {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  function handleClick(event: MouseEvent) {
    event.preventDefault();

    setOpen(true);
  }

  function handleNext() {
    if (selectedImage === images.length - 1) {
      setSelectedImage(0);
    } else {
      setSelectedImage((prev) => prev + 1);
    }
  }

  function handlePrevious() {
    if (selectedImage === 0) {
      setSelectedImage(images.length - 1);
    } else {
      setSelectedImage((prev) => prev - 1);
    }
  }

  return (
    <>
      <div className={styles.wrapper}>
        <figure className={styles.figure}>
          <a href={images[selectedImage].src} onClick={handleClick} className={styles.link} aria-label="open overlay">
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              width="445"
              height="445"
              className={styles.cover}
            />
          </a>

          <button onClick={handlePrevious} className={styles.previous} aria-label="show previous image">
            <Icon name="previous" />
          </button>
          <button onClick={handleNext} className={styles.next} aria-label="show next image">
            <Icon name="next" />
          </button>
        </figure>
        <ProductThumbnails images={images} active={selectedImage} onSelect={setSelectedImage} />
      </div>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Panel className={styles.dialog}>
          <div className={styles.inner}>
            <Dialog.Title className="sr-only">{images[selectedImage].alt}</Dialog.Title>

            <figure className={styles.figure}>
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className={styles.image}
                width="550"
                height="550"
              />
              <button onClick={() => setOpen(false)} className={styles.close} aria-label="close overlay">
                <Icon name="close" />
              </button>
              <button onClick={handlePrevious} className={styles.previous} aria-label="show previous image">
                <Icon name="previous" />
              </button>
              <button onClick={handleNext} className={styles.next} aria-label="show next image">
                <Icon name="next" />
              </button>
            </figure>

            <ProductThumbnails images={images} active={selectedImage} onSelect={setSelectedImage} />
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
}
