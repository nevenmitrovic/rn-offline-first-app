const config = {
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  importOrder: [
    '<TYPES>',
    '<TYPES>^[.]',
    '^react$',
    '<THIRD_PARTY_MODULES>', // node_modules
    '^@src/', // absolute imports
    '^[.]', // ./ ../
  ],
  importOrderSortSpecifiers: true,

  printWidth: 90,
  bracketSpacing: true,
  singleQuote: true,
  trailingComma: 'es5',
  tabWidth: 2,
  useTabs: false,
  arrowParens: 'avoid',
};

export default config;