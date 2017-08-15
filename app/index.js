import React, { Component } from "react";
import { Text } from "react-native";
import { Provider, connect } from "react-redux";
import { addNavigationHelpers } from "react-navigation";
import { AppNavigator } from './reducers/navigation'

import getStore from "./store";


@connect(state => ({
    nav: state.nav
}))
class AppWithNavigationState extends Component {
    render() {
        return (
            <AppNavigator
                navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav
                })}
            />
        );
    }
}

const store = getStore();
console.log(store.getState());

export default function App() {
    return (
        <Provider store={store}>
            <AppWithNavigationState />
        </Provider>
    );
}
