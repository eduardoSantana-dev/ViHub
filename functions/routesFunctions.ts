import { router } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { format, isToday, isTomorrow, isThisWeek } from "date-fns";
import { ptBR } from "date-fns/locale";
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
export function FormatarPrazo(dateStr: string | null): string {
   
        if (!dateStr) return "Sem prazo definido";

        const date = new Date(dateStr); 
        if (isNaN(date.getTime())) return "Data inválida";

        if (isToday(date)) return `Hoje às ${format(date, "HH:mm")}`;
        if (isTomorrow(date)) return `Amanhã às ${format(date, "HH:mm")}`;
        if (isThisWeek(date)) return format(date, "EEEE 'às' HH:mm", { locale: ptBR });
        return format(date, "d 'de' MMMM 'às' HH:mm", { locale: ptBR });
    
}
export async function buscarIdUsuario() {
    return await AsyncStorage.getItem('id_user');
}