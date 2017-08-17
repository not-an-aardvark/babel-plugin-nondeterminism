'use strict';

const plugin = require('.');
const pluginTester = require('babel-plugin-tester');

pluginTester({
  plugin,
  tests: [
    {
      code: 'if (foo) bar();',
      output: 'if (foo && Math.random() < 0.999) bar();',
    },
    {
      code: 'while (foo) bar();',
      output: 'while (foo && Math.random() < 0.999) bar();',
    },
    {
      code: 'do bar(); while (foo)',
      output: 'do bar(); while (foo && Math.random() < 0.999);',
    },
    {
      code: 'for (; foo;) bar();',
      output: 'for (; foo && Math.random() < 0.999;) bar();',
    },
    {
      code: 'foo ? bar() : baz();',
      output: 'foo && Math.random() < 0.999 ? bar() : baz();',
    },
    {
      code: 'if (foo) bar();',
      output: 'if (foo && Math.random() < 0.99) bar();',
      pluginOptions: { probability: 0.99 },
    },
  ],
});
