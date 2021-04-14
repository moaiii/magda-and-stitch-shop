import Container from '../components/container'
import ProductCatalogue from '../components/product/product-catalogue'
import CategoriesCatalogue from '../components/category/category-catalogue'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllProducts, getAllCategories } from '../lib/api'
import Head from 'next/head'

export default function Index({ allProducts, allCategories }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Magda&Stitch</title>
        </Head>
        <Container>
          <Intro />
          {allCategories.length > 0 && (
            <CategoriesCatalogue categories={allCategories} />
          )}
          {allProducts.length > 0 && (
            <ProductCatalogue products={allProducts} />
          )}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allCategories = getAllCategories([
    'name',
    'priceRange',
    'excerpt',
    'coverImage',
    'slug',
    'date',
    'ogImage',
    'skuCode',
  ])

  const allProducts = getAllProducts([
    'name',
    'price',
    'date',
    'slug',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allProducts, allCategories },
  }
}
