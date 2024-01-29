module.exports = {
  "source": ["theme/**/*.json"],
  "platforms": {
    "css": {
      "transformGroup": "css",
      "files": [
        {
          "format": "css/variables",
          "destination": "./css/variables.css"
        }
      ]
    }
  }
};
