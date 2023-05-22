const BIN = "bin";
const OCT = "oct";
const DEC = "dec";
const HEX = "hex";

function toBin(from, n) {
    let result = "";
    switch (from) {
        case OCT:
            var dec = parseInt(n, 8);
            result = dec.toString(2);
            break;
        case DEC:
            var dec = parseInt(n);
            result = dec.toString(2);
            break;
        case HEX:
            var dec = parseInt(n, 16);
            result = dec.toString(2);
            break;
    }
    return result;
}

function toOct(from, n) {
    let result = "";
    switch (from) {
        case BIN:
            var dec = parseInt(n, 2);
            result = dec.toString(8);
            break;
        case DEC:
            var dec = parseInt(n);
            result = dec.toString(8);
            break;
        case HEX:
            var dec = parseInt(n, 16);
            result = dec.toString(8);
            break;
    }
    return result;
}

function toDec(from, n) {
    let result = "";
    switch (from) {
        case BIN:
            var dec = parseInt(n, 2);
            result = dec.toString(10);
            break;
        case OCT:
            var dec = parseInt(n, 8);
            result = dec.toString(10);
            break;
        case HEX:
            var dec = parseInt(n, 16);
            result = dec.toString(10);
            break;
    }
    return result;
}

function toHex(from, n) {
    let result = "";
    switch (from) {
        case BIN:
            var dec = parseInt(n, 2);
            result = dec.toString(16);
            break;
        case OCT:
            var dec = parseInt(n, 8);
            result = dec.toString(16);
            break;
        case DEC:
            var dec = parseInt(n);
            result = dec.toString(16);
            break;
    }
    return result.toUpperCase();
}

function convert(from, to, n) {
    let result = "";
    if (to === from) {
        return n;
    }
    switch (to) {
        case BIN:
            result = toBin(from, n);
            break;
        case OCT:
            result = toOct(from, n);
            break;
        case DEC:
            result = toDec(from, n);
            break;
        case HEX:
            result = toHex(from, n);
            break;
    }
    return result;
}

function isValidNum(n, base) {
    let flag = false;
    switch (base) {
        case BIN:
            var regex = /^[0-1]+$/;
            flag = regex.test(n);
            break;
        case OCT:
            var regex = /^[0-7]+$/;
            flag = regex.test(n);
            break;
        case DEC:
            var regex = /^[0-9]+$/;
            flag = regex.test(n);
            break;
        case HEX:
            var regex = /^[0-9A-Fa-f]+$/;
            flag = regex.test(n);
            break;
    }
    return flag;
}

function main() {
    let fromEl = document.getElementById("from-base-sel");
    let toEl = document.getElementById("to-base-sel");
    let numEl = document.getElementById("number-entry");

    let outputEl = document.getElementById("output");

    let from = fromEl.value;
    let to = toEl.value;
    let n = numEl.value;

    // slight form validation required
    if (!isValidNum(n, from)) {
        alert("ERROR: INVALID NUMBER ENTERED");
        /* 
        + stop submission of form data
        + display error message to user
        */
    }

    let conversion = convert(from, to, n);

    outputEl.innerHTML = n + " in " + from + " = " + conversion + " in " + to;
}
