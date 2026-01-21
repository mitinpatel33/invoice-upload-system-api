const fs = require('fs');
const csv = require('csv-parser');
const XLSX = require('xlsx');

exports.parseFile = (filePath) => {
  if (!filePath) {
    throw new Error('File path is missing');
  }

  if (filePath.endsWith('.csv')) {
    return new Promise((resolve, reject) => {
      const rows = [];
      fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', data => rows.push(data))
        .on('end', () => resolve(rows))
        .on('error', reject);
    });
  }

  if (filePath.endsWith('.xlsx')) {
    const workbook = XLSX.readFile(filePath);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    return XLSX.utils.sheet_to_json(sheet);
  }

  throw new Error('Unsupported file format');
};
