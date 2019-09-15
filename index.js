function produceDrivingRange(blockRange) {
  return function(drivingCalculator) {
    return drivingCalculator * blockRange;
  };
}
