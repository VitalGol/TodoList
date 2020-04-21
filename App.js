import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from './android/app/src/styles/Colors';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.divider} />
          <Text style={styles.title}>
            Todo
            <Text
              style={{
                fontWeight: '100',
                // color: colors.blue,
                fontFamily: 'Roboto-Thin',
              }}>
              Lists
            </Text>
          </Text>
          <View style={styles.divider} />
        </View>
        <Icon name="ios-add" size={50} color={colors.lightBlue} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  divider: {
    backgroundColor: colors.lightBlue,
    flex: 1,
    alignSelf: 'center',
    height: 1,
  },
  title: {
    fontFamily: 'Roboto-Bold',
    fontSize: 36,
    // fontWeight: '900',
    color: colors.black,
    paddingHorizontal: 64,
  },
  addList: {
    borderWidth: 2,
    borderColor: colors.lightBlue,
    borderRadius: 4,
    padding: 16,
    alignItems: 'center',
  },
});
