import React, { useEffect, useState } from 'react';
import Countdown from '../components/Countdown';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';

const CountdownContainer = () => {

  const [count, setCount] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const onPress = () => {
    setCount(prevCount => prevCount + 1);
    setIsPlaying(true)};

  let colors = [['#f1f2da', 1],
  ['#ff7777', 3],
  ['#ffce96', 1]];

  return (
    <>
      <Text style={styles.count}>Round: {count}</Text>
      <Countdown 
      isPlaying={isPlaying} 
      style={styles.textDefaultFont} roundLength={180}
      colors={colors}/>
      <TouchableOpacity
        onPress={onPress}
        style={styles.button}>
          <Text style={styles.fightButton}>
            Fight!
          </Text>
      </TouchableOpacity>
    </>
  )

}

export default CountdownContainer;