function retailPriceMaker(manufacturePrice) {
  return function(marketMultiplier) {
    return marketMultiplier * manufacturePrice;
  };
}
