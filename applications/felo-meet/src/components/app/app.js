import {ImageBackground, View, StyleSheet, Text} from 'react-native';
import React from 'react';
/* eslint-disable */
const StrawberryIcon = require('@images/strawberry.component.png');

const styles = StyleSheet.create({
  appview: {
    widht: '100%',
    height: 600
  },
  background: {
    paddingBottom: 10,
    paddingTop: 300,
    backgroundColor: '#4b5abe',
  },
  logo: {
    width: '100%',
    height: 400,
    overflow: 'visible',
    resizeMode: 'cover',
  },
  textStyle: {
        color: '#4b5abe',
        fontSize: 16,
        textAlign: 'right',
        marginTop: 10,
        paddingRight: 20
}});

export const AppView = () => (
  <View style={styles.appview}>
    <ImageBackground
      accessibilityRole="image"
      source={StrawberryIcon}
      style={styles.background}
      imageStyle={styles.logo}>
    </ImageBackground>
    <Text style={styles.textStyle}>
      @AceG/Felo-Meet
    </Text>
  </View>
);
