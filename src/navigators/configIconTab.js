import React from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
const configIconTab = ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Home') {
        iconName = `home`;
        
      } else if (routeName === 'Tickets') {
        iconName = `train-ticket`;
        return <Fontisto name={iconName} size={22} color={tintColor} />
      }else if(routeName === 'Notification'){
        iconName = `bell`;
      }else if(routeName === 'Message'){
        iconName = `message-circle`;
      }
      return <Feather name={iconName} size={22} color={tintColor} />;
    },
  })
  export default configIconTab;