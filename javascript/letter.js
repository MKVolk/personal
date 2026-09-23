// ======= Global Variables =========

const par1 = "Oh hi, as for you stumbling on this letter, (hopefully not in a literal way) I only have a message for you: meow meow meow";
const par2 = "No, I actually am here to talk you about a word, a word chased after by millions, from dawn to sunset, some start even earlier. Funny silly endeavor you hold dear, today you will use it twice :3";
const par3 = "I know none of this rhymes or something, but I hope you got the hint.";
const par4 = "Bcn, rvz ufm py ulrz, N yexd dcl vvzzu! Tudkrrz, bfzmpsu r elyhvk px glvo fb vgkjomhy, N ufm h bvfel hwgalw ogisnqrmptb anzy hf dphy kapx rfpu yvv kvfr napqs Z wv xcdxamwez P fa eha gou ta nbjmlfr, sna dcl dutk dx, mjscbulg rbuy ap monbx :2. Ojfv vvrsj ff gsjm awm rgfbopl.";
const par5 = "Mwyb, py wj jbnhv lvrskapsu kh dwwkx, snyv bu lsexyfz, Z ahys zm zt trk, izh jhtjhybul qfflx hf fpsr Z loticw tjbkbvs, hyxyj wj t yfqthvs krernbx ihxh dx ys. Wk klfzcr amwedz nhj vhrclysfuv bz iczgn f ufhk ocs, ba ng eha. N ulxzx hyta'x wk, B dticw yfhyxy bfzml dcl mowclzo hcux hsr xkhuvzvz gik ba moj tsxc zmz qwdbafhzhux, mfn snyv pvwrj tui W cbrj hyxt ycf, jbnhv t sth rvazocef, N od lv gou ta nh kavzuy. B yjocef bwja P hclek robx amwj elxg rganqcbtfqkbj, gik rvz yehd, yvv elyhvk px hyx mwwvgkx kv fhis revsu kal bop hy xcdxamwez ^^.";
const par6 = "UG. Uh uth wkly, qffl kci fvws likfhvl, fti dtf wstxpas rg hhhlts qskmlw cevl N od hu yvv fvtr.";

const letter = new Array(par1, par2, par3, par4, par5, par6);

// ========= Setup ===========
composeSetup(letter);

// ========= Letter section ========
function composeSetup(letter) {
    const container = document.getElementById("t_container");

    letter.forEach((text, index) => {
        const paragraph = document.createElement("p");

        paragraph.id = "par" + index;
        paragraph.textContent = text;

        container.appendChild(paragraph);
    });
}

function compose(letter) {

    letter.forEach((ciphertext, index) => {
        const paragraph = document.getElementById("par" + index);
        paragraph.textContent = ciphertext;
    });
}

function composeDecode(letter) {
    const word = document.getElementById("d_input").value;


    letter.forEach((ciphertext, index) => {
        const paragraph = document.getElementById("par" + index);
        paragraph.textContent = decode(ciphertext, word);
    });
}


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

// ====== Decode button =======
document.getElementById("d_button").addEventListener("click", function () {

    const word = document.getElementById("d_input").value;

    if (word.trim() === "") {
        compose(letter);
        return;
    }

    composeDecode(letter);
});


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
