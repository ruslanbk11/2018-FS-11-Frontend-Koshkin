const getReadableSize = require('./getReadableSize');

describe('check returning value', () => {
  test('it returns', () => {
    expect(getReadableSize(1000)).toBeDefined();
  });
  test('its a string', () => {
    expect(typeof getReadableSize(1000)).toBe('string');
  });
  test("is 5555 a 1 kb??? I don't think so", () => {
    expect(getReadableSize(5555)).not.toBe('1.000 kB');
  });
  test('returns kb', () => {
    expect(getReadableSize(2048)).toBe('2.000 kB');
  });
  test('returns Mb', () => {
    expect(getReadableSize(1048576)).toBe('1024.000 MB');
  });
  test('returns correct type B', () => {
    expect(getReadableSize(10).split(' ')[1]).toBe('B')
  });
  test('returns correct type kB', () => {
    expect(getReadableSize(10000).split(' ')[1]).toBe('kB')
  });
  test('returns correct type GB', () => {
    expect(getReadableSize(100000000000).split(' ')[1]).toBe('GB')
  });
});

describe('check wrong argument types', () => {
  test('lets try undefined', () => {
    expect(() => getReadableSize()).toThrow('No arguments were passed');
  });
  test('can it be string?', () => {
    expect(getReadableSize('13975')).not.toBe(true);
  });
  test('may be array?', () => {
    expect(getReadableSize([15, 6, 32, 20])).toBe(false);
  });
  test('i think it can not be object', () => {
    expect(getReadableSize({key: 17})).toBe(false);
  });
});
