let par1 = "Oh hi, as for you stumbling on this letter, (hopefully not in a literal way) I only have a message for you: meow meow meow";
let par2 = "";
let par3 = "";
let par4 = "";

let letter = new Array(par1, par2, par3, par4);

function encode(text, word) {
  let result = "";
  let keyIndex = 0;

  for (const char of text) {
    // Encode letters
    if (/[a-zA-Z]/.test(char)) {
      const isUpper = char === char.toUpperCase();
      const base = isUpper ? 65 : 97;

      const shift =
        word.toLowerCase().charCodeAt(keyIndex % word.length) - 97;

      result += String.fromCharCode(
        ((char.charCodeAt(0) - base + shift) % 26) + base
      );

      keyIndex++;
    }

    // Encode numbers
    else if (/[0-9]/.test(char)) {
      const shift =
        word.toLowerCase().charCodeAt(keyIndex % word.length) - 97;

      result += String.fromCharCode(
        ((char.charCodeAt(0) - 48 + shift) % 10) + 48
      );

      keyIndex++;
    }

    // Keep spaces/punctuation unchanged
    else {
      result += char;
    }
  }

  return result;
}


function decode(ciphertext, word) {
  let result = "";
  let keyIndex = 0;

  for (const char of ciphertext) {
    // Decode letters
    if (/[a-zA-Z]/.test(char)) {
      const isUpper = char === char.toUpperCase();
      const base = isUpper ? 65 : 97;

      const shift = word.toLowerCase().charCodeAt(keyIndex % word.length) - 97;

      result += String.fromCharCode(
        ((char.charCodeAt(0) - base - shift + 26) % 26) + base
      );

      keyIndex++;
    }
    // Decode numbers using the same key
    else if (/[0-9]/.test(char)) {
      const shift = word.toLowerCase().charCodeAt(keyIndex % word.length) - 97;

      result += String.fromCharCode(
        ((char.charCodeAt(0) - 48 - shift + 10) % 10) + 48
      );

      keyIndex++;
    }
    // Keep spaces/punctuation unchanged
    else {
      result += char;
    }
  }

  return result;
}




// Debug
console.log(decode("Khoor123", "key"));


// Debug
const encoded = encode("Hello123", "key");
console.log(encoded);
// decodes this
console.log(decode(encoded, "key"));

// =========== Encoder section ==============
document.getElementById("e_button").addEventListener("click", function () {
    const text = String(document.getElementById("e_text").value);
    const word = String(document.getElementById("e_word").value);

    const ciphertext = encode(text, word);

    document.getElementById("t_result").textContent = ciphertext;
});

document.getElementById("ed_button").addEventListener("click", function () {
    const ciphertext = String(document.getElementById("e_text").value);
    const word = String(document.getElementById("e_word").value);

    const text = decode(ciphertext, word);

    document.getElementById("t_result").textContent = text;
});

document.getElementById("t_result_copy").addEventListener("click", function () {
    const text = document.getElementById("t_result").textContent;

    navigator.clipboard.writeText(text);
});
