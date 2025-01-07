import { type SchemaTypeDefinition } from 'sanity'
import hero from './schemas/hero'
import designs from './schemas/designs'
import furniture from './schemas/furniture'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero, designs, furniture],
}
