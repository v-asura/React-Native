import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card,styles.cardElevated]}>
        <Image source={{uri:'https://cdn.ioepc.edu.np/wp-content/uploads/2023/05/ERC_2019_srgb-scaled.jpg'}}
        style={styles.cardImage}/>
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Purwanchal Campus</Text>
            <Text style={styles.cardLabel}>Sunsari, Dharan</Text>
            <Text style={styles.cardDescription}>Purwanchal Campus, formerly known as Eastern Region (ERC) Campus is one of constituent campuses of Tribhuvan University (TU) and one of the associate engineering campuses of Institute of Engineering (IOE) which is a comprehensive, non-profit making institution and pioneering institution of higher education level in Nepal funded by Government of Nepal.Currently this campus runs seven (Agricultural, Architecture, Civil, Computer, Electrical, Electronics Communication & Information, Mechanical) bachelors degree program and one (Land and Water) master degree program It is situated at Gangalal Marg, Tinkune, Dharan-8, Sunsari district in the eastern region of Nepal. It occupies an area of 443 ropani (34-13-11.75 Bigahas)

With the upgrade to a higher level of courses, the need to adopt the recent technological development and initiate research and development activities to better deal with related engineering problems, the Purwanchal campus is committed to achieving better quality results.</Text>
       
            <Text style={styles.cardFooter}>15 mins away</Text>
 </View>
      </View>
      <View style={[styles.card,styles.cardElevated]}>
        <Image source={{uri:'https://cdn.ioepc.edu.np/wp-content/uploads/2023/05/ERC_2019_srgb-scaled.jpg'}}
        style={styles.cardImage}/>
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Purwanchal Campus</Text>
            <Text style={styles.cardLabel}>Sunsari, Dharan</Text>
            <Text style={styles.cardDescription}>Purwanchal Campus, formerly known as Eastern Region (ERC) Campus is one of constituent campuses of Tribhuvan University (TU) and one of the associate engineering campuses of Institute of Engineering (IOE) which is a comprehensive, non-profit making institution and pioneering institution of higher education level in Nepal funded by Government of Nepal.Currently this campus runs seven (Agricultural, Architecture, Civil, Computer, Electrical, Electronics Communication & Information, Mechanical) bachelors degree program and one (Land and Water) master degree program It is situated at Gangalal Marg, Tinkune, Dharan-8, Sunsari district in the eastern region of Nepal. It occupies an area of 443 ropani (34-13-11.75 Bigahas)

With the upgrade to a higher level of courses, the need to adopt the recent technological development and initiate research and development activities to better deal with related engineering problems, the Purwanchal campus is committed to achieving better quality results.</Text>
       
            <Text style={styles.cardFooter}>15 mins away</Text>
 </View>
      </View>
      <View style={[styles.card,styles.cardElevated]}>
        <Image source={{uri:'https://cdn.ioepc.edu.np/wp-content/uploads/2023/05/ERC_2019_srgb-scaled.jpg'}}
        style={styles.cardImage}/>
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Purwanchal Campus</Text>
            <Text style={styles.cardLabel}>Sunsari, Dharan</Text>
            <Text style={styles.cardDescription}>Purwanchal Campus, formerly known as Eastern Region (ERC) Campus is one of constituent campuses of Tribhuvan University (TU) and one of the associate engineering campuses of Institute of Engineering (IOE) which is a comprehensive, non-profit making institution and pioneering institution of higher education level in Nepal funded by Government of Nepal.Currently this campus runs seven (Agricultural, Architecture, Civil, Computer, Electrical, Electronics Communication & Information, Mechanical) bachelors degree program and one (Land and Water) master degree program It is situated at Gangalal Marg, Tinkune, Dharan-8, Sunsari district in the eastern region of Nepal. It occupies an area of 443 ropani (34-13-11.75 Bigahas)

With the upgrade to a higher level of courses, the need to adopt the recent technological development and initiate research and development activities to better deal with related engineering problems, the Purwanchal campus is committed to achieving better quality results.</Text>
       
            <Text style={styles.cardFooter}>15 mins away</Text>
 </View>
      </View>
      <View style={[styles.card,styles.cardElevated]}>
        <Image source={{uri:'https://cdn.ioepc.edu.np/wp-content/uploads/2023/05/ERC_2019_srgb-scaled.jpg'}}
        style={styles.cardImage}/>
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Purwanchal Campus</Text>
            <Text style={styles.cardLabel}>Sunsari, Dharan</Text>
            <Text style={styles.cardDescription}>Purwanchal Campus, formerly known as Eastern Region (ERC) Campus is one of constituent campuses of Tribhuvan University (TU) and one of the associate engineering campuses of Institute of Engineering (IOE) which is a comprehensive, non-profit making institution and pioneering institution of higher education level in Nepal funded by Government of Nepal.Currently this campus runs seven (Agricultural, Architecture, Civil, Computer, Electrical, Electronics Communication & Information, Mechanical) bachelors degree program and one (Land and Water) master degree program It is situated at Gangalal Marg, Tinkune, Dharan-8, Sunsari district in the eastern region of Nepal. It occupies an area of 443 ropani (34-13-11.75 Bigahas)

With the upgrade to a higher level of courses, the need to adopt the recent technological development and initiate research and development activities to better deal with related engineering problems, the Purwanchal campus is committed to achieving better quality results.</Text>
       
            <Text style={styles.cardFooter}>15 mins away</Text>
 </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingLeft:8,
       
    },
    card:{
        
        width:'90%',
        height:'auto',
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:16,
        
    },
    cardElevated:{
        elevation:2,
        shadowOffset:{
            width:1,
            height:1,
        },
    },
    cardImage:{
        height:180,
        marginBottom:8,
        borderTopRightRadius:6,
        borderTopLeftRadius:6,
    },
    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12,
    },
    cardTitle:{
        fontSize:24,
        fontWeight:'bold',
        textAlign:'center',
       
    },
    cardLabel:{
        fontSize:18,
        marginBottom:6, 
        textAlign:'center',
        fontWeight:700,
    },
    cardDescription:{
        fontSize:15,
        marginTop:6,
        marginBottom:12,
        textAlign:'justify',
    },
    cardFooter:{
        marginBottom:6,
    },
})