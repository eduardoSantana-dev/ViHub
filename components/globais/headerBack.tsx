import { View, TouchableOpacity } from 'react-native'
import { router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../styles/colors';
export default function HeaderBack(){
    return(
        <View>
        <TouchableOpacity className='pl-2 mt-10' onPress={router.back}>
          <Ionicons name="chevron-back-outline" color={colors.texto} size={40}/>
        </TouchableOpacity>
      </View>
    )
}