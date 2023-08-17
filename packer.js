import Packager from './index.js';
import { ISOUtil, ISOMsg } from 'jspos';


let msg = Packager.createISOMsg();

msg.setMTI('0800');
msg.setField(7, '0626203520');
msg.setField(11, '000001');
msg.setField(12, '203504');
msg.setField(13, '0626');
msg.setField(70, '301');

console.log((msg.pack()));

let msgStr = '08000020000000C00012000105303030303037363431313130303030303131313130303200110000000100300003303031';
let unpackMsg = Packager.createISOMsg();
unpackMsg.unpack(ISOUtil.hex2byte(msgStr));
console.log(ISOUtil.hexString(unpackMsg.pack()));