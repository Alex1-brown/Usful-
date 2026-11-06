const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

const html = fs.readFileSync('index.html', 'utf8');
const start = html.indexOf('function evaluateCalcExpression(expr){');
const end = html.indexOf('function updateCalcResult(){', start);

assert.notEqual(start, -1, 'Calculator expression evaluator must exist');
assert.notEqual(end, -1, 'Calculator evaluator must end before result rendering');

const evaluatorSource = html.slice(start, end);
const context = {};
const evaluate = vm.runInNewContext(
  evaluatorSource + '\nevaluateCalcExpression;',
  context
);

const cases = [
  ['2+3', 5],
  ['2+3*4', 14],
  ['(2+3)*4', 20],
  ['200+10%', 220],
  ['200-10%', 180],
  ['200*10%', 20],
  ['200/10%', 2000],
  ['5%', 0.05],
  ['', 0]
];

for (const [expression, expected] of cases) {
  assert.equal(
    evaluate(expression),
    expected,
    `Unexpected result for ${JSON.stringify(expression)}`
  );
}

assert.equal(Number.isFinite(evaluate('1/0')), false, 'Division by zero must be non-finite so the UI can show an error');
assert.throws(() => evaluate('globalThis.pwned=1'), 'Code-like input must not execute');
assert.equal(context.pwned, undefined, 'The evaluator must not mutate the global context');

console.log('Calculator regression tests passed.');
