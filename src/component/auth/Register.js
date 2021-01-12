import React, {Component, useEffect} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import auth from '@react-native-firebase/auth';
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

  async onRegister() {
    const {email, password} = this.state;

    try {
      let response = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      if (response) {
        console.log('?????', response);
      }
    } catch (e) {
      console.error(e.message);
    }
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
