import 'react-native-gesture-handler'; // SEMPRE primeiro
import 'react-native-reanimated';       // antes de qualquer código que use Reanimated
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Stack, Slot } from 'expo-router';
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_700Bold, Inter_800ExtraBold } from '@expo-google-fonts/inter';
import { View, ActivityIndicator } from 'react-native';
import '../styles/global.css'; // Tailwind global
import { colors } from '../styles/colors';

export default function Layout() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
    Inter_800ExtraBold,
  });

 

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    
       <Slot />
     
    </GestureHandlerRootView>
  );
}
