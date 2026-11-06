const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

const html = fs.readFileSync('index.html', 'utf8');
const start = html.indexOf('let timer=null,timerEnd=0,timerRemaining=300000,timerRunning=false;');
const end = html.indexOf('let swStart', start);

assert.notEqual(start, -1, 'Countdown timer block must exist in index.html');
assert.notEqual(end, -1, 'Countdown timer block must have a following stopwatch block');

const timerSource = html.slice(start, end);
let now = 1_000_000;
let intervalId = 0;

class FakeDate extends Date {
  static now() {
    return now;
  }
}

const elements = {
  minutes: { value: '0' },
  seconds: { value: '1' },
  timerDisplay: { textContent: '' },
  timerBtn: { textContent: '' }
};

const api = vm.runInNewContext(
  timerSource + '\n({ toggleTimer, pauseTimer, resetTimer, renderTimer, state: () => ({ timerRunning, timerRemaining, timerEnd }) })',
  {
    Date: FakeDate,
    setInterval: () => ++intervalId,
    clearInterval: () => {},
    navigator: { vibrate: () => {} },
    $: (id) => elements[id],
    t: (key) => key,
    toast: () => {}
  }
);

api.resetTimer();
assert.equal(api.state().timerRemaining, 1000, 'Reset should load the entered 1-second duration');

api.toggleTimer();
assert.equal(api.state().timerRunning, true, 'Timer should start');

now += 1000;
api.renderTimer();
assert.equal(api.state().timerRunning, false, 'Timer should stop after reaching zero');
assert.equal(api.state().timerRemaining, 0, 'Completed timer should clear the stored remaining duration');

elements.seconds.value = '5';
api.toggleTimer();
assert.equal(api.state().timerRunning, true, 'Timer should start again');
assert.equal(api.state().timerEnd - now, 5000, 'Restart after expiry must use the newly entered 5-second duration');

api.pauseTimer();
assert.equal(api.state().timerRunning, false, 'Timer should pause');
assert.equal(api.state().timerRemaining, 5000, 'Pause should preserve the remaining duration when no time has elapsed');

console.log('Timer regression test passed.');
