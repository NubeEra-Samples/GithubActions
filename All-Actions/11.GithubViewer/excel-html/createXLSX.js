const XLSX = require('xlsx');

// Sample data
const data = [
  { Name: 'Alice', Age: 30, City: 'New York' },
  { Name: 'Bob', Age: 25, City: 'Los Angeles' },
  { Name: 'Charlie', Age: 35, City: 'Chicago' },
];

// Create a new workbook and a new worksheet
const workbook = XLSX.utils.book_new();
const worksheet = XLSX.utils.json_to_sheet(data);

// Append the worksheet to the workbook
XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

// Write the workbook to a file
XLSX.writeFile(workbook, 'sample.xlsx');

console.log('Sample XLSX file created: sample.xlsx');