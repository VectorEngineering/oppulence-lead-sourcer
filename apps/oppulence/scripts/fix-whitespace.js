const fs = require('fs');
const path = require('path');
const glob = require('glob');

function fixIrregularWhitespace(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    // Replace irregular whitespace with regular space
    const fixed = content.replace(/[\u00A0\u1680\u2000-\u200A\u202F\u205F\u3000]/g, ' ');
    fs.writeFileSync(filePath, fixed);
}

const files = glob.sync('app/**/*.{ts,tsx}', { cwd: process.cwd() });
files.forEach(file => {
    const fullPath = path.join(process.cwd(), file);
    fixIrregularWhitespace(fullPath);
}); 