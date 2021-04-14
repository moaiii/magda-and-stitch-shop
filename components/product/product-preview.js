import React from 'react'
import Link from 'next/link'
import styles from './product.module.scss'

export default function productPreview({ product }) {
  const { title, price, slug, name, coverImage } = product

  return (
    <div className={styles.preview}>
      <Link as={`/products/${slug}`} href="/products/[slug]">
        <div
          className={styles.previewCard}
          style={{ backgroundImage: `url(${coverImage})` }}
        />
      </Link>
      <div className={styles.previewInfo}>
        <p className={styles.previewName}>{name}</p>
        <p className={styles.previewPrice}>£{price}.00</p>
        <button>Add to basket</button>
      </div>
    </div>
  )
}
