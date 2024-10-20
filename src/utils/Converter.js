const startingHorizontalBreak = ["*", "-", "_"];
const startingFirstCharCheck = ["#", ">", "-"];
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
  const restData = words.slice(1).join(" ");

  if (!restData) {
    return `${html}<p>${words.join(" ")}</p>`;
  }

  switch (firstLetter) {
    case "#":
      html += getHtmlForHeading(words[0].length, restData);
      break;
    case ">":
      html += getHtmlForBlockQuote(restData);
      break;
    case "-":
      html += getHtmlForUnOrderList(restData, previousListFirsChar === "-");
      break;

    default:
      return `${html}<p>${restData}</p>`;
  }
  return html;
};

const getHtmlForImages = (str = "") => {
  let index = str.indexOf("![");
  if (index === -1) {
    return str;
  }

  let html = null;
  let alt,
    src,
    title = "";

  if (str.match(/\[(.*?)\]/)) {
    alt = str.match(/\[(.*?)\]/)[1] ?? "";
  }

  let details = str.match(/\((.*?)\)/);
  if (details) {
    let image = details[1].split('"');
    src = image[0] ? image[0] : " ";
    title = image[1] ? image[1] : " ";
  }
  const lastIndex = str.lastIndexOf(")");
  const beforeLink = str.slice(0, index);
  const afterIndex = str.slice(lastIndex + 1);

  html = `${beforeLink}<img src="${src.trim()}" alt="${alt}" title="${title}" className="" />${afterIndex}`;
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
    if (startingFirstCharCheck.includes(currentFirstChar)) {
      html = convertForMultipleWord(
        html,
        currentFirstChar,
        previousListFirsChar,
        wordsInArray,
        prevLine
      );
    } else {
      html = `${html}<p>${line}</p>`;
      html = convertForSingleWord(
        html,
        currentFirstChar,
        previousListFirsChar,
        wordsInArray[0],
        prevLine
      );
    }
  }
  // scan for images
  if (html.indexOf("![") > 0) {
    html = getHtmlForImages(html);
  }

  regexRules.forEach(([rule, template]) => {
    html = html.replace(rule, template);
  });

  return html;
};
