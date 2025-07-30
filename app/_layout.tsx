import 'react-native-gesture-handler'; // SEMPRE primeiro
import 'react-native-reanimated';       // antes de qualquer código que use Reanimated
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Stack, Slot } from 'expo-router';
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_700Bold, Inter_800ExtraBold } from '@expo-google-fonts/inter';
import { View, ActivityIndicator } from 'react-native';
import '../styles/global.css'; // Tailwind global
import { colors } from '../styles/colors';
import HeaderBack from '@/components/globais/headerBack';
export default function Layout() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
    Inter_800ExtraBold,
  });

 

  return (
    <GestureHandlerRootView style={{ flex: 1 ,backgroundColor:colors.fundo}}>
    
   <Stack
  screenOptions={{
    headerShown: true,
    contentStyle: { backgroundColor: colors.fundo },
    animation: 'simple_push',
    gestureEnabled: true,
    statusBarStyle: 'auto',
    header: () => <HeaderBack />, // Header customizado
  }}
>
  <Stack.Screen
    name="(tabs)"
    options={{
      headerShown: false, 
    }}
  />
   <Stack.Screen
    name="formularios/login"
    options={{
      headerShown: false, 
      animation: 'fade',
    }}
  />
   <Stack.Screen
    name="formularios/cadastro"
    options={{
      headerShown: false, 
      animation: 'fade',
    }}
  />
</Stack>
     
    </GestureHandlerRootView>
  );
}
