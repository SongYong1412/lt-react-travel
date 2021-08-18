import { createStore, combineReducers } from 'redux';
import recommendProductsReducer from './recommendProducts/recommendProductsReducer';

const rootReducer = combineReducers({
  recommendProductsReducer
})

const store = createStore(rootReducer);

export default store;