import React, {Component} from 'react';
import ReactNative from 'react-native';
import {connect} from 'react-redux';
import * as ProductsAction from '../actions/products';
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

class Products extends Component {

  static navigationOptions = {
    title: "Products"
  };

  constructor(props){
    super(props);
    this.state = {fetching : false}
  }

  componentDidMount(){
    const categoryId = this.props.params.id;
    this.setState({fetching :true});
    this.props.fetchProducts(categoryId).then(() => {
      this.setState({ fetching :false} );
    });
  }

  products(){
    return Object.keys(this.props.fetchedProducts).map(key => this.props.fetchedProducts[key]);
  }

  render(){
    return <View style ={styles.scene} >
    <ScrollView style ={styles.scrollSection} >
      {!this.state.fetching && this.products().map((product) => {

        return <TouchableHighlight key = {product.id} >
          <View>
            <Image source = {{ uri: product.productImage }} style = {styles.resultImage} />
            <Text style ={styles.resultText} >
              {product.productName}
            </Text>
          </View>
        </TouchableHighlight>

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
    fetchedProducts: state.fetchedProducts,
    params: state.nav.routes[state.nav.index].params,
  }),
  dispatch => bindActionCreators(ProductsAction, dispatch)
)(Products);
