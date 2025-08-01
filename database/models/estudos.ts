import { Model, Relation } from '@nozbe/watermelondb';
import { children, field, relation } from '@nozbe/watermelondb/decorators';
import Usuarios from './usuarios';
import Materias from './materias';
export default class Estudos extends Model {
    static table: string = 'estudos';
    @field('id_usuario') id_usuario!: string;
    @field('nome') nome!: string;
    @field('status') data!: string;
    @field('criado_em') criado_em!: number;
    @field('atualizado_em') atualizado_em!: number;
    @children('materias') materias!: Relation<Materias>;

    @relation('usuarios', 'id_usuario') usuario!: Relation<Usuarios>;
}