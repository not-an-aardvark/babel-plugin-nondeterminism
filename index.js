'use strict';

module.exports = function nondeterminism(babel) {
  const t = babel.types;

  function makeRandomExpression(opts) {
    return t.binaryExpression(
      '<',
      t.callExpression(
        t.memberExpression(
          t.identifier('Math'),
          t.identifier('random')
        ),
        []
      ),
      t.numericLiteral(typeof opts.probability === 'number' ? opts.probability : 0.999)
    );
  }

  function replaceTest(path, state) {
    path.node.test = t.logicalExpression('&&', path.node.test, makeRandomExpression(state.opts));
  }

  return {
    name: 'nondeterminism',
    visitor: {
      ConditionalExpression: replaceTest,
      DoWhileStatement: replaceTest,
      ForStatement: replaceTest,
      IfStatement: replaceTest,
      WhileStatement: replaceTest,
    },
  };
};
