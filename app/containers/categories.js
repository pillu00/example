import React, {Component} from 'react';
import ReactNative from 'react-native';
import {connect} from 'react-redux';
//import { ActionCreators } from '../actions';
import * as CategoriesAction from '../actions/categories';
import { bindActionCreators } from 'redux';

const {
  ScrollView,
  View,
  TextInput,
  Text,
  Image,
  TouchableHighlight,
  StyleSheet,
} = ReactNative

class Categories extends Component {

  static navigationOptions = {
        title: "Home"
    };

  constructor(props){
    super(props);
    this.state = {fetching : false}
  }

  componentDidMount(){
    this.setState({fetching :true});
    this.props.fetchCategories().then(() => {
      this.setState({ fetching :false} );
    });
  }

  categories(){
    return Object.keys(this.props.fetchedCategories).map(key => this.props.fetchedCategories[key]);
  }

  render(){
    return <View style ={styles.scene} >
      <View style = {styles.headerSection}>
        <Text>Categories</Text>
        {/* <TouchableHighlight onPress = {() => this.getCategories()} >
          <Text>Get Categories</Text>
        </TouchableHighlight> */}
      </View>
      <ScrollView style ={styles.scrollSection} >
        {!this.state.fetching && this.categories().map((category) => {
          return <View key = {category.id}>
            <Image source = {{ uri: category.imageURL }} style = {styles.resultImage} />
            <Text style ={styles.resultText} >
              {category.categoryName}
            </Text>
          </View>
        })}
        {this.state.fetching ? <Text>Fetching....</Text> : null}
      </ScrollView>
    </View>
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    marginTop: 20,
  },
  headerSection: {
    height: 30,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    padding: 5,
  },
  scrollSection: {
    flex: 0.8,
  },
  resultImage: {
    height: 150,
  },
  resultText: {
    backgroundColor: '#000',
    color: '#FFF',
    height: 20
  },
});

export default connect(
    state => ({
        fetchedCategories: state.fetchedCategories
    }),
    dispatch => bindActionCreators(CategoriesAction, dispatch)
)(Categories);
