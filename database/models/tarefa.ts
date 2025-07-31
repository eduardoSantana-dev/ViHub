import { Model } from '@nozbe/watermelondb';
import { field } from '@nozbe/watermelondb/decorators';

export default class TarefaModel extends Model {
    static table: string = 'tarefa'
    @field('title') title!: string;
}