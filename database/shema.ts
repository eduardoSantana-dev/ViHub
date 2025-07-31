// model/schema.js
import { appSchema, tableSchema } from '@nozbe/watermelondb'

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'tarefa',
      columns: [
        { name: 'title', type: 'string' },
      ]
    }),
  ]
})
