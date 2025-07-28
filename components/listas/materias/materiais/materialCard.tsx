import { irRotaEstudos } from '@routeFunctions';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
export default function MaterialCard({ material }: { material: material }) {

    return (
        <Pressable className='bg-cards  px-4 py-2 pb-3 rounded-padrao mt-7 mx-pp' onPress={() => irRotaEstudos('Material', material.id)}>
            <View className='flex-row justify-between'>
                <Text className='font-inter-b text-xl text-texto mt-2'>{material.nome} </Text>
            </View>
            <View className='flex-row justify-between mt-1'>
                <Text className='font-inter-m text-lg text-texto2 '>5 links</Text>
                <Text className='font-inter-m text-lg text-texto2 '>{material.data}</Text>
            </View>


        </Pressable>
    )
}