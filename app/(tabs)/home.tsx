import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { Stack } from 'expo-router'
import Colors from '@/constants/Colors';
import { screenHeight, screenWidth } from '@/constants/metrics';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Page = () => {
  return (
    
    <GestureHandlerRootView>

      <SafeAreaView />
      <View style={styles.header}>
        <Stack.Screen
          options={{
            headerTransparent: true,
            headerTitle: '',
            headerLeft: () => (
              <TouchableOpacity style={styles.headerLeft}>
                <Image
                  source={{
                    uri: 'https://xsgames.co/randomusers/avatar.php?g=female'
                  }}
                  style={styles.avatarImg}
                />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity style={styles.headerRight}>
                <Entypo name="menu" size={30} color='white' />
              </TouchableOpacity>
            )
          }}
        />
      </View>
      <BottomSheet snapPoints={[screenHeight*0.75,screenHeight*0.90]}>
        <BottomSheetView style={styles.contentArea}>
        <Text>
          Hi There
        </Text>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
    


  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    height: screenHeight,
    width: screenWidth,
    backgroundColor: Colors.primaryColor
  },
  avatarImg: {
    width: 40,
    height: 40,
    borderRadius: 10
  },
  headerLeft: {
    marginLeft: 20,
    marginTop: 20,
  },
  headerRight: {
    marginTop: 20,
    marginRight: 20
  },
  contentArea:{
    padding:20,
  }
})

export default Page