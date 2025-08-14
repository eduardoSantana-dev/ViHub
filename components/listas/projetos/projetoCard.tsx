import { View, Text, Pressable, ScrollView, TouchableOpacity, TextInput, Image, FlatList } from 'react-native'
import React, { use } from 'react'
import { useState, useEffect } from 'react';
import { Redirect, router } from 'expo-router';
import database from '@database';
import Projetos from '@modelsprojeto';
import { Q } from '@nozbe/watermelondb'; 
import { buscarIdUsuario } from '@routeFunctions*';
export default function ListaIdeias({ header, selecionado, pesquisa }: ListaProps) {
    const [projetos, setProjetos] = useState<Projetos[]>([]);


    useEffect(() => {
       async function fetchProjetos() {
         const idUser =  await buscarIdUsuario();
        var queryCondition = Q.and( Q.where('status', selecionado),Q.where('id_usuario', idUser!));
        if (selecionado == 'todos') {
           queryCondition = Q.and(Q.where('id_usuario', idUser!));
        }
                
        if (selecionado != '') {
            
            const subscription = database
            .get<Projetos>('projeto')
            .query(queryCondition)
            .observe()
            .subscribe(setProjetos);
            return () => subscription.unsubscribe();
            
        }
    }
        fetchProjetos();
    }, [selecionado]);


    function verProjeto(id: string) {
        router.push(`/projeto/projeto?idAtividade=${id}`)
    }
    return (

        <FlatList
            data={projetos}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{ paddingBottom: 100 }}
            keyboardShouldPersistTaps="handled"
            renderItem={({ item: projeto }) => (
                <Pressable className='bg-cards  px-5 py-2 rounded-padrao mt-7 mx-pp ' onPress={() => verProjeto(projeto.id)}>
                    <View className='flex-row justify-between'>
                        <Text className='font-inter-b text-3xl text-texto mt-2'>{projeto.name}</Text>
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
