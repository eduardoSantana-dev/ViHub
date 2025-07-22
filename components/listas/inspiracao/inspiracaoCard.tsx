import { colors } from '@/styles/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, Text, View } from 'react-native';

export default function InspiracaoCard({ Inspiracoes }: { Inspiracoes: Inspiracoes }) {
    return (
        <View className='bg-cards  px-5 py-2 pr-3 rounded-padrao  flex-row  justify-between items-center'>
            <View className='justify-between w-full'>
                <Text className='font-inter  text-texto mt-2'>{Inspiracoes.nome}</Text>
                <View className='flex-row mt-5'>
                    <View className='w-1/2 h-40 flex-row justify-between'>
                        <Image source={require('@/assets/images/teste.jpeg')} className='w-img h-full rounded-padrao'/>

                    </View>
                    <View>
                        <View className='flex-row gap-3'>
                            <MaterialCommunityIcons name='link' size={17} color={colors.texto2}/>
                            <Text className='color-texto2 line-clamp-1 truncate w-40 text-sm '>https://www.google.com/bla/bla/bla</Text>
                        </View>
                        <View className='flex-row gap-3'>
                            <MaterialCommunityIcons name='link' size={17} color={colors.texto2}/>
                            <Text className='color-texto2 line-clamp-1 truncate w-40 text-sm '>https://www.google.com/bla/bla/bla</Text>
                        </View>
                        <View className='flex-row gap-3'>
                            <MaterialCommunityIcons name='link' size={17} color={colors.texto2}/>
                            <Text className='color-texto2 line-clamp-1 truncate w-40 text-sm '>https://www.google.com/bla/bla/bla</Text>
                        </View>
                        
                    </View>
                </View>
                <Text className='font-inter-m text-texto2 text-lg mt-2'>{Inspiracoes.data}</Text>
            </View>

        </View>
    )
}