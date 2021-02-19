
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  return matrix.map((row, index) => (index & 1) ? row.reverse() : row).flat();
}
