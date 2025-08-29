
import database from "@database";
import estudos from "@models/estudos";
export default class estudosController {
    static async criarEstudo(nome: string, idUser: string) {
        database.write(async () => {
            await database.get<estudos>('estudos').create((estudo) => {
                estudo.nome = nome;
                estudo.id_usuario = idUser;
                estudo.status = 'Em estudo';
                estudo.criado_em =  Date.now();;
                estudo.atualizado_em =  Date.now();;
            }
        );
    })
    }
}