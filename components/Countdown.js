import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { Animated, Text, StyleSheet, PixelRatio, Touchable } from 'react-native';
import styles from '../styles/styles';
import React from 'react';

//this is 'react-native-countdown-circle-timer': https://www.npmjs.com/package/react-native-countdown-circle-timer

const children = ({ remainingTime }) => {
  const minutes = Math.floor(remainingTime / 60);
  let seconds = remainingTime % 60;
  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  return `${minutes}:${seconds}`;
}

let FONT_BACK_LABEL = 55;
if (PixelRatio.get()<=2){
  FONT_BACK_LABEL = 50;
}

const Countdown = ({ isPlaying }) => (
  <CountdownCircleTimer
  //onComplete
  //
    isPlaying={isPlaying}
    onComplete={() => {
      return [true, 1000]
    }}
    strokeWidth={18}
    duration={180}
    size={150}
    trailColor={'transparent'}
    colors={[
      ['#f1f2da', 1],
      ['#ff7777', 3],
      ['#ffce96', 1],
    ]}
    >
      {({ remainingTime, animatedColor }) => (
        <Animated.Text style={{ color: animatedColor, fontSize: FONT_BACK_LABEL, fontWeight: 700, fontFamily: 'Changa One', paddingRight: 3, paddingLeft: 3, }} className="animated_text">
          {children({remainingTime})}
        </Animated.Text>
      )}
    </CountdownCircleTimer>
);



export default Countdown;