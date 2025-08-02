import { View, Text, Pressable, ScrollView, SafeAreaView, Image } from 'react-native'
import { Link } from 'expo-router'
import { useState } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '@colors*';
interface dia {
    diasemana: String;
    dia: String
}
export default function calendarioHome() {
    dayjs.locale('pt-br');
    const hoje = dayjs();
    const [select, setSelect] = useState(hoje.format('DD'))
    const dias = [];
    for (let i = -3; i <= 3; i++) {
        const data = { Semana: (hoje.add(i, 'day').format('ddd')), dia: (hoje.add(i, 'day').format('DD')) }
        dias.push(data);
    }
    function formatarDia(data: string) {
        const dataFormatada = data[0] + data[1] + data[2]
        return dataFormatada
    }
    const tarefasLista = [
        {
            dia: '31',
            tarefas: [
                { id: 1, titulo: 'Estudar React Native', prazo: '08:00 às 10:00' },
                { id: 2, titulo: 'Reunião com equipe', prazo: '14:00 às 15:30' },
                { id: 3, titulo: 'Academia', prazo: '18:00 às 19:00' }
            ]
        },
        {
            dia: '01',
            tarefas: [
                { id: 4, titulo: 'Planejar semana', prazo: '09:00 às 10:00' },
                { id: 5, titulo: 'Codar novo recurso', prazo: '10:30 às 13:00' }
            ]
        },
        {
            dia: '02',
            tarefas: [
                { id: 6, titulo: 'Revisar TCC', prazo: '08:30 às 11:00' },
                { id: 7, titulo: 'Almoço com cliente', prazo: '12:30 às 14:00' },
                { id: 8, titulo: 'Responder e-mails', prazo: '16:00 às 17:00' }
            ]
        },
        {
            dia: '04',
            tarefas: [
                { id: 9, titulo: 'Desenvolver API', prazo: '09:00 às 12:00' },
                { id: 10, titulo: 'Testar funcionalidades', prazo: '14:00 às 15:30' }
            ]
        },
        {
            dia: '03',
            tarefas: [
                { id: 11, titulo: 'Atualizar portfólio', prazo: '08:00 às 09:30' },
                { id: 12, titulo: 'Estudar TypeScript', prazo: '10:00 às 11:30' },
                { id: 13, titulo: 'Revisar código', prazo: '15:00 às 17:00' }
            ]
        },
        {
            dia: '05',
            tarefas: [
                { id: 14, titulo: 'Limpar a casa', prazo: '09:00 às 10:45' },
                { id: 15, titulo: 'Preparar relatório', prazo: '11:00 às 13:40' }
            ]
        },
        {
            dia: '06',
            tarefas: [
                { id: 16, titulo: 'Backup do projeto', prazo: '08:30 às 09:30' },
                { id: 17, titulo: 'Fazer compras', prazo: '10:00 às 11:30' },
                { id: 18, titulo: 'Relaxar assistindo série', prazo: '20:00 às 22:00' }
            ]
        }
    ];
    



    return (
        <View className='bg-cards rounded-padrao w-full  mt-10 p-3'>
            <View className='w-full  flex-row p1-2 justify-evenly gap-2'>
                {dias.map((dias) => (
                    <Pressable className={`items-center p-0 m-0 justify-center px-2 rounded-lg  h-20 ${select === dias.dia ? 'bg-azul' : ''} `} key={dias.dia} onPress={() => setSelect(dias.dia)}>
                        <Text className={`font-inter-b text-xl p-0 m-0  ${select === dias.dia ? 'color-texto' : 'color-texto2'} `}>{dias.dia}</Text>
                        <Text className={`text-lg p-0 m-0 capitalize ${select === dias.dia ? 'color-texto' : 'color-texto2'} `}>{dias.Semana}</Text>
                        <MaterialCommunityIcons name='circle' color={select === dias.dia ? colors.texto : colors.cards} size={10} />
                    </Pressable>
                ))}

            </View>
            <View className='w-full gap-4 mt-4 h-40'>
                {tarefasLista.find(item => item.dia === select)?.tarefas.map((atividade) => (
                    <View className='bg-azul3 w-full h-10 rounded-padrao flex-row items-center justify-between px-3' key={atividade.id}>
                        <View className='flex-row items-center gap-2 '>
                            <MaterialCommunityIcons name='circle' size={16} color={colors.azul} />
                            <Text className='font-inter-b color-texto'>{atividade.titulo} </Text>
                        </View>
                        <Text className='font-inter color-texto2'>{atividade.prazo}</Text>
                    </View>
                ))}

            </View>
            <Text className='text-right font-inter-b color-texto mt-3'>Ver tudo</Text>

        </View>
    )
}
