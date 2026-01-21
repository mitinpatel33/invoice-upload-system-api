const { validateRow } = require('../services/validation.service');

test('invalid date detected', () => {
  const errors = validateRow({ Date: 'abc' }, new Set());
  expect(errors.length).toBeGreaterThan(0);
});
