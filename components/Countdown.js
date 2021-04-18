import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { Animated, Text, StyleSheet, PixelRatio, Touchable } from 'react-native';
import styles from '../styles/styles';
import React from 'react';
import 'react-native-svg';

//this is 'react-native-countdown-circle-timer': https://www.npmjs.com/package/react-native-countdown-circle-timer

let FONT_BACK_LABEL = 58;
if (PixelRatio.get()<=2){
  FONT_BACK_LABEL = 53;
}

const children = ({ remainingTime }) => {
  const minutes = Math.floor(remainingTime / 60);
  let seconds = remainingTime % 60;
  if (seconds < 10) {
    FONT_BACK_LABEL = 70
    return `${seconds}`
  } else if (PixelRatio.get()<=2){
    FONT_BACK_LABEL = 53;
  } else {
    FONT_BACK_LABEL = 58;
  }

  return `${minutes}:${seconds}`;
}

const Countdown = ({ isPlaying, roundLength, colors }) => (
  <CountdownCircleTimer
  //onComplete
  //
    isPlaying={isPlaying}
    onComplete={() => {
      return [true, 1000]
    }}
    strokeWidth={13}
    duration={roundLength}
    size={150}
    trailColor={'transparent'}
    colors={colors}
    >
      {({ remainingTime, animatedColor }) => (
        <Animated.Text style={{ color: animatedColor, fontSize: FONT_BACK_LABEL, fontWeight: 700, fontFamily: 'Changa One', paddingRight: 2, paddingLeft: 2, }} className="animated_text">
          {children({remainingTime})}
        </Animated.Text>
      )}
    </CountdownCircleTimer>
);



export default Countdown;