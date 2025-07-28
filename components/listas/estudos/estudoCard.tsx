import { irRotaEstudos } from '@routeFunctions';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

export default function EstudoCard({ estudo }: { estudo: estudo }) {
    
    return (
        <Pressable className='bg-cards  px-5 py-2 rounded-padrao mt-7 mx-pp' onPress={() => irRotaEstudos('Materias', estudo.id)} >
            <View className='flex-row justify-between'>
                <Text className='font-inter-b text-3xl text-texto mt-2'>{estudo.nome}</Text>

            </View>
            <View className='flex-row justify-between mt-3'>
                <Text className='font-inter-m text-texto2 text-lg'>5 Materia</Text>
                <Text className='font-inter-m text-texto2 text-lg'>Em estudo</Text>
            </View>

        </Pressable>
    )
}