exports.validateRow = (row, seenInvoices) => {
  const errors = [];

  if (!row['Invoice Number']) errors.push('Invoice Number required');
  if (!row['Date'] || isNaN(Date.parse(row['Date'])))
    errors.push('Invalid Date');

  ['Total Amount','Item Quantity','Item Price','Item Total']
    .forEach(f => {
      if (isNaN(Number(row[f]))) errors.push(`${f} must be numeric`);
    });

  if (seenInvoices.has(row['Invoice Number']))
    errors.push('Duplicate Invoice Number');

  return errors;
};
