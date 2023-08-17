/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bitmap {
    constructor(HexBin) {
        this.HexBin = HexBin;
    }
    isSecondaryBitmap(firstBitmapBit) {
        const firstBitmapBitBin = this.HexBin.hex2Bin(firstBitmapBit);
        if (firstBitmapBitBin[0] == "1") {
            return true;
        }
        else {
            return false;
        }
    }
    getFullBitmap(message, withMTI = false) {
        let hexadecimalBitmap = "";
        let binaryBitmap = null;
        let bitmapPart = "";
        if (withMTI) {
            bitmapPart = message.substring(4);
        }
        else {
            bitmapPart = message;
        }
        let hexadecimalBitmapLength = 0;
        if (this.isSecondaryBitmap(bitmapPart)) {
            hexadecimalBitmapLength = 128 / 4;
        }
        else {
            hexadecimalBitmapLength = 64 / 4;
        }
        hexadecimalBitmap = bitmapPart.substring(0, hexadecimalBitmapLength);
        binaryBitmap = this.HexBin.hex2Bin(hexadecimalBitmap);
        return binaryBitmap;
    }
    getFullBitmapBinaryBitmap(message, withMTI = false) {
        let hexadecimalBitmap = "";
        let binaryBitmap = null;
        let bitmapPart = "";
        if (withMTI) {
            bitmapPart = message.substring(8);
        }
        else {
            bitmapPart = message;
        }
        let hexadecimalBitmapLength = 0;
        if (this.isSecondaryBitmap(bitmapPart)) {
            hexadecimalBitmapLength = 128 / 4;
        }
        else {
            hexadecimalBitmapLength = 64 / 4;
        }
        hexadecimalBitmap = bitmapPart.substring(0, hexadecimalBitmapLength);
        binaryBitmap = this.HexBin.hex2Bin(hexadecimalBitmap);
        return binaryBitmap;
    }
    isDataElementPresent(fullBitmap, element, hexadecmialBitmap = false) {
        if (hexadecmialBitmap) {
            fullBitmap = this.getFullBitmap(fullBitmap);
        }
        if (fullBitmap[element - 1] == "1") {
            return true;
        }
        return false;
    }
}
exports.default = Bitmap;
