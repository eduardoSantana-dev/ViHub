import { Model, Relation } from '@nozbe/watermelondb';
import { children, field, relation } from '@nozbe/watermelondb/decorators';
import Usuarios from './Usuarios';
import Ideias from './ideias';
import Inspiracoes from './inspiracoes';
import Tarefas_projeto from './tarefas_projeto';
export default class Projetos extends Model {
    static table: string = 'projetos'
    @field('id_usuario') id_usuario!: string;
    @field('nome') nome!: string;
    @field('status') status!: string;
    @field('criado_em') criado_em!: number;
    @field('atualizado_em') atualizado_em!: number;

    @relation('usuarios', 'id_usuario') usuario!: Relation<Usuarios>;

    @children('inspiracoes') inspiracoes!: Relation<Inspiracoes>;
    @children('tarefas_projeto') tarefas_projeto!: Relation<Tarefas_projeto>;
    @children('ideias') ideias!: Relation<Ideias>;

    // Métodos

  
}

