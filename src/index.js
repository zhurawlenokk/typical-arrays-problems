exports.min = function min(array) {
  if (Array.isArray(array) === false) {
    return 0

  } else if (array === undefined) {
    return 0

  } else if (array.length === 0) {
    return 0

  } else {
    let newArr = array.filter(item => {
      if (item < 0) {
        return item
      }
    })

    let min = newArr.reduce((acc,val)=> (acc < val) ? acc:val);

    return min

  }
}






exports.max = function max(array) {
  if (Array.isArray(array) === false) {
    return 0

  } else if (array === undefined) {
    return 0

  } else if (array.length === 0) {
    return 0

  } else {
    let newArr = array.filter(item => {
      if (item > 0) {
        return item
      }
    })

    console.log(newArr);

    let max = newArr.reduce((acc,val) => (acc > val) ? acc:val);

    return max

  }

}


exports.avg = function avg(array) {

  if (Array.isArray(array) === false) {
    return 0

  } else if (array === undefined) {
    return 0

  } else if (array.length === 0) {
    return 0

  } else {
    let sum = array.reduce((sum, cur) => sum + cur);
    let result = sum/array.length;
    return result;
  }

}









