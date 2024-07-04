import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Scanner = () => {
  return (
    <View style={styles.container}>
      <Text>Scanner</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
       flex:1,
       justifyContent:'center',
       alignItems:'center' 
    }
})

export default Scanner