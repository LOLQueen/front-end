import { memoize } from 'ramda';

export const SCALE = memoize((n) => {
  return `${n >= 0 ? fibonacci(n + 2) : 1 / fibonacci(-n + 2)}rem`;
});

function fibonacci(n) {
  return (function loop(f1, f2, i) {
    return i === n ? f1 : loop(f2, f1 + f2, i + 1);
  })(0, 1, 0);
}
