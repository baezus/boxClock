import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Countdown from './components/Countdown';
import {setCustomText, setCustomTextInput} from 'react-native-global-props';
import styles from './styles/styles';

export default function App() {
  const customTextProps = {
    style: {
      fontFamily: 'Changa One',
    },
  };

  setCustomText(customTextProps);
  setCustomTextInput(customTextProps);

  return (
    <View style={styles.container}>
      <Countdown isPlaying={true} style={styles.textDefaultFont} />
      <StatusBar style="auto" />
    </View>
  );
}
