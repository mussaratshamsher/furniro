import { type SchemaTypeDefinition } from 'sanity'
import hero from './schemas/hero'
import product from './schemas/product'
import designs from './schemas/designs'
import furniture from './schemas/furniture'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero, product, designs, furniture],
}
