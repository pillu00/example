import {combineReducers} from 'redux';
import {fetchedCategories} from './categories';


export default function getRootReducer(navReducer) {
    return combineReducers({
        nav: navReducer,
        fetchedCategories
    });
}
