import database from "@database";
import Tarefas_projeto from "@models/tarefas_projeto";
export default class tarefaController {
    static async criarTarefaProjeto(desc: string, idProjeto: string, prazo:Date | null) {
        database.write(async () => {  
            console.log(prazo ? prazo.toISOString() : "")
            await database.get<Tarefas_projeto>('tarefas_projeto').create((t) => {
                t.id_projeto = idProjeto;
                t.descricao = desc;
                t.prazo = prazo ? prazo.toISOString() : ""
                t.status = 'em andamento';
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
} 