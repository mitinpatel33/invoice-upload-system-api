const { parseFile } = require('../services/fileParser.service');
const { validateRow } = require('../services/validation.service');
const { transformInvoices } = require('../services/invoiceTransform.service');
const { createOrUpdateInvoice } = require('../services/invoiceProcessor.service');

exports.uploadInvoices = async (req, res) => {
  const rows = await parseFile(req.file.path);

  const invoiceSet = new Set();
  const validRows = [];

  rows.forEach(row => {
    const errors = validateRow(row, invoiceSet);
    row.Errors = errors.join(', ');
    if (!errors.length) {
      invoiceSet.add(row['Invoice Number']);
      validRows.push(row);
    }
  });

  const invoices = transformInvoices(validRows);
  const results = [];

  for (const invoice of invoices) {
    const saved = await createOrUpdateInvoice(invoice);
    results.push(saved);
  }

  res.json({
    totalRows: rows.length,
    processedInvoices: results.length,
    rows
  });
};
