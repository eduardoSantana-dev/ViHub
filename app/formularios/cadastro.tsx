import { colors } from "@colors";
import { Text,View,Image,TextInput,Pressable,TouchableOpacity, } from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Login(){
        const [mostrarSenha,setMostrarSenha] = useState(true)
    
return(
    <SafeAreaView className="flex-1 pb-6">
        <View className="w-full items-center flex-1 justify-center">
            <Image source={require("@logo/completa.png")} className="w-60 h-60"/>
            <View className="px-11 w-full  mt-8">
                <TextInput 
                className="bg-cards rounded-padrao h-16 px-5 font-inter-b text mb-8 color-texto"
                placeholder="Nome"
                placeholderTextColor={colors.texto2}
                />
                <TextInput 
                className="bg-cards rounded-padrao h-16 px-5 font-inter-b text mb-8 color-texto"
                placeholder="Email"
                placeholderTextColor={colors.texto2}
                />
                 <View className="bg-cards rounded-padrao flex-row h-16 w-full items-center justify-between px-5">
                    <TextInput 
                className="w-11/12  font-inter-b  color-texto"
                placeholder="Senha"
                secureTextEntry={mostrarSenha}
                autoComplete="password"
                placeholderTextColor={colors.texto2}
                />
                {mostrarSenha ?(
                    <Pressable onPress={()=>setMostrarSenha(false)}><MaterialCommunityIcons name="eye-off-outline" color={colors.texto2} size={22}/></Pressable>
                ):
                <Pressable onPress={()=>setMostrarSenha(true)}><MaterialCommunityIcons name="eye-outline" color={colors.texto2} size={22}/></Pressable>
                }
                  </View>
               <Pressable className='w-full justify-center items-center mt-8 h-16 rounded-padrao bg-azul'>
                            <Text className='font-inter-b text-3xl color-textobotao'>Cadastrar</Text>
                        </Pressable>                       
            </View>
        </View>
             <TouchableOpacity><Text className="color-azul text-center mt text-xl font-inter-b" onPress={()=> router.push("/formularios/login")}>Já tenho conta</Text></TouchableOpacity>
    </SafeAreaView>
)
}