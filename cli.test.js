const cli = require('./cli');

const output = `|￣￣￣￣￣￣￣|
| HOW DOTH THE |
|    LITTLE    |
|   CROCODILE  |
|  IMPROVE HIS |
| SHINING TAIL |
|＿＿＿＿＿＿＿|
(__/) ||
(•ㅅ•)||
/ 　 づ`;

const padlessOutput = `|￣￣￣￣￣￣￣|
| HOW DOTH THE |
| LITTLE |
| CROCODILE |
| IMPROVE HIS |
| SHINING TAIL |
|＿＿＿＿＿＿＿|
(__/) ||
(•ㅅ•)||
/ 　 づ`;

const narrowOutput = `|￣￣￣￣￣￣|
| HOW DOTH |
| THE LITTLE |
| CROCODILE |
| IMPROVE |
| HIS |
| SHINING |
| TAIL |
|＿＿＿＿＿＿|
(__/) ||
(•ㅅ•)||
/ 　 づ`;

test('get a regular protesting bunny', () => {
  console.log = jest.fn();
  const command = 'How doth the little crocodile Improve his shining tail';
  const args = command.split(' ');
  cli(args);
  expect(console.log).toHaveBeenCalledWith(output);
});

test('get a padless protesting bunny', () => {
  console.log = jest.fn();
  const command = 'How doth the little crocodile Improve his shining tail -p';
  const args = command.split(' ');
  cli(args);
  expect(console.log).toHaveBeenCalledWith(padlessOutput);
});

test('get a narrow protesting bunny', () => {
  console.log = jest.fn();
  const command =
    'How doth the little crocodile Improve his shining tail -p -l 10';
  const args = command.split(' ');
  cli(args);
  expect(console.log).toHaveBeenCalledWith(narrowOutput);
});
