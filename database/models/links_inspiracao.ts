import { Model, Relation } from '@nozbe/watermelondb';
import { field, relation } from '@nozbe/watermelondb/decorators';
import Inspiracoes from './inspiracoes';
export default class Links_inspiracao extends Model {
    static table: string = 'links_inspiracao';
    @field('id_inspiracao') id_projeto!: string;
    @field('url') descricao!: string;
    @field('criado_em') criado_em!: number;
    @field('atualizado_em') atualizado_em!: number;
    
    @relation('inspiracoes', 'id_inspiracao') inspiracao!: Relation<Inspiracoes>;
}