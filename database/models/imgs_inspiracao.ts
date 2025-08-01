import { Model, Relation } from '@nozbe/watermelondb';
import { field, relation } from '@nozbe/watermelondb/decorators';
import Inspiracoes from './inspiracoes';
export default class Imgs_inspiracao extends Model {
    static table: string = 'imgs_inspiracao';
    @field('id_inspiracao') id_inspiracao!: string;
    @field('img') url!: string;
    @field('criado_em') criado_em!: number;
    @field('atualizado_em') atualizado_em!: number;
    
    @relation('inspiracoes', 'id_inspiracao') inspiracao!: Relation<Inspiracoes>;
    
}