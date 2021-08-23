import { createStore, combineReducers, applyMiddleware } from 'redux';
import recommendProductsReducer from './recommendProducts/recommendProductsReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  recommendProductsReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>
export default store;