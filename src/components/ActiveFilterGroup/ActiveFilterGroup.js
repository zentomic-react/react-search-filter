import React, { PropTypes } from 'react'
import ActiveFilter from '../ActiveFilter/ActiveFilter'

const ActiveFilterGroup = ({ id, name, options, onRemoveFilterClick, onClearGroupClick }) => (
	<div>
		{ name } : 
		{ options.map(options => <ActiveFilter label={options.label} onRemoveCick={() => onRemoveFilterClick} />) }
		<a onclick={onClearGroupClick}>Close Group</a>
		<style jsx> {`
			div {
				width: 380px;
				margin: 15px;
				padding: 20px;
				border-style: solid;
				border-width: 1px;
				border-radius: 15px;
				border-color: blue;
			}

			a {
				margin-left: 15px;
				font-size : small;
			}
		`}</style>
	</div>
	)

export default ActiveFilterGroup