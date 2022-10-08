function select(value) {
    if(value == 10) {
        decimal.disabled = false;
    }else if (value != 10) {
        decimal.disabled = true;
    }

    if (value == 2) {
        binario.disabled = false;
    }else if (value != 2) {
        binario.disabled = true;
    }

    if (value == 8) {
        octal.disabled = false;
    }else if (value != 8) {
        octal.disabled = true
    }

    if (value == 16) {
        hexadecimal.disabled = false;
    }else if (value != 16) {
        hexadecimal.disabled = true;
    }
}

function convertDec() {
    let decimal = parseInt(document.getElementById('decimal').value, 10);
    document.getElementById('binario').value = decimal.toString(2);
    document.getElementById('octal').value = decimal.toString(8);
    document.getElementById('hexadecimal').value = decimal.toString(16);
}

function convertBin() {
    let binario = parseInt(document.getElementById('binario').value, 10);
    document.getElementById('decimal').value = parseInt(binario, 2);
    document.getElementById('octal').value = parseInt(binario, 2).toString(8);
    document.getElementById('hexadecimal').value = parseInt(binario, 2).toString(16);
}

function convertOct() {
    let octal = parseInt(document.getElementById('octal').value, 10);
    document.getElementById('decimal').value = parseInt(octal, 8);
    document.getElementById('binario').value = parseInt(octal, 8).toString(2);
    document.getElementById('hexadecimal').value = parseInt(octal, 8).toString(16);
}

function convertHex() {
    let hexadecimal = document.getElementById('hexadecimal').value;
    document.getElementById('decimal').value = parseInt(hexadecimal, 16);
    document.getElementById('binario').value = parseInt(hexadecimal, 16).toString(2);
    document.getElementById('octal').value = parseInt(hexadecimal, 16).toString(8);
}

function converter() {
    if (bases.value == 10) {
        convertDec();
    }

    if (bases.value == 2) {
        convertBin();
    }

    if (bases.value == 8) {
        convertOct();
    }

    if (bases.value == 16) {
        convertHex();
    }
}

