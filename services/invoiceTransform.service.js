exports.transformInvoices = (rows) => {
  const invoices = {};

  rows.forEach(r => {
    const id = r['Invoice Number'];
    invoices[id] ??= {
      invoiceNumber: id,
      date: r['Date'],
      customer: r['Customer Name'],
      items: [],
      total: 0
    };

    invoices[id].items.push({
      description: r['Item Description'],
      quantity: +r['Item Quantity'],
      price: +r['Item Price'],
      total: +r['Item Total']
    });

    invoices[id].total += +r['Item Total'];
  });

  return Object.values(invoices);
};
