import { View, Text, Pressable, ScrollView, SafeAreaView, Image } from 'react-native'
import { Link, router } from 'expo-router'
import dayjs from 'dayjs';
import CalendarioHome from '@cards/calendarioHome'
import ProjetoCard from '@listas/projetos/projetoCard';
export default function Home() {

  const hoje = dayjs();
  const dias = [];
  for (let i = -3; i <= 3; i++) {
    dias.push(hoje.add(i, 'day').format('dddd - DD/MM/YYYY'));
  }
  function verProjeto(id: number) {
    router.push(`/projeto/projeto?idAtividade=${id}`)
  }
  return (
    <SafeAreaView className="flex-1 bg-fundo px-pp">
      <View className='flex-row justify-between items-center  mt-14'>
        <View className='gap-4 flex-row'>
          
          <Pressable onPress={()=> router.push('/formularios/login')} className='justify-center'>
            <Text className='font-inter-extra text-3xl color-texto'>Olá Eduardo</Text>
            <Text className='font-inter text-sm color-azul'>10 avisos para você</Text>
          </Pressable>
        </View>
        <View className=''>
          <Image source={require('@logo/azul.png')} className='w-12 h-12' />
        </View>
      </View>
      <CalendarioHome />
      <Text className='mt-5 ml-1 font-inter-b color-texto text-2xl'>Sua Principais <Text className='color-azul'>atividades</Text></Text>
      {/* cards de projeto temporarios depois será retirado para atividades principais do usuario */}
      <View>
        <Pressable className='bg-cards  px-5 py-2 rounded-padrao mt-7 ' onPress={() => verProjeto(2)}>
        <View className='flex-row justify-between'>
          <Text className='font-inter-b text-3xl text-texto mt-2'>Vihub</Text>
          <Image source={require('@logo/branco.png')} className='w-7 h-7' />
        </View>
        <View className='flex-row justify-between mt-3'>
          <Text className='font-inter-m text-texto2 text-lg'>6 Tarefas</Text>
          <Text className='font-inter-m text-texto2 text-lg'>Em andamento</Text>
        </View>

      </Pressable>
      <Pressable className='bg-cards  px-5 py-2 rounded-padrao mt-7 ' onPress={() => verProjeto(2)}>
        <View className='flex-row justify-between'>
          <Text className='font-inter-b text-3xl text-texto mt-2'>ZapZap3</Text>
          <Image source={require('@logo/branco.png')} className='w-7 h-7' />
        </View>
        <View className='flex-row justify-between mt-3'>
          <Text className='font-inter-m text-texto2 text-lg'>7 tarefas</Text>
          <Text className='font-inter-m text-texto2 text-lg'>Finalizado</Text>
        </View>

      </Pressable>
      </View>
    </SafeAreaView>
  )
}