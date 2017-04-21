import React from 'react';
import { connect } from 'react-redux'
import { addFilter } from '../actionCreators'

let CheckboxList = ({ dispatch }) => {
	return (
		<div>
			<ul>
			<input type='checkbox' name='filter1' onclick={ dispatch(addFilter()) } />Samsung<br />
			<input type='checkbox' name='filter2' onclick={ dispatch(addFilter()) } />LG<br />
			<input type='checkbox' name='filter3' onclick={ dispatch(addFilter()) } />Apple<br />
			</ul>
		</div>
	)
}

CheckboxList = connect(store)(CheckboxList)

export default CheckboxList	