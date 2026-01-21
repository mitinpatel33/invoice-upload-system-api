const Invoice = require('../models/invoice.model');

exports.createOrUpdateInvoice = async (invoice) => {
  const existing = await Invoice.findOne({
    invoiceNumber: invoice.invoiceNumber
  });

  if (existing) {
    existing.items = invoice.items;
    existing.total = invoice.total;
    existing.status = 'UPDATED';
    await existing.save();
    console.log(`Invoice Updated: ${invoice.invoiceNumber}`);
    return existing;
  }

  const created = await Invoice.create(invoice);
  console.log(`Invoice Created: ${invoice.invoiceNumber}`);
  return created;
};
