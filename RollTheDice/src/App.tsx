
import ReactNativeHapticFeedback from "react-native-haptic-feedback";
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,

} from 'react-native';

import DiceOne from '../assets/One.png'
import DiceTwo from '../assets/Two.png'
import DiceThree from '../assets/Three.png'
import DiceFour from '../assets/Four.png'
import DiceFive from '../assets/Five.png'
import DiceSix from '../assets/Six.png'

type DiceProps= PropsWithChildren<{
  imageUrl:ImageSourcePropType
}>

const Dice=({imageUrl}:DiceProps):React.JSX.Element=>{
  return (
    <View>
      <Image style={styles.diceImage } source={imageUrl}></Image>
    </View>
  )
}





function App(): React.JSX.Element {
  const [diceImage,setdiceImage]=useState<ImageSourcePropType>(DiceOne)

  const rollDiceOnTap=()=>{
    let rendomNumber=Math.floor(Math.random()*6)+1
    switch (rendomNumber) {
      case 1:
        setdiceImage(DiceOne)
        break;
      case 2:
        setdiceImage(DiceTwo)
        break;
      case 3:
        setdiceImage(DiceThree)
        break;
      case 4:
        setdiceImage(DiceFour)
        break;
      case 5:
        setdiceImage(DiceFive)
        break;
      case 6:
        setdiceImage(DiceSix)
        break;
    
      default:
        setdiceImage(DiceOne)
        break;
    }

    ReactNativeHapticFeedback.trigger("impactLight", options);
  }

  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage}/>
      <Pressable onPress={rollDiceOnTap}><Text style={styles.rollDiceBtnText}>Roll The Dice</Text></Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default App;
