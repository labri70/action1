module.exports = {
  source: ['./json/tokens.json'], // Use the same output path as in token-transformer.config.js
  platforms: {
    // Define your style dictionary platforms (e.g., 'css', 'scss', 'android', 'ios', etc.)
    css: {
      transformGroup: 'css',
      buildPath: 'css/',
      files: [{
          destination: 'variables.css',
          format: 'css/variables'
      }]
    }
  },
  // Add more configuration options as needed
};
