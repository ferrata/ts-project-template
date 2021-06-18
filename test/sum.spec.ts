import { sum } from '../src/index';

describe('dummy test', () => {
  it('works', async () => {
    const r = await sum(2, 2);
    expect(r).toEqual(4);
  });
});
