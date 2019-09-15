function produceDrivingRange(num) {
  return function (first, second) {
    let start = parseInt(first)
    let end = parseInt(second)
    let distance = Math.abs(start - end)
    let difference = num - distance

    if (difference > 0) {
      return `within range by ${difference}`
    }
    else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}
