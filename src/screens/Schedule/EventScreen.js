import React from 'react';
import { View, Text } from 'react-native';
import InfoRow from '../../components/InfoRow';

const EventScreen = ({navigation}) => {
  const {item} = navigation.state.params;
  return <View style={{
    flex: 1,
    padding: 16,
    
  }}>
    <InfoRow label="Название" value={item.title}/>
    {item.description && <InfoRow label="Описание" value={item.description}/>}
    <InfoRow label="Время" value={`${item.startTime} – ${item.endTime}`}/>
  </View>
}

export default EventScreen;