import { View, Text, Pressable, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native'
import { Link } from 'expo-router'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../../styles/colors';
import '../../styles/global.css'
import React, { useState } from 'react';
import ProjetoCard from '../../components/projetos/projetoCard'
export default function Projetos() {

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
          <Text className='color-texto font-inter-b text-4xl'>Projetos</Text>
          <Ionicons name="add-circle-outline" size={45} color={colors.texto2} />
        </View>
        <View className='flex-row border-2 border-gray-500 rounded-padrao mt-7  h-14 items-center px-2'>
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
          <Pressable className={selecionado == 'planejamento' ? selecionadoClass : naoSelecionadoClass} onPress={() => filtrar('planejamento')}>
            <Text className='text-texto font-inter-b'>Planejamento</Text>
          </Pressable>
          <Pressable className={selecionado == 'andamento' ? selecionadoClass : naoSelecionadoClass} onPress={() => filtrar('andamento')}>
            <Text className='text-texto font-inter-b'>Em andamento</Text>
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
        <ProjetoCard header={<Header/>}/>
      </SafeAreaView>
  )
}
