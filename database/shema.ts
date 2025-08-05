
import { appSchema, tableSchema } from '@nozbe/watermelondb'
export default appSchema({
  version: 3,
  tables: [
    tableSchema({
      name: 'usuarios',
      columns: [
        { name: 'nome', type: 'string' },
        { name: 'email', type: 'string' },
        { name: 'senha', type: 'string' },
        { name: 'criado_em', type: 'number' },
        { name: 'atualizado_em', type: 'number' },
      ],
    }),
    tableSchema({
      name: 'tarefas',
      columns: [
        { name: 'id_usuario', type: 'string', isIndexed: true },
        { name: 'descricao', type: 'string' },
        { name: 'status', type: 'string' },
        { name: 'prazo', type: 'string', isOptional: true },
        { name: 'criado_em', type: 'number' },
        { name: 'atualizado_em', type: 'number' },
      ],
    }),
    tableSchema({
      name: 'tarefas_projeto',
      columns: [
        { name: 'id_projeto', type: 'string', isIndexed: true },
        { name: 'descricao', type: 'string' },
        { name: 'status', type: 'string' },
        { name: 'prazo', type: 'string', isOptional: true },
        { name: 'criado_em', type: 'number' },
        { name: 'atualizado_em', type: 'number' }
      ],
    }),
    tableSchema({
      name: 'ideias',
      columns: [
        { name: 'id_projeto', type: 'string', isIndexed: true },
        { name: 'descricao', type: 'string' },
        { name: 'criado_em', type: 'number' },
        { name: 'atualizado_em', type: 'number' }
      ],
    }),
    tableSchema({
      name: 'inspiracoes',
      columns: [
        { name: 'id_projeto', type: 'string', isIndexed: true },
        { name: 'titulo', type: 'string' },
        { name: 'criado_em', type: 'number' },
        { name: 'atualizado_em', type: 'number' }
      ],
    }),
       tableSchema({
      name: 'imgs_inspiracao',
      columns: [
        { name: 'id_inspiracao', type: 'string', isIndexed: true },
        { name: 'img', type: 'string' },
        { name: 'criado_em', type: 'number' },
        { name: 'atualizado_em', type: 'number' }
      ],
    }),
    tableSchema({
      name: 'links_inspiracao',
      columns: [
        { name: 'id_inspiracao', type: 'string', isIndexed: true },
        { name: 'url', type: 'string' },
        { name: 'criado_em', type: 'number' },
        { name: 'atualizado_em', type: 'number' }
      ],
    }),
    tableSchema({
      name: 'estudos',
      columns: [
        { name: 'id_usuario', type: 'string', isIndexed: true },
        { name: 'nome', type: 'string' },
        { name: 'status', type: 'string' },
        { name: 'criado_em', type: 'number' },
        { name: 'atualizado_em', type: 'number' }
      ],
    }),
    tableSchema({
      name: 'materias',
      columns: [
        { name: 'id_estudo', type: 'string', isIndexed: true },
        { name: 'nome', type: 'string' },
        { name: 'criado_em', type: 'number' },
        { name: 'atualizado_em', type: 'number' }
      ],
    }),
    tableSchema({
      name: 'tarefas_materia',
      columns: [
        { name: 'id_materia', type: 'string', isIndexed: true },
        { name: 'status', type: 'string' },
        { name: 'descricao', type: 'string' },
        { name: 'prazo', type: 'string' },
        { name: 'criado_em', type: 'number' },
        { name: 'atualizado_em', type: 'number' }
      ],
    }),
    tableSchema({
      name: 'anotacao_materia',
      columns: [
        { name: 'id_materia', type: 'string', isIndexed: true },
        { name: 'anotacao', type: 'string' },
        { name: 'criado_em', type: 'number' },
        { name: 'atualizado_em', type: 'number' }
      ],
    }),
    tableSchema({
      name: 'duvidas',
      columns: [
        { name: 'id_materia', type: 'string', isIndexed: true },
        { name: 'descricao', type: 'string' },
        { name: 'criado_em', type: 'number' },
        { name: 'atualizado_em', type: 'number' }
      ],
    }),
    tableSchema({
      name: 'materiais',
      columns: [
        { name: 'id_materia', type: 'string', isIndexed: true },
        { name: 'anexo', type: 'string', isOptional: true },
        { name: 'criado_em', type: 'number' },
        { name: 'atualizado_em', type: 'number' }
      ],
    }),
    tableSchema({
      name: 'planejamento',
      columns: [
        { name: 'id_usuario', type: 'string', isIndexed: true },
        { name: 'dia_semana', type: 'string' },
        { name: 'id_atividade', type: 'string', isIndexed: true },
        { name: 'atividade', type: 'string' },
        { name: 'criado_em', type: 'number' },
        { name: 'atualizado_em', type: 'number' }
      ],
    }),
    tableSchema({
      name: 'projeto',
      columns: [
        { name: 'status', type: 'string' },
        { name: 'name', type: 'string' },
        { name: 'id_usuario', type: 'string' ,isIndexed: true},
        { name: 'criado_em', type: 'number' },
        { name: 'atualizado_em', type: 'number' }
      ],
    }),
  ]
})
