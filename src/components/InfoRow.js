import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const InfoRow = ({label, value}) => {
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={[styles.labelText, styles.text]}>{label}</Text>
      </View>
      <View style={styles.valueContainer}>
        <Text style={styles.text}>{value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginVertical: 8
  },
  labelContainer: {
    flex: 1
  },
  labelText: {
    color: "#999999"
  },
  valueContainer: {
    flex: 3
  },
  text: {
    fontSize: 16
  }
})

export default InfoRow;