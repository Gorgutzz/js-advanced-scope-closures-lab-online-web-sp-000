function produceDrivingRange(blockRange) {
  return function (startBlock, endBlock) {

    let start = parseInt(startBlock);
    let end = parseInt(endBlock);
    let distance = Math.abs(end - start);
    let diff = blockRange - distance;

    if (diff > 0) {
      return `within range by ${diff}`
    } else {
      return `${Math.abs(diff)} blocks out of range`
    }
  }
}
