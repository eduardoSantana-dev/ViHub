import React from 'react';
import { Link, Tabs, Stack } from 'expo-router';
import { Pressable, Image } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import {colors} from '@colors'

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Inter_600SemiBold } from '@expo-google-fonts/inter';
import '../../styles/global.css'
export default function Layout() {
  const insets = useSafeAreaInsets(); // pega a altura da área segura
  const icon_size = 30

  return (

    <Tabs
      screenOptions={{
        
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor:colors.cards,
          borderTopWidth: 0,
          height: 65,
          paddingBottom: 10,
          paddingTop: 10,
          marginHorizontal: 10,
          borderRadius: 20,
          position: 'absolute',
          bottom: 40,

        },
        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          marginTop: -2,
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#555',
        headerShown: false,
      }}
    >
       <Tabs.Screen
        name="index"
        options={{

          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={icon_size} color={color} />
          ),
        }}
      />
  <Tabs.Screen
    name="tarefas"
    options={{

      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="clipboard-text-multiple-outline" size={icon_size} color={color} />

      ),
    }}
  />
 <Tabs.Screen
  name="projetos"
  options={{
    
    tabBarIcon: ({ focused }) => (
      <Image
        source={require('@logo/branco.png')}
        style={{ width: 40, height: 40, opacity: focused ? 1 : 0.4 }}
      />
    ),
  }}
/>
     

    
      <Tabs.Screen
        name="estudos"
        options={{

          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="school" size={icon_size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="financeiro"
        options={{

          tabBarIcon: ({ color }) => (
            <FontAwesome name="dollar" size={icon_size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}