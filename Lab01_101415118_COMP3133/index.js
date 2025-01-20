const fs = require('fs');
const csv = require('csv-parser');

// File paths
const inputFile = 'input_countries.csv';
const canadaFile = 'canada.txt';
const usaFile = 'usa.txt';

// Delete existing files if they exist
if (fs.existsSync(canadaFile)) {
  fs.unlinkSync(canadaFile);
  console.log(`${canadaFile} deleted.`);
}

if (fs.existsSync(usaFile)) {
  fs.unlinkSync(usaFile);
  console.log(`${usaFile} deleted.`);
}

// Function to write filtered data to a file
function writeToFile(file, data) {
  fs.appendFileSync(file, data, 'utf8');
}

// Read the CSV file and filter data
fs.createReadStream(inputFile)
  .pipe(csv())
  .on('data', (row) => {
    if (row.country === 'Canada') {
      writeToFile(canadaFile, `${row.country},${row.year},${row.population}\n`);
    } else if (row.country === 'United States') {
      writeToFile(usaFile, `${row.country},${row.year},${row.population}\n`);
    }
  })
  .on('end', () => {
    console.log('CSV file successfully processed.');
  });