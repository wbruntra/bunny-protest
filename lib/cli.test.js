const cli = require('./cli');
const expectedOutput = require('./expectedOutput');

const message = 'How doth the little crocodile Improve his shining tail'

test('get a regular protesting bunny', () => {
  console.log = jest.fn();
  const command = `${message}`;
  const args = command.split(' ');
  cli(args);
  expect(console.log).toHaveBeenCalledWith(expectedOutput.normal);
});

test('get a padless protesting bunny', () => {
  console.log = jest.fn();
  const command = `${message} -p`;
  const args = command.split(' ');
  cli(args);
  expect(console.log).toHaveBeenCalledWith(expectedOutput.padless);
});

test('get a narrow protesting bunny', () => {
  console.log = jest.fn();
  const command =
    `${message} -p -l 10`;
  const args = command.split(' ');
  cli(args);
  expect(console.log).toHaveBeenCalledWith(expectedOutput.narrow);
});
