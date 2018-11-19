#!/usr/bin/env node

var readline = require('readline')

var nativeMessage = require('chrome-native-messaging')

var output = new nativeMessage.Output()

readline.createInterface({
  input: process.stdin,
  output: output,
  terminal: false
}).on('line', function (line) {
  output.write(JSON.parse(line))
})

output.pipe(process.stdout)
