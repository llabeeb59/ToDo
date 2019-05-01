import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import Title from './components/Title';
import Footer from './components/Footer';
import Input from './components/Input'
import { store } from './store/Store'

export default class App extends React.Component {
  addItem = () => {
    return
  }
  
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Title>ToDo: do it today!</Title>
          <Input placeholder='Enter Item to add' onSubmit={this.addItem} />
          <Footer>Remove completed Items</Footer>
        </View>
      </Provider>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
