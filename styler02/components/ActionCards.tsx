import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ElevatedCards from './ElevatedCards'

export default function ActionCards() {
    function openWebsite(websiteLink:string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card,styles.elevatedCard ]}>
      <View style={styles.headingContainer}>
        <Text style={styles.headerText}>
            What's new about React Native.
        </Text>
        </View>
        <Image
        source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLHB1_-Ghe-QWTn6_v5ZmbqxdrBV7S5mn0Yw&s'}}
        style={styles.cardImage}/>
        <View style={styles.bodyContainer}>
            <Text>Welcome to the very start of your React Native journey! If you're looking for getting started instructions, they've moved to their own section. Continue reading for an introduction to the documentation, Native Components, React, and more!</Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity onPress={()=>{openWebsite('https://reactnative.dev/docs/getting-started')}}>
                <Text style={styles.socialLinks}>Read More...</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{openWebsite('https://www.instagram.com/ek_anta/')}}>
                <Text style={styles.socialLinks}>Follow me</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
    },
    card:{
        width:'90%',
        height:'auto',
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:16,
    },
    elevatedCard:{
        backgroundColor:'#E07C24',
        elevation:2,
        shadowOffset:{
            width:1,
            height:1,
        },
    }, 
    headingContainer:{
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    }, 
    headerText:{
        fontSize:16,
        fontWeight:'600',
    },
    cardImage:{
        height:200,
        marginBottom:8,
        borderTopRightRadius:6,
        borderTopLeftRadius:6,
    },
    bodyContainer:{
        padding:10,
    },
    footerContainer:{
        padding:8,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    socialLinks:{
        fontSize:16,
        fontWeight:600,
        backgroundColor:'#FFF',
        paddingHorizontal:20,
        paddingVertical:3,
        borderRadius:6
    }
})