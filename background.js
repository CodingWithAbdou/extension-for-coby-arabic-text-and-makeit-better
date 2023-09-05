




chrome.runtime.onInstalled.addListener(async () => {
  chrome.contextMenus.create({
    id: 'one',
    title: "إجعل النص أفضل",
    type: 'normal',
    contexts: ['selection']
  });
});



// Open a new search tab when the user clicks a context menu
chrome.contextMenus.onClicked.addListener(async(item, tab) => {
  
  let text = item.selectionText;
  text = text.replace(/َ|ً|ُ|ٌ|ّ|ٍ|ِ|ْ|ٰ|ٓ|ـ/g, "");
  text = text.replace(new RegExp(String.fromCharCode(1617, 124, 1614, 124, 1611, 124, 1615, 124, 1612, 124, 1616, 124, 1613, 124, 1618), "g"), "");
  
  text = text.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '')
  text = text.split('');
  
  // يمكنك إضافة اي حرف مزخرف لتقوم الاضافة بالغائه
  // الحرف الاول يمثل الحرف الاصلي لا تغيره
  let alpha = [
    ["ا" , "ٱ"],
    ["ب", "بٰٰ"],
    ["ت", "ٺ"],
    ["ث", "ثہٰـ", "ثہ"],
    ["ج", "جۚ", "چ"],
    ["ح", "حۡ", "حہ"],
    ["خ", "خۡ", "خہ"],
    ["د"],
    ["ذ"],
    ["ر", "ڕ", "ڔ"],
    ["ز"],
    ["س", "ڛ", "سہ"],
    ["ش", "شہ"],
    ["ص"],
    ["ض"],
    ["ط", "طہ"],
    ["ظ"],
    ["ع", "؏", "؏"],
    ["غ", "غہ"],
    ["ف", "ڤ", "فہٰ", "فُہ"],
    ["ق"],
    ["ك", "ګ", "ڪ", "كُہ", "گ"],
    ["ل", "ڵ", "ڷ", "ڵ", "ڵ", "لہ" , "ڶ"],
    ["م", "مۘ"],
    ["ن", "نۨ"],
    ["ه", "ہ"],
    ["و", "ﯣ"],
    ["لا", "ﻼ"],
    ["ي", "يٰ", "ې" ,"ۑ"],
    ["ى", "ىۧ", "يۧ"],
    ["ة", "ۃ"],
  ];
  
  // من أجل الحروف المزخرفة
  for(let i = 0  ; i < text.length ; i++) {
    for(let j = 0 ; j < alpha.length ; j++ ) {
      for(let k = 0 ; k < alpha[j].length ; k++ ) {
        if(text[i] == alpha[j][k]) {
          text[i] = alpha[j][0]
        }
      }
    }

      // من أجل الحروف الرموز
    if(text[i] == '!' || text[i] == '?' || text[i] == '@' || text[i] == '#' || text[i] == '$' || text[i] == '%' || text[i] == '^' || text[i] == '&' 
    || text[i] == '*' || text[i] == '(' || text[i] == ')' || text[i] == '_' || text[i] == '-' || text[i] == '+' || text[i] == '=' || text[i] == '`'
    || text[i] == "'" || text[i] == '"' || text[i] == ':' || text[i] == ';' || text[i] == ',' || text[i] == '.' || text[i] == '>' || text[i] == '<'
    || text[i] == "؛" || text[i] == '"ۘ' || text[i] == '"ּ' || text[i] == '"ۡ' || text[i] == '"ۛ' || text[i] == '"ּ' || text[i] == '"' || text[i] == '"ۖ'
    || text[i] == "'" || text[i] == '"' || text[i] == ':' || text[i] == '"ۗ' || text[i] == '"' || text[i] == '"' || text[i] == '"ּ' || text[i] == '"ۧ'
    || text[i] == " ۛ ּ" || text[i] == ' ۖ' || text[i] == ' ּ' || text[i] == ' ۗ' || text[i] == '"ۜ' || text[i] == '"ۗ' || text[i] == ' ۗ' || text[i] == '  '
    || text[i] == ' ۗ' || text[i] == '' || text[i] == "̍" || text[i] == "ۜ" || text[i] == "ۛ" || text[i] == ' ּ' || text[i] == '=' || text[i] == "̍"
    || text[i] == "̍" || text[i] == "ۙ" || text[i] == "ۙ" || text[i] == "ۘ" || text[i] == "̨" || text[i] ==  "ۧ" || text[i] == "ۧ" || text[i] ==  "ۧ"
    || text[i] == "ٰ" || text[i] == "̍" || text[i] == "ۖ" || text[i] == "ۧ" || text[i] == '-' || text[i] == "ۛ" || text[i] == "ּ" || text[i] == "̍"
    || text[i] ==  "ۡ" || text[i] ==  "ۗ" || text[i] ==  "ۡ" || text[i] == "ۛ" || text[i] == '-' || text[i] == '+' || text[i] == '=' || text[i] == '`'
    || text[i] == '~' || text[i] == '|' || text[i] == '•' || text[i] == '√' || text[i] == 'π' || text[i] == '÷' || text[i] == '×' || text[i] == '§'
    || text[i] == '∆' || text[i] == '°' || text[i] == '¥' || text[i] == '€' || text[i] == '¢' || text[i] == '÷' || text[i] == '£' || text[i] == '§'
    || text[i] == '∆' || text[i] == '™' || text[i] == '®' || text[i] == '©' || text[i] == '٪' || text[i] == '÷' || text[i] == '؟' || text[i] == '§'
    || text[i] == '\\' || text[i] == '/' || text[i] == '}' || text[i] == '{' || text[i] == '[' || text[i] == ']' || text[i] == '،' || text[i] == 'ـ') {
      text[i] = ''
    }
  }

  text = text.join('').trim()
  chrome.tabs.sendMessage(tab.id, {message: {title : 'hi' , body : text}});
});

