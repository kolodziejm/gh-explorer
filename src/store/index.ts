import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducer';

const storeMiddleware = composeWithDevTools(applyMiddleware(thunk));

export default createStore(rootReducer, storeMiddleware);
