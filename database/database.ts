import { Platform } from 'react-native'
import { Database } from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'

import schema from './shema'
// import migrations from './migrations'
import Anotacao_materia from './models/anotacao_materia'
import Duvidas from './models/duvidas'
import Estudos from './models/estudos'
import Ideias from './models/ideias'
import Imgs_inspiracao from './models/imgs_inspiracao'
import Inspiracoes from './models/inspiracoes'
import Links_inspiracao from './models/links_inspiracao'
import Materiais from './models/materiais'
import Materias from './models/materias'
import Planejamento from './models/planejamento'
import Projetos from './models/projetos'
import Tarefas_projeto from './models/tarefas_projeto'
import Tarefas_materia from './models/tarefas_materia'
import Tarefas from './models/tarefas'
import Usuarios from './models/usuarios'
const adapter = new SQLiteAdapter({
  schema,
  dbName: 'Vihub',
  onSetUpError: error => {
  }
})


const database = new Database({
  adapter,
  modelClasses: [
    Anotacao_materia,
    Duvidas,
    Estudos,
    Ideias,
    Imgs_inspiracao,
    Inspiracoes,
    Links_inspiracao,
    Materiais,
    Materias,
    Planejamento,
    Projetos,
    Tarefas_projeto,
    Tarefas_materia,
    Tarefas,
    Usuarios,
  ],
})
export default database