import { Model, Relation } from '@nozbe/watermelondb';
import { field, relation,children } from '@nozbe/watermelondb/decorators';
import Projetos from './projeto';
import Imgs_inspiracao from './imgs_inspiracao';
import Links_inspiracao from './links_inspiracao';
export default class Inspiracoes extends Model {
    static table: string = 'inspiracoes';
    @field('id_projeto') id_projeto!: string;
    @field('titulo') titulo!: string;
    @field('criado_em') criado_em!: number;
    @field('atualizado_em') atualizado_em!: number;
    
    @relation('projetos', 'id_projeto') projeto!: Relation<Projetos>;

    @children('imgs_inspiracao') imgs_inspiracao!: Relation<Imgs_inspiracao>;
    @children('links_inspiracao') links_inspiracao!: Relation<Links_inspiracao>;
   

}