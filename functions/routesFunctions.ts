import { router } from "expo-router";

export function irRotaEstudos(tela: string, idAtividade: number) {
    router.push({
        pathname: "/template/templateEstudos",
        params: { idAtividade, tela },
    });
}
export function FormatarData(timestamp: number): string {
    const data = new Date(timestamp);
    const agora = new Date();

    // Zerando horas para comparar apenas a data
    const hoje = new Date(agora.getFullYear(), agora.getMonth(), agora.getDate());
    const comparada = new Date(data.getFullYear(), data.getMonth(), data.getDate());

    const diffEmDias = Math.floor((comparada.getTime() - hoje.getTime()) / (1000 * 60 * 60 * 24));

    const diasSemana = [
        'Domingo',
        'Segunda-feira',
        'Terça-feira',
        'Quarta-feira',
        'Quinta-feira',
        'Sexta-feira',
        'Sábado',
    ];

    if (diffEmDias === 0) {
        return 'Hoje';
    } else if (diffEmDias === 1) {
        return 'Amanhã';
    } else if (diffEmDias === -1) {
        return 'Ontem';
    } else if (diffEmDias >= -6 && diffEmDias <= 6) {
        return diasSemana[data.getDay()];
    } else {
        // Ex: 20/08/2025
        const dia = String(data.getDate()).padStart(2, '0');
        const mes = String(data.getMonth() + 1).padStart(2, '0');
        const ano = data.getFullYear();
        return `${dia}/${mes}/${ano}`;
    }
}
