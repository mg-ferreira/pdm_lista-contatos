import React from 'react';
import navigator from './src/navigation/navigator';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import reducer from './src/store/reducer';

const rootReducer = combineReducers({
  contacts: reducer
})

const store = createStore(rootReducer)

export default function App() {
  return (
    <Provider store={store}>
      {navigator}
    </Provider>
  )
}