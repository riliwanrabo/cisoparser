const utils = {};

utils.padRightWithZero = (str) => {
  if (str.length === 1) {
    return str + "0";
  }
  return str;
};

utils.getAsciiLengthIndicator = (string) => {
  let length = string.length;

  // Convert the length to a 2-byte ASCII representation
  let highByte = String.fromCharCode(Math.floor(length / 256));
  let lowByte = String.fromCharCode(length % 256);

  return `${highByte}${lowByte}`.toString();
};

utils.getLengthBytes = (length) => {
  // console.log("length "+length.toString());
  const d = length & 0xff;
  // console.log(d);
  const c = length >> 8;
  const array = [c, d];
  return Buffer.from(array, "binary");
};

export default utils;
