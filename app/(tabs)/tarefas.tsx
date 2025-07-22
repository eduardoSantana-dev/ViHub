import { Ionicons } from '@expo/vector-icons';
import TarefaLista from '@listas/tarefas/tarefasLista';
import React, { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../styles/colors';
import CriarTarefa from '@modais/tarefa/novaTarefaModal'
import '../../styles/global.css';

export default function Tarefas() {

  const [selecionado, setSelecionado] = useState('');
  const selecionadoClass = 'bg-select  px-5  justify-center items-center rounded-padrao'
  const naoSelecionadoClass = 'bg-cards px-5 justify-center items-center rounded-padrao'
  function filtrar(filtro: string) {
    setSelecionado(filtro)
  }
  const Header = () => (
    
     <>
      <View className='px-8'>
        <View className='flex-row justify-between items-center'>
          <Text className='color-texto font-inter-b text-4xl'>Tarefas</Text>
          <CriarTarefa/>
        </View>
        
      </View>
      <View className="mt-5">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 5, paddingHorizontal: 10, height: 32 }}
        >
          <Pressable className={selecionado == 'todos' ? selecionadoClass : naoSelecionadoClass} style={{ marginLeft: 15 }} onPress={() => filtrar('todos')}>
            <Text className='text-texto font-inter-b'>Todos</Text>
          </Pressable>
          <Pressable className={selecionado == 'hoje' ? selecionadoClass : naoSelecionadoClass} onPress={() => filtrar('hoje')}>
            <Text className='text-texto font-inter-b'>Para hoje</Text>
          </Pressable>
          <Pressable className={selecionado == 'atrasados' ? selecionadoClass : naoSelecionadoClass} onPress={() => filtrar('atrasados')}>
            <Text className='text-texto font-inter-b'>Atrasados</Text>
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
     <TarefaLista header={<Header/>}/>
      </SafeAreaView>
  )
}
