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