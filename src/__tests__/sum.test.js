import { sum } from '../sum.js';

test('sums correctly', () => {
  expect(sum(1, 2)).toMatchSnapshot();
});
