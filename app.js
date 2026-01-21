const express = require('express');
const cors = require('cors');
const swaggerUI = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');
const invoiceRoutes = require('./routes/invoice.routes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/invoices', invoiceRoutes);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

module.exports = app;
