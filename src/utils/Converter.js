const startingHorizontalBreak = ["*", "-", "_"];

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
  return `<ul><li > ${str}</li>`;
};

const getFistCharacter = (line = "") => {
  const splitLine = [...line];
  return splitLine[0];
};

const addClosingTag = (currentFirstChar, lastFirstChar) => {
  if (lastFirstChar === "-" && currentFirstChar !== "-") return "</ul>";
  return "";
};

const convertForMultipleWord = (
  html,
  firstLetter,
  previousListFirsChar,
  words = [],
  prevLine
) => {
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
      console.log("need to verify", firstLetter);
      return `${html}<p>${words[1]}</p>`;
  }
  return html;
};

export const getConvertedString = (line = "", prevLine = "") => {
  const wordsInArray = line.split(" ");

  const previousListFirsChar = getFistCharacter(prevLine);
  let currentFirstChar = wordsInArray[0][0];
  let html = addClosingTag(currentFirstChar, previousListFirsChar);
  if (wordsInArray.length < 2) {
    return convertForSingleWord(
      html,
      currentFirstChar,
      previousListFirsChar,
      wordsInArray[0],
      prevLine
    );
  } else {
    return convertForMultipleWord(
      html,
      currentFirstChar,
      previousListFirsChar,
      wordsInArray,
      prevLine
    );
  }
};
