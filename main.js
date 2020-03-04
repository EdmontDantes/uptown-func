/******************
 * YOUR CODE HERE *
 ******************/

const call = function(thatFunction) {
  thatFunction();
}

const callTwice = function(thatFunction) {
  thatFunction();
  thatFunction();
}

const callXTimes = function(thatFunction, xTimesToCallNum) {
  for(let i = xTimesToCallNum; i > 0; i--) {
    thatFunction()
  }
}

const returnFromFunc = function(thatFunction) {
  return thatFunction();
}

const modifyString = function(str, thatFunction) {
  return thatFunction(str);
}

const modifyNumber = function(number, thatFunction) {
  return thatFunction(number);
}

const modifyAnything = function(anyTypeValue, thatFunction) {
  return thatFunction(anyTypeValue);
}

const twoFuncs = function(thatFirstFunction, thatSecondFunction) {
  return thatSecondFunction(thatFirstFunction());
}

const threeFuncs = function(thatFirstFunction, thatSecondFunction, thatThirdFunction) {
  return thatThirdFunction(thatSecondFunction(thatFirstFunction()));
}

const twoValues = function(valueOne, valueTwo, thatOnlyOneFunction) {
  return thatOnlyOneFunction(valueOne, valueTwo);
}

const twoValuesRTL = function(valueTwo, valueOne, thatOnlyOneFunction, ) {
  return thatOnlyOneFunction(valueOne, valueTwo);
}
/********************************
 * OUR CODE HERE - DON'T TOUCH! *
 ********************************/

if (typeof call === 'undefined') {
  call = undefined;
}

if (typeof callTwice === 'undefined') {
  callTwice = undefined;
}

if (typeof callXTimes === 'undefined') {
  callXTimes = undefined;
}

if (typeof returnFromFunc === 'undefined') {
  returnFromFunc = undefined;
}

if (typeof modifyString === 'undefined') {
  modifyString = undefined;
}

if (typeof modifyNumber === 'undefined') {
  modifyNumber = undefined;
}

if (typeof modifyAnything === 'undefined') {
  modifyAnything = undefined;
}

if (typeof twoFuncs === 'undefined') {
  twoFuncs = undefined;
}

if (typeof threeFuncs === 'undefined') {
  threeFuncs = undefined;
}

if (typeof twoValues === 'undefined') {
  twoValues = undefined;
}

if (typeof twoValuesRTL === 'undefined') {
  twoValuesRTL = undefined;
}


module.exports = {
  call,
  callTwice,
  callXTimes,
  returnFromFunc,
  modifyString,
  modifyNumber,
  modifyAnything,
  twoFuncs,
  threeFuncs,
  twoValues,
  twoValuesRTL,
}
