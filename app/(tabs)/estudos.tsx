import CriarEstudo from '@modais/estudos/novoEstudoModal'
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ListaEstudos from '@listas/estudos/listaEstudos'
import { colors } from '../../styles/colors';
import '../../styles/global.css';
export default function Estudos() {

  const [selecionado, setSelecionado] = useState('');
  const selecionadoClass = 'bg-select  px-5  justify-center items-center rounded-padrao'
  const naoSelecionadoClass = 'bg-cards px-5 justify-center items-center rounded-padrao'
  function filtrar(filtro: string) {
    setSelecionado(filtro)
  }
  const Header = () => (
    
     <>
      <View className='px-pp'>
        <View className='flex-row justify-between items-center'>
          <Text className='color-texto font-inter-b text-4xl'>Estudos</Text>
          <CriarEstudo/>
        </View>
        <View className='flex-row border border-gray-700
         rounded-padrao mt-7  h-14 items-center px-2'>
          <Ionicons name="search-outline" size={30} color={colors.texto2} />
          <TextInput className='w-11/12 text-white font-inter-b'
            placeholder="Pesquisa"
            placeholderTextColor={colors.texto2}

          />
        </View>
      </View>
      <View className="mt-5">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 5, paddingHorizontal: 10, height: 32 }}
        >
          <Pressable className={selecionado == 'todos' ? selecionadoClass : naoSelecionadoClass} style={{ marginLeft: 10 }} onPress={() => filtrar('todos')}>
            <Text className='text-texto font-inter-b'>Todos</Text>
          </Pressable>
          <Pressable className={selecionado == 'em estudo' ? selecionadoClass : naoSelecionadoClass} onPress={() => filtrar('em estudo')}>
            <Text className='text-texto font-inter-b'>Em estudo</Text>
          </Pressable>
          <Pressable className={selecionado == 'finalizado' ? selecionadoClass : naoSelecionadoClass} onPress={() => filtrar('finalizado')}>
            <Text className='text-texto font-inter-b'>Finalizado</Text>
          </Pressable>
          
        </ScrollView>
      </View>
     </>


  )
  return (
    <SafeAreaView className='flex-1 bg-fundo  pt-7'>
        <ListaEstudos header={<Header/> }/>
      </SafeAreaView>
  )
}
