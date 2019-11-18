/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { WebView } from 'react-native-webview';
import LottieView from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';


export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        {/* <WebView
          source={{ uri: 'https://baidu.com' }}
          style={{ flex: 1 }}
        /> */}
        {/* <LottieView source={require('./animate/open_2.json')} autoPlay loop={false} /> */}
        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
          <Text style={styles.buttonText}>
            Sign in with Facebook
          </Text>
        </LinearGradient>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});