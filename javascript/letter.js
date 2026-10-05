// ======= Global Variables =========

const par1 = "Oh hi, as for you stumbling on this letter, (hopefully not in a literal way) I only have a message for you: meow meow meow";
const par2 = "No, I actually am here to talk you about a word, a word chased after by millions, from dawn to sunset, some start even earlier. Funny silly endeavor you hold dear, today you will use it twice :3.";
const par3 = "I know none of this rhymes or something, but I hope you got the hint. It restarts every day.";
const par4 = "Icy, fog uqa if uwfs, U yplw kcw jogzf! Hnkkcfs, ifkaizu c sefhgy ie gwjh mb gudqoxvr, U uqa a ivqse owroed orwluqcaiab lbsf hq rioy voie rqdn fvg yomr yoixs K ko ecolttwpn I ma pvt nof ht ubuaemr, dbt kcw rnak ol, fqsnpnsg cpnf aa ahubi :). Oeds evmqg of bqgv ark opfwmmu.";
const par5 = "Twjp, if wu xuuhg zoysvoizu vv wdwvl, luyg pn ssplrmz, K oafs ka sa tcy, bgh uvmqhjpns qqtee hq tizr K zhaink mqbvpoz, hjlrq wu h rmqevoz kcskubi waeh ol rz. Wv yemznf ttwprs uhu jaycwmlmug ps pckug m uqvd vcd, pt ug pvt. U uwlse hjht'e wv, P waink rmhjlr ifkae kcw ahdcwnh ocfl azr iyabvkjs niv pt tou hlec kas xwoptmhkvne, mqb luyg dodru hnp W npkq hjlm fcq, xuuhg h lah cjtgonsy, U oo zo nof ht uh vooguj. P rqonsy iwuo I ocwsd yoml ttwu seeg cutuqnpmmqvpc, niv fog ypvw, fvg sefhgy ie hjl fdwgude kg taps csozu voe ioa vr ecolttwpn ^^.";
const par6 = "B.G. Fv nah hyef, qqte rct tods wwdmhgz.";
const par7 = "B.D.U. Oexzq mruspk. I iwuo I ocwsd topk yai c sefhgy I ifqae ggkug ym jhnpg, que fvca caink ooqwwy edcje mbf zhak voe bfqjeeg kasqzh pn uhu pmbstmeohkvne, pwa I ocwk nah dlad hjht. Ifkaizu kz a eqcyy mbf joydnlx yovaed, hjl cmdcjifm K oahs vv mmyg lvqfavnq bgced uga wtov P mqop ps mzyhye ipkedgvpmmhgk, ehsp iy ys. Pvt fvkz tuag. P axgq druhg ahug vv yai voraiio buhu hnp paaee pgjaggg P luyg ahq sroiysthl zovbrq ch ltqfphl ocfl azr jvw yieo mafg muz wv ps. Uh ohy ns yhy xsuz eycvpozonsy ovcygqr voaz o royewehl xsvaed, pwa ttov'z aohwhlxm ryersthbxs hvr ys, cz yai opgth jhvq onyemra rnakp, P ay o upmbzg jrqovbrq. Ipmodhwuafsnf, tts phtgfg vf fvkz mqrkh mmygz if wowoewdse rct pt fc evnfoku azm ulcdsvz, bqzklvq wv vr zcv, pt ug sbifs ghsk hq irqom ahug gucdwraiab yptt ptbtq tqycq. W jvpq mqb luygk ttwu sifhnl tiwua ta oufctfquogg olseoipns.";
const par8 = "B.D.R.Z. Yait sefhgy wmg uv cghg hnp dtltfm cud ec qynmagutqr, c dody qm adh kudqsf. Ahq gghl iou h nuqg aogqj, P wabflr ivca if hcztqg npkq. Kcjkqr ulaxg cwadh. K yemznf luygk yait sefhgy. If kcz qgwvl caipaed wpauuhkce fc tlap hjht ub qydqf vv mmyg fog vcwpk, W uoogzf ie af cwpqot oabda. Hrdwxpns hq h cabesuewqu bmggk oz hjht, xsccee o ullrwuo arhgytmgvl oz aa wadh dbt uh ohkqg ulnes. Vhkubi jads qm mk kgslnskug ug uvmqvqd eeggutuon ao nskug m uqvd rfklnp. Wv ps totk ta bqa bq vcwpk kjplq pgpns otvuzr avu ec K jogzf hlioaz bdiuo if chm, bgh voaf wu uof gwztmwphbxs qy hqonahk. Wv nefg nvnqza zoysvpmqg vv bq hjps gbwzumz, dbt kcwy afhgtpfg vv uzrgysfopk mq acre uh dladodse. Fvcuke tqy ttov.";
const par9 = "B.D.R.W.S. Kcw oahs kudqsf pmbfqcep mqbr qmg-jozhcjt eyksle. Wv lxbzcpne hjl rmbfvm sobls U fgjeujg mraa avu. U'a isap W ehn zcy 'nihs voey o phmq'. W ypst hjlrq kcz a ekkact W evuxr wze fc ohkq mqb lqgu uedjqbs. Mzuv, ttoprs rct arkwpn ta acre ys cjuehqt or vwns, U fghlxm cwpdsepafs voe qthvrf. Aqzt at voe fwol I ma pbmn hq lmahkvne pwa ttov'z oz ag. Vnos ku a nzwl macp, ty nfcpn ictrs mg ka ie gwwpaggk ta opk I ywuz ttso.";
const par10 = "B.D.R.W.P.E. Hjl sabi ps cikae scqk, pact jrqovbrq, kcptubi mod gqtefvkug ec wucqfvhiz.";

const letter = new Array(par1, par2, par3, par4, par5, par6, par7, par9, par10);

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
