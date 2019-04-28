const getReadableSize = require('./getReadableSize');

describe('check returning value', () => {
  test('it returns', () => {
    expect(getReadableSize(1000)).toBeDefined();
  });
  test('its a string', () => {
    expect(typeof getReadableSize(1000)).toBe('string');
  });
  test('argument cannot be less than 0', () => {
    expect(getReadableSize(-1)).toBe(false);
  });
  test('5555 is not 1 KB', () => {
    expect(getReadableSize(5555)).not.toBe('1.000 KB');
  });
  test('returns kb', () => {
    expect(getReadableSize(2048)).toBe('2.000 KB');
  });
  test('returns Mb', () => {
    expect(getReadableSize(1048576)).toBe('1024.000 MB');
  });
  test('returns correct type B', () => {
    expect(getReadableSize(10).split(' ')[1]).toBe('B')
  });
  test('returns correct type kB', () => {
    expect(getReadableSize(10000).split(' ')[1]).toBe('KB')
  });
  test('returns correct type GB', () => {
    expect(getReadableSize(100000000000).split(' ')[1]).toBe('GB')
  });
});

describe('check wrong argument types', () => {
  test('argument cannot be undefined', () => {
    expect(() => getReadableSize()).toThrow('No arguments were passed');
  });
  test('argument cannot be a string', () => {
    expect(getReadableSize('13975')).not.toBe(true);
  });
  test('argument cannot be an array', () => {
    expect(getReadableSize([15, 6, 32, 20])).toBe(false);
  });
  test('argument cannot be an object', () => {
    expect(getReadableSize({key: 17})).toBe(false);
  });
});
