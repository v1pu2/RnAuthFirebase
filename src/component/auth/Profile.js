import React, {Component} from 'react';
import {View, Text, TextInput, Button, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleSignout = () => {
    console.log('in profile sigout', this.props.navigation);
    auth().signOut();
    this.props.navigation.navigate('Login');
  };

  render() {
    return (
      <View>
        <Button title="Sign Out" onPress={() => this.handleSignout()} />
      </View>
    );
  }
}
export default Profile;
