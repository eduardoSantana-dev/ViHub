import { Model, Relation } from '@nozbe/watermelondb';
import { field, relation } from '@nozbe/watermelondb/decorators';
import Usuarios from './Usuarios';  
export default class Tarefas extends Model {
    static table: string = 'projetos'
    @field('id_usuario') id_usuario!: string;
    @field('status') status!: string;
    @field('descricao') descricao!: string;
    @field('prazo') prazo!: string;
    @field('criado_em') criado_em!: number;
    @field('atualizado_em') atualizado_em!: number;
    
    @relation('usuarios', 'id_usuario') usuario!: Relation<Usuarios>;
}

