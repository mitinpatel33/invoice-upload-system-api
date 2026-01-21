exports.createInvoice = async (invoice) => {
  console.log('Creating Invoice:', invoice.invoiceNumber);
  return { success: true };
};
