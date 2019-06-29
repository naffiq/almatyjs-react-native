import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

const Button = ({onPress, text}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    padding: 16
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
    textAlign: "center"
  }
})

export default Button;