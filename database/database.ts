import { Platform } from 'react-native'
import { Database } from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'

import schema from './shema'
// import migrations from './migrations'
import TarefaModel  from './models/tarefa'


const adapter = new SQLiteAdapter({
  schema,
  // migrations,
  dbName: 'Vihub',



  onSetUpError: error => {

  }
})


const database = new Database({
  adapter,
  modelClasses: [
    TarefaModel 
  ],
})
export default database