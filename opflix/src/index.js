import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import MainScreen from './pages/main';
import FiltrarCategoria from './pages/filtrarCategoria';
import FiltrarData from './pages/filtrarData';
import SignInScreen from './pages/signin';

const AuthStack = createStackNavigator ({
  Sign: {
    screen: SignInScreen
  }
});

  const MainNavigator = createBottomTabNavigator(
    {
    Home: {
      screen: MainScreen,
    },
    Data: {
      screen: FiltrarCategoria,
    },
    Categoria: {
      screen: FiltrarData,
    },
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      inactiveBackgroundColor: '#3780FF',
      activeBackgroundColor: '#005DFF',
      inactiveTintColor:'#FFFFFF',
      activeTintColor:'#FFFFFF',
      style: {
        width: '100%',
        height: 50,
      },
    },
  },
  );

export default createAppContainer(createSwitchNavigator(
  {
    MainNavigator,
    AuthStack    
  }, {
    initialRouteName: 'AuthStack',
  }
));
