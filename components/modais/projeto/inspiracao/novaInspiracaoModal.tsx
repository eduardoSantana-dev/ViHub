import { colors } from '@colors';
import { Ionicons } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import { Modal, Pressable, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

interface links {
    'id': number
}
interface imagem {
    'uri': string
}
export default function CriarInspiracao() {
    const [visible, setVisible] = useState(false);
    const [linksCount, setLinkCount] = useState<links[]>([{ id: 1 }])
    const [linkAtual, setLinkAtual] = useState(1)
    const [imagens, setImagens] = useState<imagem[]>([]);

    function aumentarLink() {
        setLinkAtual(linkAtual + 1)
        setLinkCount([...linksCount, { id: linkAtual }])
    }

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images',],
            allowsEditing: false,
            aspect: [1, 1],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImagens([...imagens, { uri: result.assets[0].uri }]);
        }
    };
    return (
        <View>
            <TouchableOpacity onPress={() => setVisible(true)}>
                <Ionicons name="add-circle-outline" size={45} color={colors.texto2} />
            </TouchableOpacity>

            <Modal visible={visible} transparent animationType="fade">
                <View className='flex-1 items-center justify-center bg-fundoModal'>
                    <View className='w-5/6 px-4 py-4 bg-cards items-center rounded-padrao'>
                        <View className='flex-row items-center justify-between w-full'>
                            <Text className='text-2xl color-texto font-inter-b'>Nova Inspiração</Text>
                            <TouchableOpacity onPress={() => setVisible(false)}>
                                <Ionicons name="close" size={27} color={colors.texto} />
                            </TouchableOpacity>
                        </View>

                        <View className='flex-row border border-gray-700 rounded-padrao mt-7 w-full h-12 items-center px-2'>
                            <TextInput
                                className="w-11/12 h-full text-white font-inter-b"
                                style={{ textAlignVertical: 'top' }}
                                placeholder="Titulo"
                                maxLength={30}
                                placeholderTextColor={colors.texto2}
                            />
                        </View>
                        <Text className='color-texto2 font-inter-b w-full mt-5 text-2xl'>Links</Text>
                        {linksCount.map((linksCount, index) => (
                            <View key={index} className='flex-row border border-gray-700 rounded-padrao mt-4 w-full h-12 items-center px-2'>
                                <TextInput
                                    className="w-11/12 h-full text-white font-inter-b"
                                    style={{ textAlignVertical: 'top' }}
                                    placeholder="Url"

                                    placeholderTextColor={colors.texto2}
                                />
                            </View>
                        ))}
                        <View className='w-full mt-4'>
                            {linksCount.length < 4 &&(
                                <TouchableOpacity onPress={() => aumentarLink()}>
                                <Ionicons name="add-circle-outline" size={45} color={colors.texto2} />
                            </TouchableOpacity>
                            )}
                        </View>
                        <Text className='color-texto2 font-inter-b w-full mt-5 text-2xl'>Imagens</Text>
                        <View className='flex-row  w-full gap-3 items-center'>
                            {imagens.map((imagens, index) => (
                                <View key={index} className='flex-row bg-gray-400  rounded-lg mt-4 w-16 h-16 items-center overflow-hidden '>
                                    <Image source={{ uri: imagens.uri }} className='w-full h-full object-cover ' />
                                </View>
                            ))}
                            <View className='mt-4 '>
                                {imagens.length < 4 &&(
                                <TouchableOpacity onPress={() => pickImage()}>
                                    <Ionicons name="add-circle-outline" size={45} color={colors.texto2} />
                                </TouchableOpacity>
                                )}
                            </View>
                        </View>
                        <Pressable className='w-4/6 justify-center items-center mt-7 py-1 rounded-padrao bg-azul'>
                            <Text className='font-inter-b text-2xl color-textobotao'>Criar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>


        </View>
    );
}
