function produceDrivingRange(blockRange) {
  return function(start, end) {
    let start = parseInt(start);
    let end = parseInt(end);
    let distance = Math.abs(start - end)
    let difference = num - distance

    if (difference > 0) {
      return 'within range of ${difference}'
    }
    else {
      return `${Math.abs(difference)} blocks out of range`
    }
  };
}
