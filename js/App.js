  import React from 'react';
  import {
    Button,
    Image,
    Platform,
    StyleSheet,
    Text,
    View,
  } from 'react-native';
  import { TabNavigator } from 'react-navigation';
  import { MaterialIcons } from '@expo/vector-icons';

  class MyChatScreen extends React.Component {

    static navigationOptions = {
      tabBarLabel: 'Chat',
      tabBarIcon: ({ tintColor }) => (<MaterialIcons name="chat" size={32} color={tintColor} />),
    };

    render() {
      return (
        <Button
          onPress={() => this.props.navigation.navigate('Notifications')}
          title="Notifications"
        />
      );
    }
  }

  class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
      tabBarLabel: 'Notification',
      tabBarIcon: ({ tintColor }) => (<MaterialIcons name="notifications" size={32} color={tintColor} />),
    };

    render() {
      return (
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Chat"
        />
      );
    }
  }

  const styles = StyleSheet.create({
    icon: {
      width: 26,
      height: 26,
    },
  });

  export default  MyApp = TabNavigator({
    Chat: {
      screen: MyChatScreen,
    },
    Notifications: {
      screen: MyNotificationsScreen,
    },
  }, {
    tabBarOptions: {
      activeTintColor: (Platform.OS === 'ios') ? '#007AFF' : '#00bcd4',
      activeBackgroundColor: (Platform.OS === 'ios') ? 'transparent' : 'white',
      inactiveTintColor: (Platform.OS === 'ios') ? '#616161' : 'white',
      inactiveBackgroundColor: (Platform.OS === 'ios') ? 'transparent' : 'white',
      showIcon: true,
      showLabel: true,
      labelStyle: {
        fontSize: 10,
      },
    },
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    initialRouteName: 'Notifications',
  });
