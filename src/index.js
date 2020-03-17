
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix === undefined) {
    return [];
  }

  if(!matrix.length) {
    return [];
  }
  
  return matrix.reduce((accum, curr, i) => {
    if(i % 2 !== 0) {
      return accum.concat(curr.reverse());
    } else {
      return accum.concat(curr);
    } 
  }, []);
}
