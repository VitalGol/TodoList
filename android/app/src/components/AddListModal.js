import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../styles/Colors';
import tempData from './tempData';

export default class AddListModal extends Component {
  backgroundColors = [
    '#5cd859',
    '#24a6d9',
    '#595bd9',
    '#8022d9',
    '#d159d8',
    '#d85963',
    '#d88559',
  ];

  state = {
    name: '',
    color: this.backgroundColors[0],
  };

  renderColors() {
    return this.backgroundColors.map((color) => {
      return (
        <TouchableOpacity
          key={color}
          style={[styles.colorSelect, {backgroundColor: color}]}
          onPress={() => this.setState({color})}
        />
      );
    });
  }

  createTodo = () => {
    const {name, color} = this.state;
    tempData.push({name, color, todos: []});
    this.setState({name: ''});
    this.props.closeModal();
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior={'padding'}>
        <TouchableOpacity
          style={{position: 'absolute', top: 10, right: 30}}
          onPress={this.props.closeModal}>
          <Icon name="ios-close" size={50} color={colors.black} />
        </TouchableOpacity>

        <View style={{alignSelf: 'stretch', marginHorizontal: 32}}>
          <Text style={styles.title}>create todo list</Text>

          <TextInput
            style={styles.input}
            placeholder="List Name..."
            onChangeText={(text) => this.setState({name: text})}
          />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 15,
            }}>
            {this.renderColors()}
          </View>

          <TouchableOpacity
            style={[styles.create, {backgroundColor: this.state.color}]}
            onPress={this.createTodo}>
            <Text style={{color: colors.white, fontWeight: '600'}}>
              Create!
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
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
    fontSize: 32,
    fontWeight: '800',
    color: colors.black,
    alignSelf: 'center',
    marginBottom: 16,
  },
  input: {
    height: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.blue,
    borderRadius: 5,
    marginTop: 10,
    paddingHorizontal: 16,
    fontSize: 20,
  },
  create: {
    marginTop: 24,
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  colorSelect: {
    width: 30,
    height: 30,
    borderRadius: 4,
  },
});
