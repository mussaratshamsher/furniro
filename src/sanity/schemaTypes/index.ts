import { type SchemaTypeDefinition } from 'sanity'
import hero from './schemas/hero'
import designs from './schemas/designs'
import furniture from './schemas/furniture'
import product from './schemas/product'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero, product, designs, furniture],
}
