import database from "@database";
import Projetos from "@modelsprojeto";

export default class ProjetoController {

    static async todosProjetos(): Promise<Projetos[]> {
        return await database.get<Projetos>('projeto').query().fetch()
    }
    static async CriarProjeto(nome: string, id_usuario: string, status: string): Promise<void> {
        await database.write(async () => {
            await database.get<Projetos>('projeto').create((p) => {
                p.name = nome;
                p.id_usuario = id_usuario;
                p.status = status;
                p.criado_em = Date.now();
                p.atualizado_em = Date.now();
            })
        })
       

    }
    static async deletarProjeto(id: string): Promise<void> {

        const projeto = await database.get<Projetos>('projeto').find(id);
        console.log('Deletando projet32o:', projeto.name);
        await database.write(async () => {
            await projeto.markAsDeleted();
        })
        console.log('Projeto deletado com sucesso');


    }
    static async projetoInfo(id: string): Promise<Projetos> {
        return await database.get<Projetos>('projeto').find(id);

    }
    static async atualizarProjeto(id: string, nome: string, status: string): Promise<void> {
        try {
            const projeto = await database.get<Projetos>('projeto').find(id);
            await database.write(async () => {
                await projeto.update((proj) => {
                    proj.name = nome;
                    proj.status = status;
                    proj.atualizado_em = Date.now();
                });
            });
            console.log('Projeto atualizado com sucesso');
        } catch (error) {
            console.error("Erro ao atualizar projeto:", error);
            alert('Erro ao atualizar projeto');
        }
    }
    static async deletarTodosProjetos(): Promise<void> {
        try {
            const projetos = await database.get<Projetos>('projeto').query().fetch();

            if (projetos.length === 0) {
                console.log('Nenhum projeto encontrado para deletar.');
                return;
            }

            console.log(`Deletando ${projetos.length} projetos...`);

            await database.write(async () => {
                for (const projeto of projetos) {
                    await projeto.destroyPermanently(); // ou projeto.destroyPermanently() se quiser excluir permanentemente
                }
            });

            console.log('Todos os projetos foram deletados com sucesso!');
        } catch (error) {
            console.error('Erro ao deletar todos os projetos:', error);
        }
    }
}