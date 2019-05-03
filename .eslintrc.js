module.exports = {
  "env": {
    "browser": true,
    "es6": true,
  },
  "extends": [
    'airbnb',
  ],
  "rules": {
    'react/prefer-stateless-function': 'off',
    'react/jsx-filename-extension': 'off',
    'max-len': ['error', 120, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    "react/forbid-prop-types": 'off',
    'no-unused-expressions': [
      'error',
      {
        allowTernary: true,
      },
    ],
  },
};
