function produceDrivingRange(blockRange) {
  return function(start, end) {
    let start = parseInt(startBlock);
    let end = parseInt(endBlock);
    let distance = Math.abs(start - end);
    let difference = blockRange - distance;

    if (difference > 0) {
      return 'within range of ${difference}'
    }
    else {
      return `${Math.abs(difference)} blocks out of range`
    }
  };
}
