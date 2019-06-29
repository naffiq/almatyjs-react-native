import React from 'react';
import { withNavigation } from 'react-navigation';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

class TimelineItem extends React.PureComponent {
  render() {
    const  {item, onPressItem} = this.props;
    return (
      <TouchableOpacity onPress={() => onPressItem(item)}>
        <View style={styles.container}>
          <View style={styles.containerTime}>
            <Text style={styles.textTime}>{item.startTime}</Text>
          </View>
  
          
          <View style={styles.containerContent}>
            <Text style={styles.textTitle}>{item.title}</Text>
            {item.description && <Text style={styles.textDescription}>{item.description}</Text>}
          </View>
          
        </View>
      </TouchableOpacity>
    );
  }
  
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 8
  },
  containerTime: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    flex: 1,
  },
  containerContent: {
    flex: 4,
    paddingVertical: 2
  },

  textTime: {
    padding: 4,
    backgroundColor: "#F7DF1C",
    color: "#000000",
    borderRadius: 4,
  },

  timeDot: {
    width: 16,
    height: 16,
    borderRadius: 16,
    backgroundColor: "#F7DF1C"
  },

  textTitle: {
    color: "#000000",
    fontSize: 16,
    paddingBottom: 4,
    fontWeight: "700"
  },
  textDescription: {

  }
})

// export default withNavigation(TimelineItem);
export default TimelineItem;