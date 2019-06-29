import {createStackNavigator} from 'react-navigation';
import ScheduleScreen from './ScheduleScreen';
import EventScreen from './EventScreen';

const ScheduleNavigation = createStackNavigator({
  Schedule: {
    screen: ScheduleScreen,
    navigationOptions: {
      title: "Расписание"
    }
  },
  Event: {
    screen: EventScreen,
    navigationOptions: ({navigation}) => ({
      title: navigation.state.params.item.title
    })
  }
})

export default ScheduleNavigation;