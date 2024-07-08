import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Entypo } from '@expo/vector-icons'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { screenWidth } from '@/constants/metrics'
import { CameraView } from 'expo-camera'

const Scanner = () => {
  return (
    <GestureHandlerRootView>
      <SafeAreaView />
      <Stack.Screen
      options={{
        headerTransparent: true,
        headerTitle: 'Scan Tickets',
        headerLeft: () => (
          <TouchableOpacity style={styles.headerLeft}>
            <Entypo name="chevron-small-left" size={24} color="black" />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity style={styles.headerRight}>
          </TouchableOpacity>
        )
      }}
    />
    <View style={styles.container}>
    {/* <CameraView
        barcodeScannerSettings={{
          barcodeTypes: ["qr", "pdf417"],
        }}
        style={StyleSheet.absoluteFillObject}
      /> */}
    </View>
    </GestureHandlerRootView>
  )
}


const styles = StyleSheet.create({
    container:{
       flex:1,
       justifyContent:'center',
       alignItems:'center' 
    },
    headerLeft:{
      width:screenWidth*0.3
    }
})

export default Scanner