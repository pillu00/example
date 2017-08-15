import { StackNavigator, NavigationActions } from "react-navigation";

import * as types from '../actions/types';
import Routes from "../config/routes";

export const AppNavigator = StackNavigator(Routes, {
    navigationOptions: {
        title: ({ state }) => {
            if (state.params) {
                return `${state.params.title}`;
            }
        }
    }
});

const initialNavState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Home'));

function navigateAction({ routeName, id }) {
  return NavigationActions.navigate({ routeName, params: { id } });
}

export const navigationReducer = {
  nav: (state = initialNavState, action) => {
    switch (action.type) {
      case 'Navigation/NAVIGATE':
        return AppNavigator.router.getStateForAction(navigateAction(action), state);
      case "Navigation/BACK":
        return AppNavigator.router.getStateForAction(NavigationActions.back(), state);
      default:
        return state;
    }
  },
};
