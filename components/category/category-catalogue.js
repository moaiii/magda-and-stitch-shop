import React from 'react'
import CategoryPreview from './category-preview'
import styles from './category.module.scss'

export default function categoryCatalogue({ categories }) {
  return (
    <section className={styles.catalogue}>
      {categories.map((category) => {
        return <CategoryPreview key={category.name} category={category} />
      })}
    </section>
  )
}
