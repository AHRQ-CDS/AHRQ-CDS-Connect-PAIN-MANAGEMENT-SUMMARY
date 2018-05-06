import sumit from '../../utils/sumit';

const mockObject = {
  'a': [ { 'b': 1 }, { 'c': 2 }, { 'd': 3 } ], // => 3
  'e': { 'f': 4 }, // => 1
  'g': null, // => 0
  'h': [] // => 0
};

it('sums entries correctly', () => {
  expect(sumit(mockObject)).toEqual(4);
});
