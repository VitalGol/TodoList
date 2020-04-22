import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Modal} from 'react-native';
import colors from '../styles/Colors';
import TodoModal from './TodoModal';

export default class TodoList extends React.Component {
  state = {
    showListVisible: false,
  };

  toggleListModal() {
    this.setState({showListVisible: !this.state.showListVisible});
  }

  render() {
    const list = this.props.list;
    const completeCount = list.todos.filter((todo) => todo.completed).length;
    const remainingCount = list.todos.length - completeCount;

    return (
      <View>
        <Modal
          animationType="slide"
          visible={this.state.showListVisible}
          onRequestClose={() => this.toggleListModal()}>
          <TodoModal list={list} closeModal={() => this.toggleListModal()} />
        </Modal>
        <TouchableOpacity
          style={[styles.listContainer, {backgroundColor: list.color}]}
          onPress={() => this.toggleListModal()}>
          <Text style={styles.listTitle}>{list.name}</Text>
          <View>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.count}>{completeCount}</Text>
              <Text style={styles.subtitle}>Remaining</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.count}>{remainingCount}</Text>
              <Text style={styles.subtitle}>Completed</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    width: 200,
    paddingVertical: 32,
    paddingHorizontal: 16,
    borderRadius: 5,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  listTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.white,
    marginBottom: 16,
  },
  count: {
    fontFamily: 'Roboto-Thin',
    fontSize: 48,
    fontWeight: '200',
    color: colors.white,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.white,
  },
});
