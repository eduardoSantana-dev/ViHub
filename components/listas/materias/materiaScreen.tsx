import { View, Text, TouchableOpacity,Pressable } from 'react-native';
import {  ScrollView } from 'react-native-gesture-handler';
import { Header } from 'react-native/Libraries/NewAppScreen';
import * as Progress from 'react-native-progress';
import { colors } from '@colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { irRotaEstudos } from '@routeFunctions';
export default function MateriaScreen({ header }: Props) {
    const materia = { completadas: 20, totalTarefas: 34 }
    const Completas = (materia.completadas / materia.totalTarefas)
    const porcentagemCompletas = (materia.completadas / materia.totalTarefas) * 100
    const porcentagem = parseFloat(porcentagemCompletas.toFixed(1)).toString();
    const cards = [
        { id: 1, titulo: 'Tarefas', icon: 'clipboard-check-multiple-outline' }, 
        { id: 2, titulo: 'Materiais', icon: 'file-outline' }, 
        { id: 3, titulo: 'Anotações', icon: 'application-edit-outline' }, 
        { id: 4, titulo: 'Duvidas', icon: 'progress-question' },]
    return (
        <ScrollView className='flex-1 '>
            <>{header}</>
            <View className='px-pp mt-3'>
                <Text className='color-texto2 font-inter-b text-right w-full mb-1'>{porcentagem}%</Text>
                {Completas == 1 ? (
                    <Progress.Bar progress={Completas} width={null} height={13} color={colors.verde} unfilledColor={colors.texto2} borderWidth={0} borderRadius={5} />
                ) :
                    <Progress.Bar progress={Completas} width={null} height={13} color={colors.azul} unfilledColor={colors.texto2} borderWidth={0} borderRadius={5} />
                }
                <View className='mt-12 flex-row justify-between flex-wrap gap-y-10'>

                    {cards.map((card => (
                        <Pressable className='bg-cards rounded-padrao justify-center items-center w-48 h-48' key={card.id} onPress={()=>irRotaEstudos(card.titulo ,5)}>
                            <MaterialCommunityIcons name={card.icon as any} color={colors.azul} size={100} />
                            <Text className='text-2xl font-inter-b color-texto'>{card.titulo}</Text>
                        </Pressable>
                    )))}
                </View>
            </View>
        </ScrollView>
    )
}