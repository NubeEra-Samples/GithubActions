const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

// Path to the Excel file
const filePath = path.join(__dirname, 'path/to/your/excel/files/yourfile.xlsx'); // Adjust the path

// Read the Excel file
const workbook = XLSX.readFile(filePath);
const sheetName = workbook.SheetNames[0]; // Get the first sheet
const jsonData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

// Convert JSON to HTML
let html = '<table>';
html += '<tr>';
Object.keys(jsonData[0]).forEach(key => {
  html += `<th>${key}</th>`;
});
html += '</tr>';

jsonData.forEach(row => {
  html += '<tr>';
  Object.values(row).forEach(value => {
    html += `<td>${value}</td>`;
  });
  html += '</tr>';
});
html += '</table>';

// Write HTML to a file
fs.writeFileSync('output.html', html);