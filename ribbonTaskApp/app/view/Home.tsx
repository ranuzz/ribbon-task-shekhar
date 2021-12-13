/**
 * Home View: First view that appears when user opens the application
 */


import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { appSubTitle, appTitle } from '../config/strings';

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: Colors.lighter,
  }
});

const Home = () => {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <View>
        <Text>{appTitle}</Text>
        <Text>{appSubTitle}</Text>
      </View>
    </SafeAreaView>
  )
}

export default Home;