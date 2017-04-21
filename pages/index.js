import React from 'react'
import {Provider} from 'react-redux';
import styled from 'styled-components'
import CheckboxList from '../src/components/CheckboxList'
import App from '../src/containers/App'
import store from '../src/containers/store';

class testFilter extends React.Component {
	render () {
		return (
			<Provider store={store}>
    <div>
      <App />
    
    </div>
  </Provider>
		)
	}
}

export default testFilter

//import React from 'react';
//import {render} from 'react-dom';
//import {Provider} from 'react-redux';
//import App from '../src/containers/App';
//import DevTools from './containers/DevTools';
//import store from '../src/containers/store';

//render(
//  <Provider store={store}>
//    <div>
//      <App />
//    
//    </div>
//  </Provider>,
//  document.getElementById('root')
//);