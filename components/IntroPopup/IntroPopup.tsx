import { View, Text, Modal, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { selectCurrentQuestionNumber, selectShowIntroState } from '@/constants/store/selector'
import { screenHeight, screenWidth } from '@/constants/metrics'
import { GlobalStyles } from '@/constants/globalFonts'
import Colors from '@/constants/Colors'
import { Questionnarie } from '@/constants/data'
import { CheckCircle } from '@/assets/icons/GenricIcons'

const IntroPopup = () => {
    const [showIntro,setShowIntro] = useRecoilState(selectShowIntroState)
    const [option,setOption] = useState([])
    const [questionNumber,setQuestionNumber] = useRecoilState(selectCurrentQuestionNumber)
    console.log("=======================IntroState",option)

    const handleOptionPress = (item) =>{
        if(Questionnarie[questionNumber].next){
            setQuestionNumber(questionNumber+1)
        }else{
            if(option.includes(item)){
                setOption((prevState)=>(
                   prevState.filter(value=>value!==item)
                ))
            }else{
                setOption((prevState)=>(
                    [...prevState,item]
                ))
            }
        }
    }
    const handleNext = ()=>{
        if(questionNumber<3){
            setQuestionNumber(questionNumber+1)
        }else{
            setShowIntro(false)
        }
    }
  return (
    <Modal transparent={false} visible={showIntro}>
        <View style={styles.background}>
        <Image
        style={styles.backGroundImage}
        source={require('../../assets/images/Gradient.png')}
        />
        </View>
        <View style={styles.content}>   
            <View style={styles.contentView}>
                <View>
                <Text style={[GlobalStyles.SubHeadingSmall14,{fontWeight:400,color:Colors.primaryColor}]}>
                    QUESTIONS {questionNumber+1} OF 4
                </Text>
                <Text style={[GlobalStyles.heading,{fontSize:26,fontWeight:500,paddingTop:7,paddingBottom:30}]}>
                     {Questionnarie[questionNumber].question}   
                </Text>
                {Questionnarie[questionNumber].type==='input'
                ?
                <TextInput 
                style={styles.input}
                placeholderTextColor={'rgba(108, 99, 255,0.3)'}
                 placeholder={Questionnarie[questionNumber].placeholder}
                />:
                <View style={styles.optionView}>
                    {
                        Questionnarie[questionNumber].options.map((item)=>{
                            console.log(item)
                            return<TouchableOpacity onPress={()=>handleOptionPress(item)} style={styles.option}>
                                    <Text style={[GlobalStyles.heading,{fontSize:20,fontWeight:600,color:Colors.primaryColor}]}>
                                            {item}
                                    </Text>
                                    {option.includes(item)?<CheckCircle
                                    style={{
                                        position:'absolute',
                                        right:10,
                                        top:15,
                                    }}
                                    />:<></>}
                            </TouchableOpacity>
                        })
                    }
                </View>
                }
                </View>
            </View>
            {!Questionnarie[questionNumber].next&&<View style={styles.buttonView}>
                <TouchableOpacity onPress={handleNext} style={styles.button}>
                    <Text style={[GlobalStyles.subHeadingLogin16,{fontWeight:600,color:'#fff'}]}>
                        Next question
                    </Text>
                </TouchableOpacity>
            </View>}
        </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
    background:{
        height:screenHeight,
        width:screenWidth,
    },
    backGroundImage:{
        width: '100%',
        height: '100%',
    },
    content:{
        position:'absolute',
        height:'100%',
        width:'100%',
    },
    input:{
        width:'100%',
        fontSize:26,
        color:Colors.primaryColor
    },
    contentView:{
        alignItems:'center',
        top:'25%'
    },
    optionView:{
        alignItems:'center',
        gap:15,

    },
    option:{
        padding:10,
        width:'80%',
        alignItems:'center',
        backgroundColor:'rgba(255,255,255,0.35)',
        borderRadius:8,
    },
    buttonView:{
        position:'absolute',
        width:'100%',
        bottom:30,
        flexDirection:'row',
        justifyContent:'center',
    },
    button:{
        width:'90%',
        paddingVertical:15,
        flexDirection:'row',
        justifyContent:'center',
        borderRadius:100,
        alignItems:'center',
        backgroundColor:Colors.primaryColor
    }
})

export default IntroPopup