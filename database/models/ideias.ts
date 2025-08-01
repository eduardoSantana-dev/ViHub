import { Model, Relation } from '@nozbe/watermelondb';
import { field, relation } from '@nozbe/watermelondb/decorators';
import Projetos from './projetos';
export default class Ideias extends Model {
    static table: string = 'ideias';
    @field('id_projeto') id_projeto!: string;
    @field('descricao') descricao!: string;
    @field('criado_em') criado_em!: number;
    @field('atualizado_em') atualizado_em!: number;
    
    @relation('projetos', 'id_projeto') projeto!: Relation<Projetos>;

}