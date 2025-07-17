import { View, Text, Pressable, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native'
import React from 'react'
export default function ProjetoCard() {
    return (
        <View className='bg-cards w-full px-5 py-2 rounded-padrao'>
            <View className='flex-row justify-between'>
                <Text className='font-inter-b text-3xl text-texto mt-2'>Vihub</Text>
                <Image source={require('../assets/images/logoBranca.svg')} className='w-7 h-7' />
            </View>
            <View className='flex-row justify-between mt-3'>
                <Text className='font-inter-m text-texto2 text-lg'>5 Trefas</Text>
                <Text className='font-inter-m text-texto2 text-lg'>Em andamento</Text>
            </View>
        </View>
    )
}