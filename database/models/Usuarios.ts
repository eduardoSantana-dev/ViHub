import { Model, Relation } from '@nozbe/watermelondb';
import { field,children } from '@nozbe/watermelondb/decorators';
import Projetos from './projeto';
import Tarefas from './tarefas';
import Estudos from './estudos';
import planejamento from './planejamento';

export default class Usuarios extends Model {
    static table: string = 'usuarios'
    @field('nome') nome!: string;
    @field('email') email!: string;
    @field('senha') senha!: string;
    @field('criado_em') criado_em!: number;
    @field('atualizado_em') atualizado_em!: number;
    
    @children('projetos') projetos!: Relation<Projetos>; 
    @children('tarefas') tarefas!: Relation<Tarefas>;
    @children('estudos') estudos!: Relation<Estudos>;
    @children('planejamento') planejamento!: Relation<planejamento>;
}

