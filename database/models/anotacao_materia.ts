import { Model, Relation } from '@nozbe/watermelondb';
import { field, relation } from '@nozbe/watermelondb/decorators';
import Materias from './materias';

export default class Anotacao_materia extends Model {
    static table: string = 'anotacao_materia';
    @field('id_materia') id_materia!: string;
    @field('anotacao') anotacao!: string;
    @field('criado_em') criado_em!: number;
    @field('atualizado_em') atualizado_em!: number;
    
    @relation('materias', 'id_materia') materia!: Relation<Materias>;
}