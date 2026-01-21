const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  description: String,
  quantity: Number,
  price: Number,
  total: Number
});

const InvoiceSchema = new mongoose.Schema(
  {
    invoiceNumber: { type: String, unique: true },
    date: Date,
    customer: String,
    items: [ItemSchema],
    total: Number,
    status: {
      type: String,
      enum: ['CREATED', 'UPDATED'],
      default: 'CREATED'
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Invoice', InvoiceSchema);
