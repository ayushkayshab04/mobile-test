import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, Modal } from 'react-native'
import React, { useState } from 'react'
import { Entypo } from '@expo/vector-icons';
import { Stack } from 'expo-router'
import Colors from '@/constants/Colors';
import { assetUrl, screenHeight, screenWidth } from '@/constants/metrics';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { GlobalStyles } from '@/constants/globalFonts';
import { Event } from '@/constants/Interfaces';
import { eventData } from '@/constants/data';





const ListCard = ({data,setShowEvent,setEvent}:any)=>{
  const handlePress = ()=>{
    setEvent(data)
    setShowEvent(true)
  }
  return(
    <TouchableOpacity onPress={handlePress} style={styles.card}>
      <View style={styles.cardLeftText}>
        <Text style={[GlobalStyles.subHeadingLogin16,{color:'black',fontWeight:400}]}>{data.title}</Text>
        <Text style={[GlobalStyles.SubHeadingSmall14,{color:Colors.grey}]}>{data.location}</Text>
      </View>
      <View>
        <Text style={[GlobalStyles.subHeadingLogin16,{color:'black',fontWeight:400}]}>{data.time}</Text>
      </View>
    </TouchableOpacity>
  )
}
const Page = () => {

  const [showEvent,setShowEvent] = useState(false)
  const [event,setEvent] = useState({})
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
      <BottomSheet snapPoints={[screenHeight*0.90]}>
        <BottomSheetView style={styles.contentArea}>
        <View style={styles.heading}>
          <Text style={[GlobalStyles.heading,{fontSize:24}]}>
            Events
          </Text>
        </View>
        <View style={styles.list}>
          {
            eventData.map((item,index)=>(
              <ListCard key={index} data={item} setShowEvent={setShowEvent} setEvent={setEvent} />
            ))
          }
        </View>
        </BottomSheetView>
      </BottomSheet>
      <Modal visible={showEvent}>
        <GestureHandlerRootView>
          <View style={styles.modalImageView}>
            <View style={styles.shade}>

            </View>
            <Image
            style={styles.modalImg}
            source={event.image}
            />
          </View>
          <BottomSheet backgroundStyle={styles.bottomSheet} snapPoints={[screenHeight*0.7,screenHeight*0.82]}>
        <BottomSheetView style={styles.contentArea}>
        <View style={[styles.heading,{paddingHorizontal:10,paddingTop:10,}]}>
          <Text style={[GlobalStyles.heading,{fontSize:24}]}>
            Events
          </Text>
        </View>
        </BottomSheetView>
      </BottomSheet>
        </GestureHandlerRootView>
      </Modal>
    </GestureHandlerRootView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  card:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    borderLeftWidth:4,
    borderRadius:6,
    paddingHorizontal:20,
    paddingVertical:10,
    borderLeftColor:'#1EC34E',
    marginVertical:7,
  },
  cardLeftText:{

  },
  shade:{
    height:'20%',
    width:'100%',
    position:'absolute',
    top:0,
    zIndex:5
    // background: linear-gradient(180deg, #666666 0%, #404040 58.2%, #000000 60%)
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
  bottomSheet:{
    borderTopRightRadius:50,
    borderTopLeftRadius:50,
  },
  headerLeft: {
    marginLeft: 20,
    marginTop: 20,
  },
  headerRight: {
    marginTop: 20,
    marginRight: 20
  },
  heading:{
    paddingBottom:20,
  },
  list:{
    flexDirection:'column',
    gap:20,
  },
  modalImageView:{
    width:screenWidth,
    height:screenHeight*0.5
  },
  modalImg:{
    width:"100%",
    height:'100%'
  },
  contentArea:{
    width:'100%',
    paddingHorizontal:20,
    paddingVertical:10,
  }
})

export default Page