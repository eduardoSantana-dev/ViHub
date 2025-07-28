import { colors } from '@colors';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Modal, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';
export default function CriarEstudo() {
    const [visible, setVisible] = useState(false);

    return (
        <View>
            <TouchableOpacity onPress={() => setVisible(true)} >
                <Ionicons name="add-circle-outline" size={45} color={colors.texto2} />
            </TouchableOpacity>
            <Modal visible={visible} transparent animationType="fade">
                <View className='flex-1 items-center justify-center bg-fundoModal '>
                    <View className='w-5/6 px-4 py-4 bg-cards items-center  rounded-padrao '>
                        <View className='flex-row items-center justify-between w-full'>
                            <Text className='text-2xl color-texto font-inter-b'>Novo Estudo</Text>
                            <TouchableOpacity onPress={() => setVisible(false)} >
                                <Ionicons name="close" size={27} color={colors.texto} />
                            </TouchableOpacity>
                        </View>
                        <View className='flex-row border border-gray-700 rounded-padrao mt-7  w-full h-14 items-center px-2'>

                            <TextInput className='w-11/12 text-white font-inter-b'
                                placeholder="Nome"
                                placeholderTextColor={colors.texto2}
                                maxLength={18}
                            />
                        </View>
                        <Pressable className='w-4/6 justify-center items-center mt-6 py-1 rounded-padrao bg-azul'>
                            <Text className='font-inter-b text-2xl color-textobotao'>Criar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
}
