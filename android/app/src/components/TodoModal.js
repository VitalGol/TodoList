import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../styles/Colors';

export default class TodoModal extends Component {
  state = {
    newTodo: '',
  };

  toggleTodoCompleted = (index) => {
    let list = this.props.list;
    list.todos[index].completed = !list.todos[index].completed;
    this.props.updateList(list);
  };

  addTodo = () => {
    let list = this.props.list;
    list.todos.push({title: this.state.newTodo, completed: false});
    this.props.updateList(list);
    this.setState({newTodo: ''});
  };

  renderTodo = (todo, index) => {
    return (
      <View style={styles.todoContainer}>
        <TouchableOpacity onPress={() => this.toggleTodoCompleted(index)}>
          <Icon
            name={todo.completed ? 'ios-square' : 'ios-square-outline'}
            size={24}
            color={colors.gray}
            style={{width: 32}}
          />
        </TouchableOpacity>
        <Text
          style={[
            styles.todo,
            {
              textDecorationLine: todo.completed ? 'line-through' : 'none',
              color: todo.completed ? colors.gray : colors.black,
            },
          ]}>
          {todo.title}
        </Text>
      </View>
    );
  };

  render() {
    const list = this.props.list;
    const taskCount = list.todos.length;
    const completedCount = list.todos.filter((todo) => todo.completed).length;

    return (
      <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
        <SafeAreaView style={styles.container}>
          <TouchableOpacity
            style={{position: 'absolute', top: 10, right: 30, zIndex: 10}}
            onPress={this.props.closeModal}>
            <Icon name="ios-close" size={50} color={colors.black} />
          </TouchableOpacity>
          <View
            style={[
              styles.section,
              styles.header,
              {borderBottomColor: list.color},
            ]}>
            <View>
              <Text style={styles.title}>{list.name}</Text>
              <Text style={styles.taskCount}>
                {completedCount} of {taskCount} tasks
              </Text>
            </View>
          </View>
          <View style={[styles.section, {flex: 3}]}>
            <FlatList
              data={list.todos}
              renderItem={({item, index}) => this.renderTodo(item, index)}
              keyExtractor={(item) => item.title}
              contentContainerStyle={{
                paddingHorizontal: 32,
                paddingVertical: 64,
              }}
              showsVerticalScrollIndicator={false}
            />
          </View>
          <View style={[styles.section, styles.footer]}>
            <TextInput
              style={[styles.input, {borderColor: list.color}]}
              onChangeText={(text) => this.setState({newTodo: text})}
              value={this.state.newTodo}
            />
            <TouchableOpacity
              style={[styles.addTodo, {backgroundColor: list.color}]}
              onPress={() => this.addTodo()}>
              <Icon name="ios-add" size={24} color={colors.white} />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
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
  section: {
    flex: 1,
    alignSelf: 'stretch',
    marginBottom: 10,
  },
  header: {
    justifyContent: 'flex-end',
    marginLeft: 30,
    borderBottomWidth: 3,
  },
  title: {
    fontSize: 38,
    fontWeight: '800',
    color: colors.black,
  },
  taskCount: {
    marginTop: 5,
    marginBottom: 15,
    color: colors.gray,
    fontWeight: '600',
  },
  footer: {
    paddingHorizontal: 32,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 48,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 5,
    marginRight: 10,
    paddingHorizontal: 10,
  },
  addTodo: {
    borderRadius: 5,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  todoContainer: {
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  todo: {
    color: colors.black,
    fontWeight: '700',
    fontSize: 16,
  },
});
