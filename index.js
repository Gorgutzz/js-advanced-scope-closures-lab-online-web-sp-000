function produceDrivingRange(blockRange) {
  return function(start, end) {
    return drivingCalculator * blockRange;
  };
}
