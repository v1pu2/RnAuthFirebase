import React, {Component} from 'react';
import {View, Text, StatusBar} from 'react-native';
import Landing from './src/component/auth/Landing';
import Register from './src/component/auth/Register';
import Login from './src/component/auth/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from './src/component/auth/Profile';
import auth from '@react-native-firebase/auth';

const Stack = createStackNavigator();
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      loggedIn: false,
    };
  }
  componentDidMount() {
    auth().onAuthStateChanged((user) => {
      console.log('user', user);
      if (!user) {
        this.setState({loggedIn: false, loaded: true});
      } else {
        this.setState({loggedIn: true, loaded: true});
      }
    });
  }
  render() {
    const {loaded, loggedIn} = this.state;
    if (!loaded) {
      return (
        <View style={{justifyContent: 'center', flex: 1}}>
          <Text>Loading....</Text>
        </View>
      );
    }
    if (!loggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen
              name="Landing"
              component={Landing}
              options={{headerShown: false}}
            />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Profile" component={Profile} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
    return (
      <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
        <Text>User already loggedIn</Text>
        <Profile />
      </View>
    );
  }
}
export default App;
