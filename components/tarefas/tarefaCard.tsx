import { View, Text, Pressable, ScrollView, TouchableOpacity, TextInput, Image, FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '@/styles/colors';
interface Tarefa {
  id: number;
  nome: string;
  fase: string;
}
export default function CardTarefa({ tarefa }: { tarefa: Tarefa }) {
    return(
        <View className='bg-cards  px-5 py-2 rounded-padrao  flex-row  justify-between items-center'>
                                    <View className='justify-between w-10/12'>
                                        <Text className='font-inter  text-texto mt-2'>{tarefa.nome}</Text>
                                        <Text className='font-inter-m text-texto2 text-lg mt-2'>{tarefa.fase}</Text>
                                    </View>
                                    <View className='flex-row justify-between'>
                                        {tarefa.fase === 'finalizado' ? (
                                            <Ionicons name='checkmark-circle-outline' size={35} color={colors.verde} />
                                        ) : tarefa.fase === 'em andamento' ? (
                                            <Ionicons name='time-outline' size={35} color={colors.texto2} />
                                        )
                                            : (
                                                <Ionicons name='alert-circle-outline' size={35} color={colors.vermelho} />
                                            )}
                                    </View>
        
                                </View>
    )
}