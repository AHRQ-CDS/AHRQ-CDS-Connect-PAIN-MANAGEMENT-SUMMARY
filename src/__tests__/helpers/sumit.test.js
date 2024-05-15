import sumit from '../../helpers/sumit';

const mockObject = {
  'a': [ { 'b': 1 }, { 'c': 2 }, { 'd': 3 } ], // => 3
  'e': { 'f': 4 }, // => 1
  'g': null, // => 0
  'h': [] // => 0
};

describe('sumit', () => {
  it('sums entries correctly', () => {
    expect(sumit(mockObject)).toEqual(4);
  });
});
