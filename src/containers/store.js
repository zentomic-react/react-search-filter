import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
//import DevTools from './containers/DevTools';
import reducer from '../reducer';

const createStoreWithMiddleware = compose(
  applyMiddleware(thunk),
  console.log(reducer.availableFields)
  //DevTools.instrument()
)(createStore);

export default createStoreWithMiddleware(reducer);
