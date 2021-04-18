import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {setCustomText, setCustomTextInput} from 'react-native-global-props';
import styles from './styles/styles';
import Countdown from './components/Countdown';
import CountdownContainer from './screens/CountdownContainer';
import Home from './screens/Home';


export default function App() {
  const customTextProps = {
    style: {
      fontFamily: 'Changa One',
    },
  };

  setCustomText(customTextProps);
  setCustomTextInput(customTextProps);
  

  const [configDone, setConfigDone] = useState(false);

  const onPress = () => {
    setConfigDone(prevConfig => !prevConfig);
  };

  if (configDone) {
    return (
      <View style={styles.container}>
        <CountdownContainer isPlaying={true} style={styles.textDefaultFont}/>
        <StatusBar style="auto" />
      </View>
    )
  } else {
    return (
      <View style={styles.container}> <Home/>
        <TouchableOpacity
          onPress={onPress}
          style={styles.button}>
            <Text style={styles.fightButton}>
              Go
            </Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    )
  }

}
