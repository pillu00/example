  /**
  * Sample React Native App
  * https://github.com/facebook/react-native
  * @flow
  */

  import React, { Component } from 'react';
  import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    FlatList
  } from 'react-native';
  import Bananas from './app/components/bananas';
  import LotsOfGreetings from './app/components/LotsOfGreetings';
  import BlinkApp from './app/components/Blink';
  import PizzaTranslator from './app/components/PizzaTranslator';
  import ButtonBasics from './app/components/ButtonBasics';
  import Movies from './app/components/Movies'

  export default class example extends Component {
    render() {
      return (
        <ScrollView>
        <View style={styles.container}>
        <Text style={styles.welcome}>
        Welcome to React Native!
        </Text>
        <LotsOfGreetings/>
        <Text style={styles.instructions}>
        BANANA......
        </Text>
        <Text style={styles.instructions}>
        Press Cmd+R to reload,{'\n'}
        Cmd+D or shake for dev menu
        </Text>
        <Movies/>
        <BlinkApp/>
        <Bananas/>
        <PizzaTranslator/>
        <ButtonBasics/>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
        </View>
        </ScrollView>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });

  AppRegistry.registerComponent('example', () => example);
