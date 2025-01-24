import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function contactList() {
    const contacts=[
        {
         uid:1,
         Name:'Saurav Khanal',
         status:'student',
         imageurl:'https://i.pinimg.com/564x/d7/1d/5c/d71d5cce025b22cea3b3ef9a48f9fd4a.jpg'
        },
        {
            uid:2,
            Name:'Sanskar Rijal',
            status:'Kotlin Developer',
            imageurl:'https://i.pinimg.com/564x/d7/1d/5c/d71d5cce025b22cea3b3ef9a48f9fd4a.jpg'
           },
           {
            uid:3,
            Name:'Sangyog Puri',
            status:'Backend developer',
            imageurl:'https://i.pinimg.com/564x/d7/1d/5c/d71d5cce025b22cea3b3ef9a48f9fd4a.jpg'
           },
           {
            uid:4,
            Name:'Sudesh Subedi',
            status:'AI Dev',
            imageurl:'https://i.pinimg.com/564x/d7/1d/5c/d71d5cce025b22cea3b3ef9a48f9fd4a.jpg'
           },

    ];
  return (
    <View>
      <Text style={styles.headingText}>contactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        { contacts.map(({uid,Name,status,imageurl})=>(
            <View key={uid} style={styles.userCard}>
                <Image
                source={{uri:imageurl}}  style={styles.userImage}/> 
               <View>
               <Text style={styles.userName}>{Name}</Text>
               <Text style={styles.userStatus}>{status}</Text> 
               </View>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
    },
    container:{
        paddingHorizontal:16,
        marginBottom:4,
    },
    userCard:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:2,
        backgroundColor:'#E2E8C0',
        borderRadius:14,
        
    },
    userImage:{
        height:60,
        width:60,
        borderRadius:60/2,
        marginRight:14,
    },
    userName:{
        fontSize:16,
        fontWeight:'600'
    },
    userStatus:{},
})