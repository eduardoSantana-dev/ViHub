import { View, Text, Pressable, ScrollView, TouchableOpacity, TextInput, Image, FlatList } from 'react-native'
import React, { use } from 'react'
import { useState, useEffect } from 'react';
import { Redirect, router } from 'expo-router';
import database from '@database';
import Projetos from '@models/projetos';
export default function ProjetoCard({ header }: Props,) {
    const [projetos, setProjetos] = useState<Projetos[]>([]);

   
    useEffect(() => {
        const subscription = database
      .get<Projetos>('projetos')
      .query()
      .observe()
      .subscribe(setProjetos);
    return () => subscription.unsubscribe();
    }, []);
    

    function verProjeto(id: string) {
        router.push(`/projeto/projeto?idAtividade=${id}`)
    }
    return (

        <FlatList
            data={projetos}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{ paddingBottom: 100}}
            renderItem={({ item: projeto }) => (
                <Pressable className='bg-cards  px-5 py-2 rounded-padrao mt-7 mx-pp ' onPress={() => verProjeto(projeto.id)}>
                    <View className='flex-row justify-between'>
                        <Text className='font-inter-b text-3xl text-texto mt-2'>{projeto.nome}</Text>
                        <Image source={require('@logo/branco.png')} className='w-7 h-7' />
                    </View>
                    <View className='flex-row justify-between mt-3'>
                        <Text className='font-inter-m text-texto2 text-lg'>5 Trefas</Text>
                        <Text className='font-inter-m text-texto2 text-lg'>{projeto.status}</Text>
                    </View>

                </Pressable>
            )}
            ListHeaderComponent={header ? () => <>{header}</> : null}


        />

    )
}
