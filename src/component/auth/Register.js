import React, {Component} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import firebase from 'firebase';
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
    };
    this.onRegister = this.onRegister.bind(this);
  }
  onRegister() {
    const {email, password, name} = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        console.log('result', result);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }
  render() {
    return (
      <View>
        <TextInput
          placeholder="name"
          onChangeText={(name) => this.setState({name})}
        />
        <TextInput
          placeholder="email"
          onChangeText={(email) => this.setState({email})}
        />
        <TextInput
          placeholder="password"
          secureTextEntry={true}
          onChangeText={(password) => this.setState({password})}
        />
        <Button title="Sign up" onPress={() => this.onRegister()} />
      </View>
    );
  }
}
export default Register;
