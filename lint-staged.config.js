module.exports = {
  '*.{ts,tsx,json,md}': ['npm run format'],
  'src/**/*.{ts,tsx}': ['npm run lint:fix', 'npm run lint:styles']
};
