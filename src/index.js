const MORSE_TABLE = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    "-----": "0"
};

function decode(expr) {
    let letter = "";
    let result = "";
    for (let i = 0; i < expr.length; i += 10) {
        letter = expr.slice(i, i + 10);


        if (letter === "**********") {
            result += " ";
        } else {
            let decodeLetter = "";
            for (let k = 0; k < letter.length; k += 2) {
                let character = letter.slice(k, k + 2);
                if (character === "10") {
                    decodeLetter += ".";
                } else if (character === "11") {
                    decodeLetter += "-";
                }

            }
            result = result + MORSE_TABLE[decodeLetter];
        }
    }
    return result;
}

module.exports = {
    decode
};