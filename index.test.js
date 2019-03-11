const bunnyprotests = require('.');

const message = 'everything is awesome and cool';

const longMessage =
  'Jest is a delightful JavaScript Testing Framework with a focus on simplicity';

const standardOutput = `|￣￣￣￣￣￣￣|
|  EVERYTHING  |
|  IS AWESOME  |
|   AND COOL   |
|＿＿＿＿＿＿＿|
(__/) ||
(•ㅅ•)||
/ 　 づ`;

const padlessOutput = `|￣￣￣￣￣￣￣|
| EVERYTHING |
| IS AWESOME |
| AND COOL |
|＿＿＿＿＿＿＿|
(__/) ||
(•ㅅ•)||
/ 　 づ`;

const wideOutput = `|￣￣￣￣￣￣￣￣|
|  EVERYTHING IS |
|   AWESOME AND  |
|      COOL      |
|＿＿＿＿＿＿＿＿|
(__/) ||
(•ㅅ•)||
/ 　 づ`;

test('get a standard protesting bunny', () => {
  console.log = jest.fn();
  bunnyprotests(message);
  expect(console.log).toHaveBeenCalledWith(standardOutput);
});

test('get a padless protesting bunny', () => {
  console.log = jest.fn();
  bunnyprotests(message, 12, true);
  expect(console.log).toHaveBeenCalledWith(padlessOutput);
});

test('get a wide protesting bunny', () => {
  console.log = jest.fn();
  bunnyprotests(message, 14, false);
  expect(console.log).toHaveBeenCalledWith(wideOutput);
});

test('long messages will send an alert', () => {
  console.log = jest.fn();
  bunnyprotests(longMessage);
  const clogcall = console.log.mock.calls[0][0].match(/Too long for twitter!/);
  expect(clogcall).toBeTruthy();
});
