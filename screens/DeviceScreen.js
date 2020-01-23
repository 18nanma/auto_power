import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

export default class DeviceScreen extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text>DeviceScreen</Text>
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  });