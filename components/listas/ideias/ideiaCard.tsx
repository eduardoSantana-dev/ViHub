import { View, Text, Pressable, ScrollView, TouchableOpacity, TextInput, Image, FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '@/styles/colors';
import { FormatarData } from '@routeFunctions';

export default function IdeiaCard({ ideia }: { ideia: Ideia }) {
    return(
        <View className='bg-cards  px-5 py-2 pr-3 rounded-padrao  flex-row  justify-between items-center'>
                                    <View className='justify-between w-full'>
                                        <Text className='font-inter  text-texto mt-2'>{ideia.descricao}</Text>
                                        <Text className='font-inter-m text-texto2 text-lg mt-2'>{FormatarData(ideia.criado_em)}</Text>
                                    </View>
            
                                </View>
    )
}