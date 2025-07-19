import { View, Text, Pressable, ScrollView, TouchableOpacity, Image } from 'react-native'
import { Link, router, useLocalSearchParams } from 'expo-router'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../../styles/colors';
import HeaderBack from '@/components/globais/headerBack';
export default function HomeScreen() {
  const { id } = useLocalSearchParams();
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
  }
]
  return (
    <SafeAreaView className='bg-fundo flex-1'>
      <HeaderBack />
      <ScrollView className='flex-1 px-pp'>
        <View className='flex-row -600 mt-6 gap-2'>
          <View className='w-20 h-20 '>
            <Image source={require('../../assets/images/logoBranca.svg')} className='w-full h-full' />
          </View>
          <View className='justify-center mt-4'>
            <View className='flex-row items-center gap-4'>
              <Text className='font-inter-b text-4xl color-texto'>
                ViHub
              </Text>
              <MaterialCommunityIcons color={colors.texto} name='pencil' size={25} />
            </View>
            <Text className='font-inter-b text-xl color-texto2'>
              Em andamento
            </Text>
          </View>
        </View>
        {cards.map((card)=>(
          <Pressable className='w-full bg-cards  mt-10 rounded-padrao flex-row p-4 pb-6 gap-5' key={card.titulo}>
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
      </ScrollView>
    </SafeAreaView>
  )
}