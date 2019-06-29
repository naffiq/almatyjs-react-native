import React from 'react';
import {FlatList} from 'react-native';

import TimelineItem from './TimelineItem';

class Timeline extends React.Component {

  navigateToItem = (item) => {
    const {navigate} = this.props.navigation;
    navigate("Event", {item});
  }

  renderItem = ({item}) => {
    return (
      <TimelineItem 
        onPressItem={this.navigateToItem}
        item={item}
      />
    )
  }

  render() {
    const {data} = this.props;
    return (
      <FlatList 
        renderItem={this.renderItem}
        keyExtractor={(_item, idx) => `${idx}`}
        data={data}
        contentContainerStyle={{paddingVertical: 8}}
      />
    );
  }
  
};

export default Timeline;