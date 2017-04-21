import React, { PropTypes } from 'react'

 const ActiveFilter = ({ label, onRemoveCick }) => (
	<div>
		{ label }
		<a onlick={onRemoveCick}>close</a>
		<style jsx>{`
			div {
				display: inline;
				width: 200px;
				margin: 5px;
				padding: 10px;
				border-style: solid;
				border-width: 1px;
				border-radius: 15px;
				border-color: red;
			}

			a {
				margin-left: 15px;
				font-size : small;
			}
		`}</style>
	</div>
	)

	//ActiveFilter.propTypes = {
	//	label: PropTypes.string.isRequired,
	//	onRemoveCick: PropTypes.func.isRequired
	//}

export default ActiveFilter