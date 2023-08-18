/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable max-len */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };

// Object.defineProperty(exports, "__esModule", { value: true });
import hexbin_1 from "./engine/hexbin.js";

const HexBin = new hexbin_1();
import bitmap_1 from "./engine/bitmap.js";
import pack_1 from "./engine/pack.js";
import unpack_1 from "./engine/unpack.js";
class Main {
  constructor(optionalConfig = null) {
    this.optionalConfig = optionalConfig;
  }
  pack(mti, dataElements, options = null) {
    //TODO: Add options such as null MTI and more
    let response = {};
    response.error = false;
    const Pack = new pack_1(dataElements, this.optionalConfig);
    Pack.setDataElements();
    if (mti !== null) {
      Pack.setMTI(mti);
    }
    const binaryBitmap = Pack.binaryBitmap;
    const dataElementPart = Pack.dataElementPart;
    const theMTI = Pack.MTI;
    const secondaryBitmapValue = Pack.secondaryBitmapBit;
    const secondaryBitmap = secondaryBitmapValue == "1" ? true : false;
    const hexadecimalBitmap = HexBin.binaryCharactersToHex(binaryBitmap);
    const isoMessage = `${theMTI}${hexadecimalBitmap}${dataElementPart}`;
    response.binaryBitmap = binaryBitmap;
    response.hexadecimalBitmap = hexadecimalBitmap;
    response.secondaryBitmap = secondaryBitmap;
    response.dataElementPart = dataElementPart;
    response.mti = theMTI;
    response.isoMessage = isoMessage;
    return response;
  }
  packWithBinaryBitmap(mti, dataElements, options = null) {
    //TODO: Add options such as null MTI and more
    let response = {};
    response.error = false;
    const Pack = new pack_1(dataElements, this.optionalConfig);
    Pack.setDataElements();
    if (mti !== null) {
      Pack.setMTI(mti);
    }
    let binaryBitmap = Pack.binaryBitmap;
    let dataElementPart = Pack.dataElementPart;
    let theMTI = Pack.MTI;
    let secondaryBitmapValue = Pack.secondaryBitmapBit;
    let secondaryBitmap = secondaryBitmapValue == "1" ? true : false;
    let hexadecimalBitmap = HexBin.binaryCharactersToHex(binaryBitmap);
    let binBitmap = Buffer.from(hexadecimalBitmap, "hex").toString("binary");
    let isoMessage = `${theMTI}${binBitmap}${dataElementPart}`;
    let isoMessageBytes = Buffer.concat([
      Buffer.from(theMTI, "utf8"),
      Buffer.from(binBitmap, "binary"),
      Buffer.from(dataElementPart, "utf8"),
    ]);
    response.binaryBitmap = binaryBitmap;
    response.hexadecimalBitmap = hexadecimalBitmap;
    response.binBitmap = binBitmap;
    response.secondaryBitmap = secondaryBitmap;
    response.dataElementPart = dataElementPart;
    response.mti = theMTI;
    response.isoMessage = isoMessage;
    response.isoMessageBytes = isoMessageBytes;
    return response;
  }
  packSubFieldWithHexadecimalBitmap(dataElements, config = null) {
    //TODO: Add options such as null MTI and more
    let response = {};
    response.error = false;
    let Pack = new pack_1(dataElements, config ? config : this.optionalConfig);
    Pack.setDataElements();
    const binaryBitmap = Pack.binaryBitmap;
    const dataElementPart = Pack.dataElementPart;
    const secondaryBitmapValue = Pack.secondaryBitmapBit;
    const secondaryBitmap = secondaryBitmapValue == "1" ? true : false;
    const hexadecimalBitmap = HexBin.binaryCharactersToHex(binaryBitmap);
    const isoMessage = `${hexadecimalBitmap}${dataElementPart}`;
    response.binaryBitmap = binaryBitmap;
    response.hexadecimalBitmap = hexadecimalBitmap;
    response.secondaryBitmap = secondaryBitmap;
    response.dataElementPart = dataElementPart;
    response.isoMessage = isoMessage;
    return response;
  }
  packSubFieldWithBinaryBitmap(dataElements, config = null) {
    //TODO: Add options such as null MTI and more
    let response = {};
    response.error = false;
    let Pack = new pack_1(dataElements, config ? config : this.optionalConfig);
    Pack.setDataElements();
    let binaryBitmap = Pack.binaryBitmap;
    let dataElementPart = Pack.dataElementPart;
    let secondaryBitmapValue = Pack.secondaryBitmapBit;
    let secondaryBitmap = secondaryBitmapValue == "1" ? true : false;
    let hexadecimalBitmap = HexBin.binaryCharactersToHex(binaryBitmap);
    let binBitmap = Buffer.from(hexadecimalBitmap, "hex").toString("binary");
    let isoMessage = `${binBitmap}${dataElementPart}`;
    let isoMessageBytes = Buffer.concat([
      Buffer.from(binBitmap, "binary"),
      Buffer.from(dataElementPart, "utf8"),
    ]);
    response.binaryBitmap = binaryBitmap;
    response.hexadecimalBitmap = hexadecimalBitmap;
    response.binBitmap = binBitmap;
    response.secondaryBitmap = secondaryBitmap;
    response.dataElementPart = dataElementPart;
    response.isoMessage = isoMessage;
    response.isoMessageBytes = isoMessageBytes;
    return response;
  }
  unpack(message, options = null) {
    //TODO: Add options such as null MTI and more
    let MTILength = 4;
    let theMTI = message.substr(0, 4);
    let Bitmap = new bitmap_1(HexBin);
    let fullBitmap = Bitmap.getFullBitmap(message, true);
    let secondaryBitmap = fullBitmap.length > 64 ? true : false;
    let dataElementPart = message.substring(
      fullBitmap.length / 4 + MTILength,
      message.length
    );
    let Unpack = new unpack_1(fullBitmap, dataElementPart, this.optionalConfig);
    Unpack.getDataElements();
    let dataElements = Unpack.dataElements;
    const response = {
      error: false,
      dataElementPart: dataElementPart,
      binaryBitmap: fullBitmap,
      secondaryBitmap: secondaryBitmap,
      dataElements: dataElements,
      mti: theMTI,
    };
    return response;
  }
  unpackWithBinaryBitmap(message, options = null) {
    //TODO: Add options such as null MTI and more
    let response;
    response.error = false;
    let MTILength = 8;
    let hexMessageWithLength = Buffer.from(message, "hex").toString("hex");
    let hexMessage = hexMessageWithLength.substr(4);
    // console.log('meassge: '+hexMessage);
    let hexMTI = hexMessage.substr(0, 8);
    let theMTI = Buffer.from(hexMTI, "hex").toString("utf8");
    let Bitmap = new bitmap_1(HexBin);
    let fullBitmap = Bitmap.getFullBitmapBinaryBitmap(hexMessage, true);
    let secondaryBitmap = fullBitmap.length > 64 ? true : false;
    let dataElementPart = hexMessage.substring(
      fullBitmap.length / 4 + MTILength,
      message.length
    );
    // console.log('dataelementpath: '+ dataElementPart);
    // let dataElementPartUTF8 = Buffer.from(dataElementPart,'hex').toString('utf8');
    // console.log('data Utf8'+dataElementPartUTF8);
    let Unpack = new unpack_1(fullBitmap, dataElementPart, this.optionalConfig);
    Unpack.getDataElements(true);
    let dataElements = Unpack.dataElements;
    response.dataElementPart = dataElementPart;
    response.binaryBitmap = fullBitmap;
    response.secondaryBitmap = secondaryBitmap;
    response.dataElements = dataElements;
    response.mti = theMTI;
    return response;
  }
  unpackSubfieldWithBinaryBitmap(message, options = null) {
    //TODO: Add options such as null MTI and more
    let response;
    response.error = false;
    let Bitmap = new bitmap_1(HexBin);
    let hexMessage = message;
    let fullBitmap = Bitmap.getFullBitmapBinaryBitmap(hexMessage);
    let secondaryBitmap = fullBitmap.length > 64 ? true : false;
    let dataElementPart = hexMessage.substring(
      fullBitmap.length / 4,
      message.length
    );
    let Unpack = new unpack_1(
      fullBitmap,
      dataElementPart,
      options ? options : this.optionalConfig
    );
    Unpack.getDataElements(true);
    let dataElements = Unpack.dataElements;
    response.dataElementPart = dataElementPart;
    response.binaryBitmap = fullBitmap;
    response.secondaryBitmap = secondaryBitmap;
    response.dataElements = dataElements;
    return response;
  }
}
export default Main;
