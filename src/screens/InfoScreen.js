import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import InfoRow from '../components/InfoRow';

const poster = require('../../assets/images/poster.png');


class InfoScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Image source={poster} style={styles.image} resizeMode="cover"/>
        <View style={styles.containerContent}>
          <InfoRow label="Когда" value="29 июня, суббота" />
          <InfoRow label="Где" value="Алматы, Алматы, Назарбаева 226 (Ramstore All-in), офис Альфа-Банк." />
          <InfoRow label="Extra" value="Возьмите с собой удостоверение личности, вход по спискам!" />
        </View>
      </View>
    );
  }

};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerContent: {
    flex: 10,
    padding: 16
  },
  image: {
    flex: 3,
    width: "100%",
  }
});

export default InfoScreen;