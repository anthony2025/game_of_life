const initialState = {grid: Array(30).fill(Array(30).fill(0))}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RESET_BOARD':
      return {
        ...state,
        grid: mapMatrix(state.grid, cell => Math.round(Math.random()))
      }
    case 'CHECK_MATRIX':
      return {
        ...state,
        grid: getNextMatrix(state.grid)
      }
    default:
      return state
  }
}

// x => column, y => row
export const mapMatrix = (matrix, callback) =>
  matrix.map((row, indexRow) =>
    row.map((cell, indexColumn) => callback(cell, indexRow, indexColumn))
  )

export const resetBoard = () => ({
  type: 'RESET_BOARD'
})

const getNextMatrix = oldMatrix => {
  const nextMatrix = Array(30).fill(Array(30).fill(0))
  mapMatrix(oldMatrix, (cell, indexRow, indexColumn) => {
    nextMatrix[indexRow][indexColumn] = getNextCellValue(
      oldMatrix,
      indexRow,
      indexColumn
    )
  })
  console.log('next matrix will be: ', nextMatrix)
  return nextMatrix
}

const getNextCellValue = (grid, indexRow, indexColumn) => {
  let arr = []
  let corX = indexColumn
  let corY = indexRow
  if (corX + BUDDIES[0][0] > 0 && corY + BUDDIES[0][1] > 0) {
    arr.push(grid[corX + BUDDIES[0][0]][corY + BUDDIES[0][1]])
  }
  console.log('Accumulated buddies: ', arr)
}

const BUDDIES = [
  [-1, -1],
  [0, -1],
  [1, -1],
  [-1, 0],
  [1, 0],
  [-1, 1],
  [0, 1],
  [1, 1]
]

export default rootReducer
