
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_700Bold, Inter_800ExtraBold, } from '@expo-google-fonts/inter';
import { Stack } from 'expo-router';
import '../styles/global.css'



export default function Layout() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
    Inter_800ExtraBold,
  });
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown:false}} />
    </Stack>
  )
}