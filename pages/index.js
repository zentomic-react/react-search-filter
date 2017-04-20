import React from 'react'
import styled from 'styled-components'
import ActiveFilter from '../components/ActiveFilter/ActiveFilter'
import ActiveFilterGroup from '../components/ActiveFilterGroup/ActiveFilterGroup'

class testFilter extends React.Component {
	render () {
		return (
		<div>
			<br />
			<ActiveFilter label='Samsung'></ActiveFilter>
			<br />
			<br />
			<ActiveFilterGroup id='123' name='Brand' 
			                   options={[{label: 'Samsung'}, {label: 'Nokia'}]}>
			</ActiveFilterGroup>
		</div>
		)
	}
}

export default testFilter