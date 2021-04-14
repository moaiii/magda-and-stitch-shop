import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

export function getBySlug(slug, fields = [], directory) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(directory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

/**
 *
 * Products
 */
const productsDirectory = join(process.cwd(), '_products')

export function getProductSlugs() {
  return fs.readdirSync(productsDirectory)
}

export function getAllProducts(fields = []) {
  const slugs = getProductSlugs()

  return slugs.map(function (slug) {
    return getBySlug(slug, fields, productsDirectory)
  })
}

/**
 *
 * Categories
 */
const categoriesDirectory = join(process.cwd(), '_categories')

export function getCategorySlugs() {
  return fs.readdirSync(categoriesDirectory)
}

export function getAllCategories(fields = []) {
  const slugs = getCategorySlugs()
  return slugs.map((slug) => getBySlug(slug, fields, categoriesDirectory))
}
