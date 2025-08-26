import database from "@database";
import Tarefas_projeto from "@models/tarefas_projeto";
export default class tarefaController {
    static async criarTarefaProjeto(desc: string, idProjeto: string, prazo:Date | null) {
        database.write(async () => {  
            
            await database.get<Tarefas_projeto>('tarefas_projeto').create((t) => {
                t.id_projeto = idProjeto;
                t.descricao = desc;
                t.prazo = prazo ? prazo.toISOString() : ""
                t.status = 'a fazer';
                t.criado_em = Date.now();
                t.atualizado_em = Date.now();
            }
        )})
    }
     static async deletarTarefaProjeto(id: string): Promise<void> {
        const t = await database.get<Tarefas_projeto>('tarefas_projeto').find(id);
        await database.write(async () => {
            await t.markAsDeleted();
        })
    }
    static async finalizarTarefaProjeto(id:string){
        const t = await database.get<Tarefas_projeto>('tarefas_projeto').find(id);
        await database.write(async()=>{
            await t.update((tarefa)=> {
                tarefa.status ='finalizado'
            })
        })
    }
    static async atualizarTarefaProjeto(desc: string, id: string, prazo:Date | null,status:string){
        const t = await database.get<Tarefas_projeto>('tarefas_projeto').find(id);
        await database.write(async()=>{
            await t.update((t)=>{
                t.descricao = desc;
                t.prazo = prazo ? prazo.toISOString() : ""
                t.status = status;
                t.atualizado_em = Date.now();
            })
        })
    }
    static async tarefaProjetoInfo(id: string): Promise<Tarefas_projeto> {
        return await database.get<Tarefas_projeto>('tarefas_projeto').find(id);
    }
} 