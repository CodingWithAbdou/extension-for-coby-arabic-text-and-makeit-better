




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
  for(let i = 0  ; i < text.length ; i++) {
    if(text[i] == "ڶ" || text[i] == "ڵ"|| text[i] == "ڷ" || text[i] == "ڵ" || text[i] == "ڵ") {
      text[i] = 'ل'
    }
    if(text[i] == "ڤ" || text[i] == "فہٰ ") {
      text[i] = 'ف'
    }
    if(text[i] == "ﻼ" ) {
      text[i] = 'لا'
    }
    if(text[i] == "ﯣ"  || text[i] == 'و') {
      text[i] = 'و'
    }
    if(text[i] == "يٰ"  || text[i] == "ې"  || text[i] == 'ۑ' ) {
      text[i] = 'ي'
    }
    if(text[i] == "ىۧ"  ) {
      text[i] = 'ى'
    }
    if(text[i] == "ګ" ) {
      text[i] = 'ك'
    }
    if(text[i] == "ٱ" ) {
      text[i] = 'ا'
    }
    if(text[i] == "ۃ" ) {
      text[i] = 'ة'
    }
    if(text[i] == "ڕ"  || text[i] == "ڔ") {
      text[i] = 'ر'
    }
    if(text[i] == "غہ" ) {
      text[i] = 'غ'
    }
    if(text[i] == "ہ"  || text[i] == 'ه' ) {
      text[i] = 'ه'
    }
    if(text[i] == "ڪ" ) {
      text[i] = 'ك'
    }
    if(text[i] == "ٺ" ) {
      text[i] = 'ت'
    }
    if(text[i] == "ڛ" ) {
      text[i] = 'س'
    }
    if(text[i] == "؏"  || text[i] == 'عہ') {
      text[i] = 'ع'
    }
 
    if(text[i] == "جہ"  || text[i] == 'جۚ') {
      text[i] = 'ج'
    }
    if(text[i] == "خہ"  || text[i] == 'خۡ') {
      text[i] = 'خ'
    }
    if(text[i] == "حہ"  || text[i] == 'حۡ') {
      text[i] = 'ح'
    }
    if(text[i] == "فُہ " || text[i] == 'ف' ) {
      text[i] = 'ف'
    }
    if(text[i] == "ق" || text[i] == 'ق' ) {
      text[i] = 'ق'
    }
    if(text[i] == "ثہ" || text[i] == 'ثہٰـ'   || text[i] == 'ث'  ) {
      text[i] = 'ث'
    }
    if(text[i] == "طہ" ) {
      text[i] = 'ط'
    }
    if(text[i] == "كُہ" ) {
      text[i] = 'ك'
    }
    if(text[i] == "تہ" ) {
      text[i] = 'ت'
    }
    if(text[i] == "لہ" ) {
      text[i] = 'ل'
    }
    if(text[i] == "يہ"  || text[i] == 'يۧ' ) {
      text[i] = 'ي'
    }
    if(text[i] == "سہ" ) {
      text[i] = 'س'
    }
    if(text[i] == "شہ"  || text[i] == 'ش') {
      text[i] = 'ش'
    }
    if(text[i] == "نۨ"  || text[i] == 'ن') {
      text[i] = 'ن'
    }
    if(text[i] == "مۘ"  || text[i] == 'م') {
      text[i] = 'م'
    }
    if(text[i] == "ذ"  || text[i] == 'ذ') {
      text[i] = 'ذ'
    }
    if(text[i] == "بٰٰ" || text[i] == 'بٰٰ' ) {
      text[i] = 'ب'
    }
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
