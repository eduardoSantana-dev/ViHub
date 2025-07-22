import { colors } from '@colors';
import { useState } from 'react';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Button, Modal, Text, TouchableOpacity, View, TextInput, Pressable, StyleSheet } from 'react-native';

export default function EditarProjeto() {
    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState<string | null>(null);
    const options = ['Em planejamento', 'Finalizado', 'Em andamento'];



    return (
        <View>
            <TouchableOpacity onPress={() => setVisible(true)} >
                <MaterialCommunityIcons color={colors.texto} name='pencil' size={25} />
            </TouchableOpacity>
            <Modal visible={visible} transparent animationType="fade">
                <View className='flex-1 items-center justify-center bg-fundoModal '>
                    <View className='w-5/6 px-4 py-4 bg-cards items-center  rounded-padrao '>
                        <View className='flex-row items-center justify-between w-full'>
                            <Text className='text-2xl color-texto font-inter-b'>Editar projeto</Text>
                            <TouchableOpacity onPress={() => setVisible(false)} >
                                <Ionicons name="close" size={27} color={colors.texto} />
                            </TouchableOpacity>
                        </View>
                        <View className='flex-row border border-gray-700 rounded-padrao mt-7  w-full h-14 items-center px-2'>

                            <TextInput className='w-11/12 text-white font-inter-b text-lg'
                                placeholder="Nome"
                                placeholderTextColor={colors.texto2}
                                value='Vihub'
                                maxLength={18}
                            />
                        </View>
                        <Text className='color-texto2 font-inter-b w-full mt-5 text-2xl'>Status</Text>
                        <View className='w-full mt-3'>
                            {options.map((option, index) => (
                                <Pressable
                                    key={index}
                                    className={`flex-row items-center px-4 py-2 w-full rounded-padrao ${selected === option ? 'bg-azul2' : 'bg-cards'
                                        }`}
                                    onPress={() => setSelected(option)}
                                >
                                    <View
                                        className={`w-4 h-4 rounded-full border mr-2 ${selected === option ? 'bg-azul border-azulescuro' : 'border-texto2'
                                            }`}
                                    />
                                    <Text className={` font-inter-b ${selected === option ? 'text-azul' : 'text-texto2'}`}>{option}</Text>
                                </Pressable>
                            ))}
                        </View>
                        <Pressable className='w-4/6 justify-center items-center mt-6 py-1 rounded-padrao bg-azul'>
                            <Text className='font-inter-b text-2xl color-textobotao'>Salvar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 10,
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#151B26',
        borderRadius: 8,
    },
    radioSelected: {
        backgroundColor: '#7747ED',
    },
    circle: {
        width: 18,
        height: 18,
        borderRadius: 9,
        borderWidth: 2,
        borderColor: '#fff',
        marginRight: 8,
    },
    circleSelected: {
        backgroundColor: '#fff',
    },
    text: {
        color: '#fff',
    },
});