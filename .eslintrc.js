module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:@next/next/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
    'next'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    'project': './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'import'
  ],
  rules: {
    // 廃止になったルールをoff
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',

    // コンポーネントをアロー関数で定義可能にする
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],

    // 拡張子なしでのimportを許可
    'import/no-unresolved': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'js': 'never',
        'jsx': 'never',
        'ts': 'never',
        'tsx': 'never'
      }
    ],

    // _ をファイル名に許可
    'no-underscore-dangle': 'off',

    // ...props を許可
    'react/jsx-props-no-spreading': 'off',

    // Linkコンポーネントのエラー回避
    'jsx-a11y/anchor-is-valid': [ 'error', {
      'components': [ 'Link' ],
      'specialLink': [ 'hrefLeft', 'hrefRight' ],
      'aspects': [ 'invalidHref', 'preferButton' ]
    }],
            
    // JSX not allowed in files with extension '.tsx' を回避
    'react/jsx-filename-extension': ['error', { 'extensions': ['.jsx', '.tsx'] }],
    
    // セミコロン
    'semi': ['error', 'never', {'beforeStatementContinuationChars': 'never'}],
    'semi-spacing': ['error', {'after': true, 'before': false}],
    'semi-style': ['error', 'first'],
    'no-extra-semi': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',

    // クォーテーション
    'quotes': ['error', 'single']    
  },
};
