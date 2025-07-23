import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../styles/colors';
import EditarProjeto from '@modais/projeto//editarProjetoModal'
export default function HomeScreen() {
  const { idAtividade } = useLocalSearchParams();
  const atividade ='projeto'
  const dataTeste = [{id:1,desc:'Prototipar projeto no figma'},{id:2,desc:'Prototipar projeto no figma2'},{id:3,desc:'Prototipar projeto no figma2'}]
  
  const cards = [
    {
    titulo: 'Tarefas', icon: 'clipboard-text-multiple-outline' ,data:dataTeste
  },
  {
    titulo: 'Ideias', icon: 'lightbulb',data:dataTeste
  },
  {
    titulo: 'Inspirações', icon: 'star-box-multiple' ,data:[]
  },
  //  {
  //   titulo: 'Materias', icon: 'star-box-multiple' ,data:[]
  // }
]
  function irRota(tela: string) {
    
  router.push({
  pathname: "/template/listaBase",
  params: { idAtividade ,tela,atividade},
});
}
  return (
    <SafeAreaView className='bg-fundo flex-1'>
      <ScrollView className='flex-1 px-pp'>
        <View className='flex-row -600  gap-2'>
          <View className='w-20 h-20 '>
            <Image source={require('@logo/branco.svg')} className='w-full h-full' />
          </View>
          <View className='justify-center mt-4'>
            <View className='flex-row items-center gap-4'>
              <Text className='font-inter-b text-4xl  w-64 flex-wrap color-texto'>
                Vihub
              </Text>
              <EditarProjeto/>
            </View>
            <Text className='font-inter-b text-xl color-texto2'>
              Em andamento
            </Text>
          </View>
        </View>
        {cards.map((card)=>(
          <Pressable className='w-full bg-cards  mt-10 rounded-padrao flex-row p-4 pb-6 gap-5' key={card.titulo} onPress={()=> irRota(card.titulo)}>
          <View className=''>
            <View className='bg-azul2 p-3 rounded-3xl items-center justify-center'>
              <MaterialCommunityIcons name={card.icon as any} size={70} color={colors.azul} />
            </View>
          </View>
          <View className=''>
            <Text className='font-inter-b text-3xl color-texto'>{card.titulo}</Text>
            <View className='mt-2 gap-2'>
            {card.data.map((data)=>(
                <View className='gap-2 flex-row items-center' key={data.id}>
                <MaterialCommunityIcons name={'circle'} size={10} color={colors.texto2} className='opacity-4' />
                <Text className='color-texto'>{data.desc}</Text>
              </View>
            ))}
            </View>
          </View>

        </Pressable>
        ))}
        {/* <View className='items-start mt-10'>
           <Pressable className=' justify-center items-center mt-6 py-1 rounded-padrao'>
                            <MaterialCommunityIcons name='delete' size={35} color={colors.texto2}/>
                        </Pressable>
        </View> */}
      </ScrollView>
    </SafeAreaView>
  )
}