import ListaMaterias from '@listas/materias/listaMaterias';
import ListaMateriais from '@listas/materias/materiais/listaMateriais';
import MateriaScreen from '@listas/materias/materiaScreen';
import Tarefalista from '@listas/tarefas/tarefasLista';
import EditarEstudo from '@modais/estudos/editarEstudoModal';
import EditarMateria from '@modais/estudos/materia/editarMateriaModal';
import CriarIdeia from '@modais/projeto/ideias/novaIdeiaModal';
import Listaduvidas from '@listas/materias/duvidas/listaduvidas';

import AnotacaoScreen from '@listas/materias/anotacoes/anotacaoScreen';
import { colors } from '@colors';
import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import '../../styles/global.css';
import { TextInput } from 'react-native-gesture-handler';
export default function ListaBase() {
  const { idAtividade, tela } = useLocalSearchParams();
  const [selecionado, setSelecionado] = useState('');
  const selecionadoClass = 'bg-select  px-5  justify-center items-center rounded-padrao'
  const naoSelecionadoClass = 'bg-cards px-5 justify-center items-center rounded-padrao'
  function filtrar(filtro: string) {
    setSelecionado(filtro)
  }
  const Header = () => (

    <>

      <View className='px-pp '>
        {tela != 'Anotações' ? (
          <View className='flex-row justify-between items-center'>
            <View >
              <Text className='color-texto font-inter-b text-4xl'>{tela}
                {tela == 'Materia' && (
                  <EditarMateria />
                )}</Text>
              {tela == 'Materia' ? (
                <Text className='color-texto2 font-inter-m text-xl mt-2'>Estudos Para o ENEM </Text>
              ) :
                <>
                  <Text className='color-texto2 font-inter-m text-xl mt-2'>Matematica</Text>
                  <Text className='color-texto2 font-inter-m text-sm'>Estudos Para o ENEM</Text>
                </>
              }
            </View>
            {tela == 'Materias' && (
              <View className='flex-row items-center gap-3'>
                <EditarEstudo />
                <CriarIdeia />
              </View>
            )}

          </View>
        ) :
          <View>
            <Text className='color-texto font-inter-b text-3xl '>Matematica</Text>
            <Text className='color-texto font-inter-b text-2xl '>Estudos para o ENEM</Text>
      
          </View>
        }

      </View>
      {tela != 'Materias' && tela != 'Materia' && tela != 'Anotações' && (
        <View className="mt-5">
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 5, paddingHorizontal: 10, height: 32 }}
          >
            {tela == 'Materiais' || tela == 'Duvidas' ? (
              <>
                <Pressable className={selecionado == 'recente' ? selecionadoClass : naoSelecionadoClass} style={{ marginLeft: 10 }} onPress={() => filtrar('recente')}>
                  <Text className='text-texto font-inter-b'>Mais Recente</Text>
                </Pressable>
                <Pressable className={selecionado == 'antigas' ? selecionadoClass : naoSelecionadoClass} onPress={() => filtrar('antigas')}>
                  <Text className='text-texto font-inter-b'>Mais antigas</Text>
                </Pressable>
              </>
            ) :
              <>
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
              </>
            }

          </ScrollView>
        </View>
      )}


    </>


  )
  return (
    <SafeAreaView className='flex-1 bg-fundo '>
      {tela == 'Tarefas' && (
        <Tarefalista header={<Header />} />
      )}
      {tela == 'Materias' && (
        <ListaMaterias header={<Header />} />
      )}
      {tela == 'Materia' && (
        <MateriaScreen header={<Header />} />
      )}
      {tela == 'Materiais' && (
        <ListaMateriais header={<Header />} />
      )}
      {tela == 'Anotações' && (
        <AnotacaoScreen header={<Header />} />
      )}
        {tela == 'Duvidas' && (
        <Listaduvidas header={<Header />} />
      )}
    </SafeAreaView>
  )
}