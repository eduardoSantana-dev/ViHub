import { Model, Relation } from '@nozbe/watermelondb';
import { field, relation,children } from '@nozbe/watermelondb/decorators';
import estudos from './estudos';
import Anotacao_materia from './anotacao_materia';
import Materiais from './materiais';
import Tarefas_materia from './tarefas_materia';
import Duvidas from './duvidas';
export default class Materias extends Model {
    static table: string = 'materias';
    @field('id_estudo') id_estudo!: string;
    @field('nome') nome!: string;
    @field('criado_em') criado_em!: number;
    @field('atualizado_em') atualizado_em!: number;

    @relation('estudos', 'id_estudo') estudo!: Relation<estudos>;

    @children('anotacao_materia') anotacoes!: Relation<Anotacao_materia>;
    @children('materiais') materiais!: Relation<Materiais>;
    @children('tarefas_materia') tarefas!: Relation<Tarefas_materia>;
    @children('duvidas') duvidas!: Relation<Duvidas>;


}