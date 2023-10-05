module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: 'google',
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      },
      rules: {
        'require-jsdoc': 0
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'require-jsdoc': 0,
    'no-else-return': 1
  }
};