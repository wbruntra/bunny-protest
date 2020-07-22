// Confirm the package can actually be run

const { exec } = require('child_process')
const packageJson = require('./package.json')
const cliPath = packageJson.bin.bunnyprotests
const { commandline } = require('./lib/expectedOutput')
const message = 'How doth the little crocodile Improve his shining tail'

test('no funny business when running with node', () => {
  exec(`node ${cliPath} ${message}`, (error, stdout, stderr) => {
    console.log = jest.fn()
    console.log(stdout)
    expect(console.log).toHaveBeenCalledWith(commandline)
  })
})
