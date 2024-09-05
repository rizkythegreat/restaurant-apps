module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  },
  extends: [
    'standard'
  ],
  globals: {
    codecept_helper: 'readonly',
    Feature: 'readonly',
    Scenario: 'readonly',
    Before: 'readonly',
    locate: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
  }
}
