const pad = (pad, str) => {
  if (typeof str === 'undefined') return pad;
  return (str + pad).substring(0, pad.length);
};

const getLines = (message, maxLength) => {
  const lines = [];
  let words = message.split(' ');
  let newLine = [];
  let newWord;
  while (words.length > 0) {
    newWord = words[0].slice(0, maxLength);
    if ([...newLine, newWord].join(' ').length <= maxLength) {
      newLine = [...newLine, words[0]];
      words = words.slice(1);
    } else {
      const lineString = newLine.join(' ');
      lines.push(lineString);
      newLine = [];
    }
  }
  lines.push(newLine.join(' '));
  return lines;
};

const hoistMessage = (
  message = '',
  lineLength = 12,
  nopad = false
) => {
  const words = message.split(' ');
  const divisions = getLines(message, lineLength);
  const longestLine = Math.max(divisions.map(l => l.length));
  const messageLines = divisions.map(line => {
    let l, marginL, marginR;
    if (nopad) {
      line.toUpperCase();
    } else {
      marginL = Math.round((lineLength - line.length) / 2);
      marginR = Math.floor((lineLength - line.length) / 2);
      l = ' '.repeat(marginL) + line.toUpperCase() + ' '.repeat(marginR);
    }
    return `| ${l} |`;
  });
  const bars = lineLength / 2 + Math.floor(lineLength / 8);
  const top = `|${'￣'.repeat(bars)}|`;
  let lines = [top].concat(messageLines);
  const bottom = `|${'＿'.repeat(bars)}|`;
  lines.push(bottom);
  const result = `${lines.join('\n')}
(\__/) ||
(•ㅅ•)||
/ 　 づ`;
  if (result.length > 140) {
    console.log(`Too long for twitter! Result is ${result.length} characters`);
  } else {
    console.log(result);
  }
};

module.exports = hoistMessage;
