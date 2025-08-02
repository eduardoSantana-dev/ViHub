import database from "@database";
import Projetos from "@models/projetos";

export default class ProjetoController {
    
      static async todosProjetos(): Promise<Projetos[]> {
        return await database.get<Projetos>('projetos').query().fetch()
    }
    static async CriarProjeto(nome: string, id_usuario: string,status:string): Promise<void> {
        await database.write(async () => {
            await database.get<Projetos>('projetos').create((p) => {
                p.nome = nome;
                p.id_usuario = id_usuario;
                p.status = status;
                p.criado_em = Date.now();
                p.atualizado_em = Date.now();
            })
        })

    }
    static async deletarProjeto(id: string): Promise<void> {
       
         const projeto = await database.get<Projetos>('projetos').find(id);
        console.log('Deletando projet32o:', projeto.nome);
        await database.write(async () => {
            await projeto.markAsDeleted();
        })
        console.log('Projeto deletado com sucesso');
        
   
}
    static async projetoInfo(id: string): Promise<Projetos> {
        return  await database.get<Projetos>('projetos').find(id);
        
    }
    static async atualizarProjeto(id: string, nome: string, status: string): Promise<void> {
       try{
        const projeto = await database.get<Projetos>('projetos').find(id);
         await database.write(async () => {
            await projeto.update((proj) => {
                proj.nome = nome;
                proj.status = status;
                proj.atualizado_em = Date.now();
            });
        });
        console.log('Projeto atualizado com sucesso');  
       }    catch (error) {
        console.error("Erro ao atualizar projeto:", error);
        alert('Erro ao atualizar projeto');
       }
    }
}