import { type SchemaTypeDefinition } from 'sanity'
import blogpage from './blogpage'
import blogpost from './blogpost'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogpage,blogpost],
}
