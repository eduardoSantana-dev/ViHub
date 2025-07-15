import { View, Text, Pressable, ScrollView } from 'react-native'
import { Link } from 'expo-router'

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-fundo p-6">
      {/* Cabeçalho */}
      <View className="mb-8">
        <Text className="text-texto text-3xl font-inter-extra">Bem-vindo2</Text>
        <Text className="text-azul-claro text-lg font-inter-m">
          Ao seu app ViHub
        </Text>
      </View>

      {/* Conteúdo principal */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="bg-cards rounded-xl p-6 mb-4">
          <Text className="text-texto text-xl font-inter-b mb-2">
            Cards Destacados
          </Text>
          <Text className="text-verde font-inter">
            Conteúdo especial com sua cor verde personalizada
          </Text>
        </View>

        <View className="bg-roxo rounded-xl p-4 mb-4">
          <Text className="text-white font-inter-b">
            Seção roxa com texto branco
          </Text>
        </View>

        {/* Botões com diferentes pesos de fonte */}
        <Link href="/details" asChild>
          <Pressable className="bg-azul-escuro p-4 rounded-lg mb-4">
            <Text className="text-white text-center font-inter-b">
              Ver Detalhes
            </Text>
          </Pressable>
        </Link>

        <Pressable className="border border-vermelho p-4 rounded-lg">
          <Text className="text-vermelho text-center font-inter-m">
            Ação Secundária
          </Text>
        </Pressable>
      </ScrollView>

      {/* Rodapé */}
      <View className="mt-auto pt-4 border-t border-cards">
        <Text className="text-texto/50 font-inter">
          © 2023 ViHub - Todos os direitos reservados
        </Text>
      </View>
    </View>
  )
}