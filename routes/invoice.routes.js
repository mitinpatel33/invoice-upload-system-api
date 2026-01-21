const router = require('express').Router();
const upload = require('../middlewares/upload.middleware');
const controller = require('../controllers/invoice.controller');

/**
 * @swagger
 * /api/invoices/upload:
 *   post:
 *     summary: Upload and process invoice file
 *     consumes:
 *       - multipart/form-data
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: File processed successfully
 */
router.post('/upload', upload.single('file'), controller.uploadInvoices);

module.exports = router;
