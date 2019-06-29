import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import Timeline from '../../components/Timeline';
import events from '../../constants/events';
const poster = require('../../../assets/images/poster.png');


class ScheduleScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Image 
          source={poster}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.containerContent}>
          <Timeline 
            data={events}
            navigation={this.props.navigation}
          />
        </View>
      </View>
    );
  }

};

const styles = StyleSheet.create({
  container: {
    flex: 1 // Растягивает контейнер на весь скрин
  },
  containerContent: {
    flex: 10, // 5/6 экрана
  },
  image: {
    flex: 3, // 1/6 экрана
    width: "100%",
  }
});

export default ScheduleScreen;
