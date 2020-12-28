import React, {Component} from 'react';
import {View, Text, StatusBar} from 'react-native';
import Landing from './src/component/auth/Landing';
import Register from './src/component/auth/Register';
import Login from './src/component/auth/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCll3SKaqsh0JfH35oAiKzztU5il2bHMOs',
  authDomain: 'rnauth-demo.firebaseapp.com',
  projectId: 'rnauth-demo',
  storageBucket: 'rnauth-demo.appspot.com',
  messagingSenderId: '132986380639',
  appId: '1:132986380639:web:eaf0d915937361b368d6ea',
  measurementId: 'G-GWWXWYFG0R',
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
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
    firebase.auth().onAuthStateChanged((user) => {
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
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
    return (
      <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
        <Text>User already loggedIn</Text>
      </View>
    );
  }
}
export default App;
