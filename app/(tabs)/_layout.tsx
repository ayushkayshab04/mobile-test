import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Feather, FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router'
import Colors from '@/constants/Colors';

const Layout = () => {
  return (
    <Tabs screenOptions={{
      tabBarStyle:{
        backgroundColor:'white',
        position:'absolute',
        bottom:0,
        height:50,
        marginHorizontal:0,
        borderRadius:100
      },
      tabBarShowLabel:false,
      tabBarActiveTintColor:Colors.primaryColor,
      tabBarInactiveTintColor:Colors.grey
    }}>
      <Tabs.Screen
      name='index'
      options={{
        tabBarIcon:({color})=>(
          <Feather name="home" size={26} color={color} />
        )
      }}
      />
      <Tabs.Screen
      name='scanner'
      options={{
        tabBarIcon:({color})=>(
          <View style={styles.iconContainer}>
            <MaterialIcons name="qr-code-scanner" size={30} color='white' />
          </View>
        )
      }}
      />
      <Tabs.Screen
      name='profile'
      options={{
        tabBarIcon:({color})=>(
          <FontAwesome name='user' size={26} color={color} />
        )
      }}
      />

    </Tabs>
  )
}


const styles = StyleSheet.create({
  iconContainer:{
      height:70,
      width:70,
      justifyContent:'center',
      alignItems:'center',
      position:'relative',
      zIndex:4,
      borderRadius:50,
      backgroundColor:'#6C63FF',
      opacity:1,
      bottom:20,
  }
})

export default Layout