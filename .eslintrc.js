module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'import', 'react-hooks'],
  extends: [
    'react-app',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  rules: {
    indent: 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    'react/prop-types': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.ts', '.tsx'] }],
    'jsx-a11y/anchor-is-valid': ['error', { components: ['Link'], specialLink: ['to'] }],
    'no-underscore-dangle': ['off'],
    'react/forbid-prop-types': ['off'],
    'import/prefer-default-export': ['off'],
    'jsx-a11y/label-has-for': ['error', { required: { every: ['id'] } }],
    'no-unused-expressions': ['error', { allowTaggedTemplates: true }],
    'comma-dangle': ['error', 'never'],
    'react/jsx-no-bind': ['off'],
    'react/destructuring-assignment': ['off'],
    'react/jsx-one-expression-per-line': ['off'],
    'function-paren-newline': 'off',
    'react/no-array-index-key': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never'
      }
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        'devDependencies': [
          '**/*.test.tsx',
          '**/*.spec.tsx',
          'src/test-utils/**/*.ts',
          'src/test-utils/**/*.tsx',
          'src/setupTests.ts'
        ]
      }
    ]
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        'no-undef': ['off']
      }
    }
  ],
  settings: {
    'import/resolver': {
      typescript: {},
      node: {
        extensions: ['.ts', '.tsx']
      }
    },
    react: {
      version: 'detect'
    }
  }
};
