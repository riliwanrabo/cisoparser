const utils = {};

utils.padRightWithZero = (str) => {
  if (str.length === 1) {
    return str + "0";
  }
  return str;
};

utils.getAsciiLengthIndicator = (string) => String.fromCharCode(string);

module.exports = utils;
