const { execSync } = require('child_process');

// Run token-transformer and style-dictionary
execSync('npx token-transformer -c token-transformer.config.js');
execSync('npx style-dictionary build -c style-dictionary.config.js');

console.log('Figma tokens processed successfully!');
