import React from 'react'
import Link from 'next/link'
import styles from './category.module.scss'

export default function categoryPreview({ category }) {
  const { title, price, slug, name, coverImage } = category

  return (
    <div className={styles.preview}>
      <Link as={`/category/${slug}`} href="/category/[slug]">
        <div
          className={styles.previewCard}
          style={{ backgroundImage: `url(${coverImage})` }}
        />
      </Link>
      <div className={styles.previewInfo}></div>
    </div>
  )
}
