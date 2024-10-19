const startingHorizontalBreak = ["*", "-", "_"];
const regexRules = [
  //bold, italics and paragragh rules
  [/\*\*\s?([^\n]+)\*\*/g, "<b>$1</b>"],
  [/\*\s?([^\n]+)\*/g, "<i>$1</i>"],
  [/__([^_]+)__/g, "<b>$1</b>"],
  [/_([^_`]+)_/g, "<i>$1</i>"],
  //links
  [/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>'],

  //highlights
  [/(`)(\s?[^\n,]+\s?)(`)/g, "<code >$2</code>"],
];

const isLetter = (str) => {
  return /[a-zA-Z]/i.test(str);
};
const convertForSingleWord = (
  html,
  currentFirstChar,
  previousListFirsChar,
  str
) => {
  let strInArray = [...str];

  const strLength = strInArray.length;

  // for horizontal line
  if (startingHorizontalBreak.includes(currentFirstChar)) {
    let astrick = "";
    for (let i = 0; i < strLength; i++) {
      astrick = `${astrick}*`;
    }
    if (str === astrick && strLength > 2) return `${html}<hr />`;
  }
  return `${html}<p>${str}</p>`;
};

const getHtmlForHeading = (headingType, str) => {
  return headingType > 7
    ? `<p>${str}</p>`
    : `<h${headingType}>${str}</h${headingType}>`;
};

const getHtmlForBlockQuote = (str) => {
  return `<blockquote class="black-quote" > ${str}</blockquote>`;
};

const getHtmlForUnOrderList = (str, listOnly = false) => {
  if (listOnly) {
    return `<li > ${str}</li>`;
  }
  return `<ul><li> ${str}</li>`;
};

const getFistCharacter = (line = "") => {
  const splitLine = [...line];
  return splitLine[0];
};

const addClosingTag = (currentFirstChar, lastFirstChar) => {
  if (lastFirstChar === "-" && currentFirstChar !== "-") return "</ul>";
  else if (lastFirstChar === "`") return "</code>";
  return "";
};

const convertForMultipleWord = (
  html,
  firstLetter,
  previousListFirsChar,
  words = [],
  prevLine
) => {
  if (!words[1]) {
    return `${html}<p>${words.join(" ")}</p>`;
  }
  switch (firstLetter) {
    case "#":
      html += getHtmlForHeading(words[0].length, words[1]);
      break;
    case ">":
      html += getHtmlForBlockQuote(words[1]);
      break;
    case "-":
      html += getHtmlForUnOrderList(words[1], previousListFirsChar === "-");
      break;

    default:
      return `${html}<p>${words[1]}</p>`;
  }
  return html;
};

export const getConvertedString = (line = "", prevLine = "") => {
  const previousListFirsChar = getFistCharacter(prevLine);
  let currentFirstChar = getFistCharacter(line);
  let html = addClosingTag(currentFirstChar, previousListFirsChar);

  if (isLetter(currentFirstChar)) {
    html = `${html}<p>${line}</p>`;
  } else {
    const wordsInArray = line.split(" ");

    if (wordsInArray.length < 2) {
      html = convertForSingleWord(
        html,
        currentFirstChar,
        previousListFirsChar,
        wordsInArray[0],
        prevLine
      );
    } else {
      html = convertForMultipleWord(
        html,
        currentFirstChar,
        previousListFirsChar,
        wordsInArray,
        prevLine
      );
    }
  }

  regexRules.forEach(([rule, template]) => {
    html = html.replace(rule, template);
  });
  return html;
};
