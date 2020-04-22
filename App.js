import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from './android/app/src/styles/Colors';
import tempData from './android/app/src/components/tempData';
import TodoList from './android/app/src/components/TodoList';
import AddListModal from './android/app/src/components/AddListModal';

export default class App extends Component {
  state = {
    addTodoVisible: false,
  };

  toggleAddTodoModal() {
    this.setState({addTodoVisible: !this.state.addTodoVisible});
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          visible={this.state.addTodoVisible}
          onRequestClose={() => this.toggleAddTodoModal()}>
          <AddListModal closeModal={() => this.toggleAddTodoModal()} />
        </Modal>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.divider} />
          <Text style={styles.title}>
            Todo
            <Text
              style={{
                fontWeight: '300',
                color: colors.blue,
                fontFamily: 'Roboto-Thin',
              }}>
              Lists
            </Text>
          </Text>
          <View style={styles.divider} />
        </View>
        <View style={{marginVertical: 48}}>
          <TouchableOpacity
            style={styles.addList}
            onPress={() => this.toggleAddTodoModal()}>
            <Icon name="ios-add" size={24} color={colors.blue} />
          </TouchableOpacity>
          <Text style={styles.add}>Add List</Text>
        </View>
        <View style={{height: 275, paddingLeft: 32}}>
          <FlatList
            data={tempData}
            renderItem={({item}) => <TodoList list={item} />}
            keyExtractor={(item) => item.name}
            horizontal={true}
          />
        </View>
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
    paddingHorizontal: 10,
  },
  addList: {
    height: 44,
    width: 44,
    borderWidth: 2,
    borderColor: colors.lightBlue,
    borderRadius: 4,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  add: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.blue,
    marginTop: 5,
  },
});
