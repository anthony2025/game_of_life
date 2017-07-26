import React, { Component } from 'react'
import Cell from '../components/Cell'

class BoardContainer extends Component {


	render() {
		let grid = Array(900).fill('0').map(item => <Cell />)
		return (
			<div className="BoardContainer">
				{grid}
			</div>
		)
	}
}

export default BoardContainer