import { View, Text, Pressable, ScrollView, TouchableOpacity, TextInput, Image, FlatList } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '@/styles/colors';
interface Props {
    header?: React.ReactNode;
}
export default function TarefasCard({ header }: Props) {

    const projetos = [
        { id: 1, nome: 'Testa api com laravel e no banco com tudo incluso ,teste no app e no web para ', fase: 'finalizado' },
        { id: 2, nome: 'Vicuna', fase: 'em andamento' },
        { id: 3, nome: 'TCC', fase: 'atrasado' }

    ];

    return (

        <FlatList
            data={projetos}
            keyExtractor={(item, index) => index.toString()}

            renderItem={({ item: tarefa }) => (
                <View className='bg-cards  px-5 py-2 rounded-padrao mt-7 mx-6 flex-row  justify-between items-center'>
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
            )}
            ListHeaderComponent={header}


        />

    )
}
