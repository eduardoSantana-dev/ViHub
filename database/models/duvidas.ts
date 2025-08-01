import { Model, Relation } from '@nozbe/watermelondb';
import { field, relation } from '@nozbe/watermelondb/decorators';
import Materias from './materias';
export default class Duvidas extends Model {
    static table: string = 'duvidas';
    @field('id_materia') id_materia!: string;
    @field('descricao') descricao!: string;
    @field('criado_em') criado_em!: number;
    @field('atualizado_em') atualizado_em!: number;
    
        @relation('materias', 'id_materia') materia!: Relation<Materias>;

}