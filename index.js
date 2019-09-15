function produceDrivingRange(blockRange) {
  return function(start, end) {
    let start = parseInt(start, 10);
    let end = parseInt(end, 10);

    return drivingCalculator * blockRange;
  };
}
