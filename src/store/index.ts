import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

const storeMiddleware = composeWithDevTools(applyMiddleware(thunk));

export default createStore(rootReducer, storeMiddleware);
