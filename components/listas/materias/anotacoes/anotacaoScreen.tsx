import { View, Text, TouchableOpacity,Pressable,TextInput } from 'react-native';
import { useState } from 'react';
import {  ScrollView } from 'react-native-gesture-handler';
import { Header } from 'react-native/Libraries/NewAppScreen';
import * as Progress from 'react-native-progress';
import { colors } from '@colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { irRotaEstudos } from '@routeFunctions';
export default function AnotacaoScreen({ header }: Props) {
     const [anotacao, setAnotacao] = useState('')
    return (
        <ScrollView className='flex-1 '>
            <>{header}</>
            <View className='px-pp'>
                 <Text className='color-texto2 font-inter-m text-lg mt-2'>12 de julho 9:13    {anotacao.length} caracteres</Text>
                <TextInput className='font-inter-m text-lg color-texto'
                placeholder='Comece a escrever'
                 placeholderTextColor={colors.texto2}
                 multiline
                
                  onChangeText={texto => setAnotacao(texto)}
                />
            </View>
        </ScrollView>
    )
}
   