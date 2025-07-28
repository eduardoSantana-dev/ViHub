 import { router } from "expo-router";
 export function irRotaEstudos(tela: string, idAtividade: number) {
        router.push({
            pathname: "/template/templateEstudos",
            params: { idAtividade, tela },
        });
    }