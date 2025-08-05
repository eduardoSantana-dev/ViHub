import { Model, Relation } from '@nozbe/watermelondb';
import { field, relation } from '@nozbe/watermelondb/decorators';
import Projetos from './projeto';
export default class Tarefas_projeto extends Model {
    static table: string = 'tarefas_projeto'
    @field('id_projeto') id_projeto!: string;
    @field('descricao') descricao!: string;
    @field('status') status!: string;
    @field('prazo') prazo!: string;
    @field('criado_em') criado_em!: number;
    @field('atualizado_em') atualizado_em!: number;
    
    @relation('projetos', 'id_projeto') projeto!: Relation<Projetos>;
}

