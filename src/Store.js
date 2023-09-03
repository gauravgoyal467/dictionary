import { createStore } from 'redux';
import SearchReducer from './redux/reducers/SearchReducer.js';

const store = createStore(SearchReducer);

export default store;