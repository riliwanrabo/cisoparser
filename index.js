import iso8583 from "ciso8583";
import HexBin from "ciso8583/src/hexbin";

let isopacker = new iso8583();

let networkMTI = "0800";

let dataElements = {
  7: "0626203521",
  11: "000001",
  12: "203504",
  13: "0626",
  70: "301",
};

let packedMessage = isopacker.pack(networkMTI, dataElements);

console.log(packedMessage);
