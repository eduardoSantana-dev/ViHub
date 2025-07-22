import { colors } from '@/styles/colors';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import * as Progress from 'react-native-progress';
export default function MateriaCard({ materia }: { materia: materia }) {
    const Completas = (materia.completadas / materia.totalTarefas)
    const porcentagemCompletas = (materia.completadas / materia.totalTarefas) * 100
    const porcentagem = parseFloat(porcentagemCompletas.toFixed(1)).toString();
    return (
        <Pressable className='bg-cards  px-4 py-2 pb-3 rounded-padrao mt-7 mx-pp '>
            <View className='flex-row justify-between'>
                <Text className='font-inter-b text-3xl text-texto mt-2'>{materia.nome} </Text>

            </View>
            <View className='flex-row justify-between mt-3'>
                <Text className='font-inter-m text-texto2 text-lg'>{materia.totalTarefas} Trefas</Text>
                <Text className='font-inter-m text-texto2 text-lg'>{porcentagem}%</Text>
            </View>
            <View className='mt-1'>
                {Completas == 1 ?(
                    <Progress.Bar progress={Completas} width={null} height={13} color={colors.verde} unfilledColor={colors.texto2} borderWidth={0} borderRadius={5} />
                ):
                 <Progress.Bar progress={Completas} width={null} height={13} color={colors.azul} unfilledColor={colors.texto2} borderWidth={0} borderRadius={5} />
                }
            </View>

        </Pressable>
    )
}