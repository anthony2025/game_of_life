import React, {Component} from 'react'
import Cell from '../components/Cell'
import {connect} from 'react-redux'

class BoardContainer extends Component {
  render() {
    return (
      <div className="BoardContainer">
        {this.props.grid.map(row =>
          row.map((cell, index) => <Cell key={index} />)
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  grid: state.grid
})

export default connect(mapStateToProps)(BoardContainer)
