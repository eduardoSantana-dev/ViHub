import ListaIdeias from '@listas/ideias/listaIdeias';
import ListaInspiracoes from '@listas/inspiracao/listaInspiracaoes';
import Tarefalista from '@listas/tarefas/tarefasLista';
import EditarEstudo from '@modais/estudos/editarEstudoModal';
import CriarTarefa from '@modais/tarefa/novaTarefaModal';
import CriarIdeia from '@modais/projeto/ideias/novaIdeiaModal';
import CriarInspiracao from '@modais/projeto/inspiracao/novaInspiracaoModal';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import '../../styles/global.css';
import { set } from 'date-fns';
import { el } from 'date-fns/locale';
export default function ListaBase() {
  const { idProjeto, tela,nomeprojeto } = useLocalSearchParams();
  const [selecionado, setSelecionado] = useState('');
  const selecionadoClass = 'bg-select  px-5  justify-center items-center rounded-padrao'
  const naoSelecionadoClass = 'bg-cards px-5 justify-center items-center rounded-padrao'
  function filtrar(filtro: string) {
    setSelecionado(filtro)
  }

  useEffect(() => {
      if (tela == 'Tarefas') {
    filtrar('todos');
  }else {
    filtrar('recente');
  }
  },[])
    
  
  const Header = () => (
    
    <>

      <View className='px-pp '>
        <View className='flex-row justify-between items-center'>
          <View>
            <Text className='color-texto font-inter-b text-4xl'>{tela}</Text>
            <Text className='color-texto2 font-inter-m  text-1xl'>{nomeprojeto}</Text>
          </View>
          {tela == 'Inspirações' && (
            <CriarInspiracao />
          )}
          {tela == 'Ideias' && (
            <CriarIdeia idProjeto={String(idProjeto)}/>
          )}
          {tela == 'Tarefas' && (
            <CriarTarefa  tipo='projeto' idAtividade={String(idProjeto)}/>
          )}
        </View>

      </View>
      {tela != 'Materias' && (
        <View className="mt-5">
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 5, paddingHorizontal: 10, height: 32 }}
          >
            {tela == 'Ideias' || tela == 'Inspirações' ? (
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
        <Tarefalista header={<Header />}  selecionado={selecionado} id_atividade={String(idProjeto)}/>
      )}
      {tela == 'Ideias' && (
        <ListaIdeias header={<Header />} selecionado={selecionado} idProjeto={String(idProjeto)}  />
      )}
      {tela == 'Inspirações' && (
        <ListaInspiracoes header={<Header />} />
      )}
    


    </SafeAreaView>
  )
}