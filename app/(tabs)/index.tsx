import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, Modal } from 'react-native'
import React, { useContext, useState } from 'react'
import { Entypo } from '@expo/vector-icons';
import { Stack } from 'expo-router'
import Colors from '@/constants/Colors';
import { assetUrl, screenHeight, screenWidth } from '@/constants/metrics';
import BottomSheet, { BottomSheetScrollView, BottomSheetView } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { GlobalStyles } from '@/constants/globalFonts';
import { eventData } from '@/constants/data';
import { LinearGradient } from 'expo-linear-gradient';
import { Calender, Dollar, Location, More, Ticket } from '@/assets/icons/GenricIcons';
import { useRecoilState, useRecoilValue } from 'recoil';
import { selectShowScanner } from '@/constants/store/selector';
import IntroPopup from '@/components/IntroPopup/IntroPopup';





const ListCard = ({ data, setShowEvent, setEvent }: any) => {
  const handlePress = () => {
    setEvent(data)
    setShowEvent(true)
  }
  return (
    <TouchableOpacity onPress={handlePress} style={styles.card}>
      <View style={styles.cardLeftText}>
        <Text style={[GlobalStyles.subHeadingLogin16, { color: 'black', fontWeight: 400 }]}>{data.title}</Text>
        <Text style={[GlobalStyles.SubHeadingSmall14, { color: Colors.grey }]}>{data.location}</Text>
      </View>
      <View>
        <Text style={[GlobalStyles.subHeadingLogin16, { fontSize: 14, color: 'black', fontWeight: 400 }]}>{data.time}</Text>
      </View>
    </TouchableOpacity>
  )
}
const Page = () => {

  const [showEvent, setShowEvent] = useState(false)
  const [showScanner, setShowScanner] = useRecoilState(selectShowScanner);
  const [event, setEvent] = useState({})

  return (
    <GestureHandlerRootView>
      <SafeAreaView />
      <IntroPopup />
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
      <BottomSheet snapPoints={[screenHeight * 0.90]}>
        <BottomSheetView style={styles.contentArea}>
          <View style={styles.heading}>
            <Text style={[GlobalStyles.heading, { fontSize: 24 }]}>
              Events
            </Text>
          </View>
          <View style={styles.list}>
            {
              eventData.map((item, index) => (
                <ListCard key={index} data={item} setShowEvent={setShowEvent} setEvent={setEvent} />
              ))
            }
          </View>
        </BottomSheetView>
      </BottomSheet>
      <Modal visible={showEvent}>
        <GestureHandlerRootView>
          <View style={styles.modalImageView}>
            <LinearGradient
              colors={['rgba(0,0,0,0.6)', 'transparent']}
              style={styles.shade}>
            </LinearGradient>
            <View style={styles.topBar}>
              <View style={styles.topBarContent}>

                <Entypo onPress={() => setShowEvent(false)} name="chevron-small-left" size={24} color="white" />
              </View>
              <View style={[styles.topBarContent, { justifyContent: 'center' }]}>
                <Text style={[GlobalStyles.subHeadingLogin16, { color: '#fff' }]}>
                  Event
                </Text>
              </View>
              <View style={[styles.topBarContent, {
                // borderWidth: 1,
                // borderColor: '#fff',
                height: 40,
              }]}>
                <More
                  style={{
                    position: 'absolute',
                    left: '82%',
                    top: 15,
                  }}
                />
              </View>
            </View>
            <Image
              style={styles.modalImg}
              source={event.image}
            />
          </View>
          <BottomSheet backgroundStyle={styles.bottomSheet} snapPoints={[screenHeight * 0.7, screenHeight * 0.82]}>
          <View style={{
            height:'85%'
          }}>
            <BottomSheetScrollView style={styles.contentArea}>
              <View style={[styles.heading, { paddingHorizontal: 10, paddingTop: 10, }]}>
                <Text style={[GlobalStyles.heading, { fontSize: 26, paddingBottom: 5 }]}>
                  {event.title}
                </Text>
                <Text style={[GlobalStyles.subHeadingLogin16, { fontWeight: 400, color: Colors.fontPrimary, paddingBottom: 10 }]}>
                  by {event.organiser}
                </Text>
                <View>
                  
                  <View style={{
                    flexDirection: 'row',

                    gap: 20,
                    paddingVertical: 10,
                  }}>
                    <Calender />
                    <View>
                      <Text style={[GlobalStyles.subHeadingLogin16, { fontWeight: 500, color: Colors.fontPrimary, lineHeight: 24, }]}>
                        {event.day}
                      </Text>
                      <Text style={[GlobalStyles.CardSubHeading12, { fontWeight: 500, color: Colors.grey, lineHeight: 24, }]}>
                        {event.time}
                      </Text>
                    </View>
                  </View>
                  <View style={{
                    flexDirection: 'row',

                    gap: 20,
                    paddingVertical: 10,
                  }}>
                    <Location />
                    <View>
                      <Text style={[GlobalStyles.subHeadingLogin16, { fontWeight: 500, color: Colors.fontPrimary, lineHeight: 24, }]}>
                        {event.location}
                      </Text>
                      <Text style={[GlobalStyles.CardSubHeading12, { fontWeight: 500, color: Colors.primaryColor, lineHeight: 24, }]}>
                        Join to see full address
                      </Text>
                    </View>
                  </View>
                  <View style={{
                    flexDirection: 'row',

                    gap: 20,
                    paddingVertical: 10,
                  }}>
                    <Ticket />
                    <View>
                      <Text style={[GlobalStyles.subHeadingLogin16, { fontWeight: 500, color: Colors.fontPrimary, lineHeight: 24, }]}>
                        {event.ticketsLeft}
                      </Text>
                      <Text style={[GlobalStyles.CardSubHeading12, { fontWeight: 500, color: Colors.grey, lineHeight: 24, }]}>
                        {event.invited}
                      </Text>
                    </View>
                  </View>
                  <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 20,
                    paddingTop: 10,
                    paddingBottom:20,
                  }}>
                    <Dollar height={25} width={25} />
                    <Text style={[GlobalStyles.subHeadingLogin16, { fontWeight: 500, color: Colors.fontPrimary, lineHeight: 24, }]}>
                      {event.rate}
                    </Text>
                  </View>
                  <Text style={[GlobalStyles.HeadingSmall18, { fontWeight: 600 }]}>
                    About this event
                  </Text>
                  <Text style={[GlobalStyles.subHeadingLogin16, { fontWeight: 400, color: Colors.fontPrimary, lineHeight: 24, }]}>
                    {event.about}
                  </Text>
                </View>
              </View>
            </BottomSheetScrollView>
          </View>
          </BottomSheet>
          <View style={styles.bottomButtonContainer}> 
                  <TouchableOpacity style={styles.bottomButton}>
                      <Text style={[GlobalStyles.subHeadingLogin16, { fontWeight: 600, color: '#fff', lineHeight: 24, }]}>
                          Buy tickets
                      </Text>
                  </TouchableOpacity>
            </View>
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
  card: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderLeftWidth: 4,
    borderRadius: 6,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderLeftColor: '#1EC34E',
    marginVertical: 7,
    borderWidth: 1,
    borderRightColor: '#f5f5f5',
    borderTopColor: '#f5f5f5',
    borderBottomColor: '#f5f5f5'
  },
  cardLeftText: {

  },
  bottomButtonContainer:{
    position:'absolute',
    bottom:0,
    width:'100%',
    padding:20,
    backgroundColor:'#fff'
  },
  bottomButton:{
    width:'100%',
    flexDirection:'row',
    borderRadius:100,
    justifyContent:'center',
    paddingVertical:10,
    backgroundColor:Colors.primaryColor
  },
  topBar: {
    width: screenWidth,
    backgroundColor: 'transparent',
    position: 'absolute',
    zIndex: 6,

    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  topBarContent: {
    // borderWidth: 1,
    // borderColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    width: '30%',
  },
  shade: {
    height: '40%',
    width: '100%',
    position: 'absolute',
    top: 0,
    zIndex: 5,
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    paddingTop: 30,
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
  bottomSheet: {
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  headerLeft: {
    marginLeft: 20,
    marginTop: 20,
  },
  headerRight: {
    marginTop: 20,
    marginRight: 20
  },
  heading: {
    paddingBottom: 20,
  },
  list: {
    flexDirection: 'column',
    gap: 20,
  },
  modalImageView: {
    width: screenWidth,
    height: screenHeight * 0.5
  },
  modalImg: {
    width: "100%",
    height: '100%'
  },
  contentArea: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
  }
})

export default Page