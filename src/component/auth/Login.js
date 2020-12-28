import React, {Component} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import firebase from 'firebase';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.onLogin = this.onLogin.bind(this);
  }
  onLogin() {
    const {email, password} = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log('result in login', result);
      })
      .catch((error) => {
        console.log('error in login', error);
      });
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
