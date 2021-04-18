import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { Animated, Text } from 'react-native';
import React from 'react';

//this is 'react-native-countdown-circle-timer': https://www.npmjs.com/package/react-native-countdown-circle-timer
const children = ({ remainingTime }) => {
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  return `${minutes}:${seconds}`;
}

const Countdown = () => (
  <CountdownCircleTimer
  //onComplete
  //
    isPlaying
    onComplete={() => {
      return [true, 1000]
    }}
    strokeWidth={20}
    duration={90}
    colors={[
      ['coral', 1],
      ['rebeccapurple', 1],
    ]}
    >
      {({ remainingTime, animatedColor }) => (
        <Animated.Text style={{ color: animatedColor }}>
          {children({remainingTime})}
        </Animated.Text>
      )}
    </CountdownCircleTimer>
)

export default Countdown;