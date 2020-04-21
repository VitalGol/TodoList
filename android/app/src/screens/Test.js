import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';

// const myIcon = <Icon name="rocket" size={30} color="#900" />;

export default class Test extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 36,
            fontFamily: 'Lobster-Regular',
          }}>
          Todo List1
        </Text>
        <Text style={styles.title}>Todo List</Text>
        <Icon name="ios-add" size={50} color="#4F8EF7" />
        <FontAwesome name="plus" size={50} color="#4F8EF7" />
        <FontAwesome5 name="plus" size={50} color="#4F8EF7" />
        <Octicons name="plus" size={50} color="#4F8EF7" />
        {/* <Icon name="plus" size={30} color="#000000" /> */}
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

  title: {
    fontFamily: 'NunitoSans',
    fontSize: 36,
    // fontWeight: '900',
    color: colors.black,
    paddingHorizontal: 64,
  },
});
