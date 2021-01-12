import React, {Component} from 'react';
import {View, Text, TextInput, Button, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.onLogin = this.onLogin.bind(this);
  }
  async onLogin() {
    const {email, password} = this.state;
    try {
      let response = await auth().signInWithEmailAndPassword(email, password);
      console.log('response in signin ', response);
      if (response && response.user) {
        Alert.alert('Success ✅', 'Authenticated successfully');
      }
    } catch (e) {
      console.error(e.message);
    }
  }

  render() {
    return (
      <View>
        <TextInput
          placeholder="email"
          onChangeText={(email) => this.setState({email})}
        />
        <TextInput
          placeholder="password"
          secureTextEntry={true}
          onChangeText={(password) => this.setState({password})}
        />
        <Button title="Sign in" onPress={() => this.onLogin()} />
      </View>
    );
  }
}
export default Login;
