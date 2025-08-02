import { Model, Relation } from '@nozbe/watermelondb';
import { field, relation } from '@nozbe/watermelondb/decorators';
import Usuarios from './Usuarios';
export default class Planejamento extends Model {
    static table: string = 'planejamento';
    @field('id_usuario') id_usuario!: string;
    @field('dia_semana') dia_semana!: string;
    @field('id_atividade') id_atividade!: string;
    @field('atividade') atividade!: string;
    @field('criado_em') criado_em!: number;
    @field('atualizado_em') atualizado_em!: number;

    @relation('usuarios', 'id_usuario') usuario!: Relation<Usuarios>;
}