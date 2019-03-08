const pad = (pad, str) => {
  if (typeof str === 'undefined') return pad;
  return (str + pad).substring(0, pad.length);
};

const defaultMessage = "podcasts don't need ads";

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
      lines.push(newLine.join(' '));
      newLine = [];
    }
  }
  lines.push(newLine.join(' '));
  return lines;
};

const hoistMessage = (message = defaultMessage, lineLength = 12) => {
  const words = message.split(' ');
  const divisions = getLines(message, lineLength).map(line => {
    return '| ' + pad(' '.repeat(lineLength), line.toUpperCase()) + ' |';
  });
  const top = `|${'￣'.repeat(lineLength / 2 + 1)}|`;
  let lines = [top].concat(divisions);
  const bottom = `|${'＿'.repeat(lineLength / 2 + 1)}|`;
  lines.push(bottom);
  const result = `${lines.join('\n')}
(\__/) || 
(•ㅅ•)|| 
/ 　 づ`;
  if (result.length > 140) {
    console.log('Too long for twitter!')
  } else {
    console.log(result);
  }
};

module.exports = hoistMessage;
