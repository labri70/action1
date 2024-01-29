module.exports = {
  input: 'tokens/figma-tokens.json', // Update with the actual path to your Figma tokens JSON file
  output: 'json/transformed-tokens.json', // Update with the desired output path
  transformers: [
    {
      type: 'rename',
      key: 'FigmaName',
      newKey: 'NewName'
    },
    // Add more transformers as needed
  ]
};
