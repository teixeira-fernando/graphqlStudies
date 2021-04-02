module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  globals: {
    Given: "readonly",
    When: "readonly",
    Then: "readonly",
    expect: "readonly",
    $$: "readonly",
    $: "readonly",
    browser: "readonly",
    describe: "readonly",
    it: "readonly",
    before: "readonly"
  },
  extends: [
    "airbnb-base",
    "prettier"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "class-methods-use-this": "off",
    "no-unused-expressions": "warn",
    "max-len": "warn",
    "implicit-arrow-linebreak": "warn",
    "consistent-return": "warn"
  },
};
