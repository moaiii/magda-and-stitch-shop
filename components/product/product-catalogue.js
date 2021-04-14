import React from 'react'
import ProductPreview from './product-preview'
import styles from './product.module.scss'

export default function productCatalogue({ products }) {
  return (
    <section className={styles.catalogue}>
      <h2>Products</h2>
      <div className={styles.catalogueList}>
        {products.map((product) => {
          return <ProductPreview key={product.name} product={product} />
        })}
      </div>
    </section>
  )
}
