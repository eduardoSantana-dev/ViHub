import { View, Text, Pressable, ScrollView, TouchableOpacity, TextInput, Image, FlatList } from 'react-native'
import React from 'react'
import { Redirect, router } from 'expo-router';

export default function ProjetoCard({ header }: Props) {
   
    const projetos = [
        {id:1,nome:'Vihub',fase:0},
        {id:2,nome:'Vicuna',fase:0},
        {id:3,nome:'TCC',fase:0}
        

    ];
    function verProjeto(id:number){
       router.push(`/projeto/projeto?idAtividade=${id}`)
    }
    return (
        
            <FlatList
                data={projetos}
                keyExtractor={(item, index) => index.toString()}
                
                renderItem={({ item:projeto }) => (
                    <Pressable className='bg-cards  px-5 py-2 rounded-padrao mt-7 mx-pp ' onPress={()=> verProjeto(projeto.id)}>
                        <View className='flex-row justify-between'>
                            <Text className='font-inter-b text-3xl text-texto mt-2'>{projeto.nome}</Text>
                            <Image source={require('@logo/branco.svg')} className='w-7 h-7' />
                        </View>
                        <View className='flex-row justify-between mt-3'>
                            <Text className='font-inter-m text-texto2 text-lg'>5 Trefas</Text>
                            <Text className='font-inter-m text-texto2 text-lg'>Em andamento</Text>
                        </View>

                    </Pressable>
                )}
                ListHeaderComponent={header ? () => <>{header}</> : null}


            />
        
    )
}
