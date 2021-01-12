import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default function Landing({navigation}) {
  console.log('navigation in landing', navigation);
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Button
        title="Register"
        onPress={() => navigation.navigate('Register')}
      />
      <View style={{marginTop: 20}}>
        <Button title="Login" onPress={() => navigation.navigate('Login')} />
      </View>
    </View>
  );
}
