const Main = require('./dist/CISO.js')
const config = require('./ciso8583/engine/postbridge-dataelement-config.json');
// const baseMessage = require('./ciso8583/engine/dataelements.json')
// const baseSubFieldMessage = require('./ciso8583/engine/subField-data-elements.json')

const isoParserClass = Main.default;
const isoParser = new isoParserClass()

function padRightWithZero(str) {
    if (str.length === 1) {
        return str + '0';
    }
    return str;
}


const getAsciiLengthIndicator = (string) => (String.fromCharCode(string));

// sign on

const networkObject = {
    MTI: '0800',
    dataElement: {
        '2': null,
        '3': null,
        '4': null,
        '5': null,
        '6': null,
        '7': "0626203550",
        '8': null,
        '9': null,
        '10': null,
        '11': (new Date).getTime().toString().substring(7),
        '12': "203550",
        '13': "0626",
        '14': null,
        '15': null,
        '16': null,
        '17': null,
        '18': null,
        '19': null,
        '20': null,
        '21': null,
        '22': null,
        '23': null,
        '24': null,
        '25': null,
        '26': null,
        '27': null,
        '28': null,
        '29': null,
        '30': null,
        '31': null,
        '32': null,
        '33': null,
        '34': null,
        '35': null,
        '36': null,
        '37': null,
        '38': null,
        '39': null,
        '40': null,
        '41': null,
        '42': null,
        '43': null,
        '44': null,
        '45': null,
        '46': null,
        '47': null,
        '48': null,
        '49': null,
        '50': null,
        '51': null,
        '52': null,
        '53': null,
        '54': null,
        '55': null,
        '56': null,
        '57': null,
        '58': null,
        '59': null,
        '60': null,
        '61': null,
        '62': null,
        '63': null,
        '64': null,
        '65': null,
        '66': null,
        '67': null,
        '68': null,
        '69': null,
        '70': '301',
        "71": null,
        "72": null,
        "73": null,
        "74": null,
        "75": null,
        "76": null,
        "77": null,
        "78": null,
        "79": null,
        "80": null,
        "81": null,
        "82": null,
        "83": null,
        "84": null,
        "85": null,
        "86": null,
        "87": null,
        "88": null,
        "89": null,
        "90": null,
        "91": null,
        "92": null,
        "93": null,
        "94": null,
        "95": null,
        "96": null,
        "97": null,
        "98": null,
        "99": null,
        "100": null,
        "101": null,
        "102": null,
        "103": null,
        "104": null,
        "105": null,
        "106": null,
        "107": null,
        "108": null,
        "109": null,
        "110": null,
        "111": null,
        "112": null,
        "113": null,
        "114": null,
        "115": null,
        "116": null,
        "117": null,
        "118": null,
        "119": null,
        "120": null,
        "121": null,
        "122": null,
        "123": null,
        "124": null,
        "125": null,
        "126": null,
        "127": null,
        "128": null
    }
}

const networkPackedMessageObject = isoParser.pack(
    networkObject.MTI,
    networkObject.dataElement
);

const networkStrLength = getAsciiLengthIndicator(networkPackedMessageObject.isoMessage.length);
console.log('network iso:', `${networkStrLength}${networkPackedMessageObject.isoMessage}`);


// transaction

const xmlICC = '<IccData><IccRequest><AmountAuthorized>000000000051</AmountAuthorized><AmountOther>000000000000</AmountOther><ApplicationInterchangeProfile>3900</ApplicationInterchangeProfile><ApplicationTransactionCounter>0652</ApplicationTransactionCounter><Cryptogram>5BDAE286405034F5</Cryptogram><CryptogramInformationData>80</CryptogramInformationData><CvmResults>440302</CvmResults><IssuerApplicationData>0110A74003020000000000000000000000FF</IssuerApplicationData><TerminalCapabilities>E0F8C8</TerminalCapabilities><TerminalCountryCode>566</TerminalCountryCode><TerminalType>22</TerminalType><TerminalVerificationResult>0020001000</TerminalVerificationResult><TransactionCurrencyCode>566</TransactionCurrencyCode><TransactionDate>202300</TransactionDate><TransactionType>00</TransactionType><UnpredictableNumber>06355711</UnpredictableNumber></IccRequest></IccData>';

const purchaseObject = {
    MTI: '0200',
    dataElement: {
        '2': '5399237059745014',
        '3': '000000',
        '4': '000000005000',
        '5': null,
        '6': null,
        '7': "0731010116",
        '8': null,
        '9': null,
        '10': null,
        '11': "005279",
        '12': "010716",
        '13': "0731",
        '14': '2403',
        '15': null,
        '16': null,
        '17': null,
        '18': '4111',
        '19': null,
        '20': null,
        '21': null,
        '22': '051',
        '23': '539',
        '24': null,
        '25': '00',
        '26': '12',
        '27': null,
        '28': null,
        '29': null,
        '30': null,
        '31': null,
        '32': '000011',
        '33': null,
        '34': null,
        '35': '5399237059745014D2403221010354594',
        '36': '000000005290',
        '37': null,
        '38': null,
        '39': null,
        '40': '226',
        '41': '2030LF16',
        '42': '2UP1LA000004414',
        '43': '               Osogbo MFB               ',
        '44': null,
        '45': null,
        '46': null,
        '47': null,
        '48': null,
        '49': '566',
        '50': null,
        '51': null,
        '52': null,
        '53': null,
        '54': null,
        '55': null,
        '56': '1510',
        '57': null,
        '58': null,
        '59': null,
        '60': null,
        '61': null,
        '62': null,
        '63': null,
        '64': null,
        '65': null,
        '66': null,
        '67': null,
        '68': null,
        '69': null,
        '70': null,
        "71": null,
        "72": null,
        "73": null,
        "74": null,
        "75": null,
        "76": null,
        "77": null,
        "78": null,
        "79": null,
        "80": null,
        "81": null,
        "82": null,
        "83": null,
        "84": null,
        "85": null,
        "86": null,
        "87": null,
        "88": null,
        "89": null,
        "90": null,
        "91": null,
        "92": null,
        "93": null,
        "94": null,
        "95": null,
        "96": null,
        "97": null,
        "98": null,
        "99": null,
        "100": null,
        "101": null,
        "102": null,
        "103": '87001544',
        "104": null,
        "105": null,
        "106": null,
        "107": null,
        "108": null,
        "109": null,
        "110": null,
        "111": null,
        "112": null,
        "113": null,
        "114": null,
        "115": null,
        "116": null,
        "117": null,
        "118": null,
        "119": null,
        "120": null,
        "121": null,
        "122": null,
        "123": '510101511344101',
        "124": null,
        "125": null,
        "126": null,
        "127": null,

        "128": null,
    }
};

let subFieldMessage = {};

subFieldMessage['25'] = xmlICC;

let subIso = isoParser.packSubFieldWithHexadecimalBitmap(subFieldMessage, config['127'].nestedElements);

purchaseObject.dataElement['127'] = subIso.isoMessage;

console.log('subIso', subIso.isoMessage);

const purchasePackedMessageObject = isoParser.pack(
    purchaseObject.MTI,
    purchaseObject.dataElement
);


const purchaseStrlength = getAsciiLengthIndicator(purchasePackedMessageObject.isoMessage.length);

console.log(`${purchaseStrlength}${purchasePackedMessageObject}`);
console.log(purchasePackedMessageObject);

// const _127message = isoParser.unpack(purchasePackedMessageObject.isoMessage).dataElements
