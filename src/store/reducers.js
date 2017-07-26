const initialState = {grid: Array(30).fill(Array(30).fill(0))}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const mapMatrix = (matrix, cb) => matrix.map(row => row.map(cell => cb(cell)))
export default rootReducer
