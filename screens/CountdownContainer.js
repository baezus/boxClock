import React, { useEffect, useState } from 'react';
import Countdown from '../components/Countdown';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';

const CountdownContainer = () => {

  const [count, setCount] = useState(0);
  const [timeout, setTimeout] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [pauseCount, setPauseCount] = useState('Time Out');

  const onPress = () => {
    setCount(prevCount => prevCount + 1);
    setIsPlaying(true)};

  const onPressPause = () => {
    setTimeout(prevTimeout => prevTimeout + 1);
    if (pauseCount ==='Time Out') {
      setPauseCount('Time In')
      setIsPlaying(false);
    } else if (pauseCount === 'Time In') {
      setPauseCount('Time Out')
      setIsPlaying(true);
    };
  }

  useEffect(() => {
    setIsPlaying(true);
  }, [])

  let colors = [['#f1f2da', 1],
  ['#ff7777', 3],
  ['#ffce96', 1]];

  return (
    <>
      <Text style={styles.count}>Round: {count}</Text>
      <Text style={styles.count}>Timeouts: {timeout}</Text>
      <Countdown 
      isPlaying={isPlaying} 
      style={styles.textDefaultFont} roundLength={180}
      colors={colors}/>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={onPressPause}
          style={styles.button}>
            <Text style={styles.fightButton}>
              {pauseCount}
            </Text>
        </TouchableOpacity>
      </View>
    </>
  )

}

export default CountdownContainer;