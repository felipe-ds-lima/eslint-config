module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    "standard-with-typescript",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  overrides: [],
  plugins: [
    "import-helpers",
    "@typescript-eslint",
    "@typescript-eslint/eslint-plugin",
    "prettier",
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        semi: false,
        singleQuote: true,
        arrowParens: "always",
        trailingComma: "all",
        endOfLine: "auto",
        printWidth: 80,
        tabWidth: 2,
      },
    ],
    "import-helpers/order-imports": [
      "warn",
      {
        newlinesBetween: "always",
        groups: ["module", "/^@/", ["parent", "sibling", "index"]],
        alphabetize: {
          order: "asc",
          ignoreCase: true,
        },
      },
    ],
    "space-before-function-paren": "off",
    "no-use-before-define": "off",
    "generator-star-spacing": "off",
    "comma-dangle": "off",
    "prefer-template": "error",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "_",
      },
    ],
    camelcase: "off",
    "no-useless-constructor": "off",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "interface",
        format: ["PascalCase"],
        custom: {
          regex: "^I[A-Z]",
          match: true,
        },
      },
    ],
    "import/prefer-default-export": "off",
    "no-unused-expressions": "off",
    "import/no-duplicates": "off",
    "@typescript-eslint/explicit-function-return-type": [
      "off",
      {
        allowExpressions: true,
      },
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
      },
    ],
  },
  settings: {
    "import/parsers": {
      [require.resolve("@typescript-eslint/parser")]: [".ts", ".tsx", ".d.ts"],
    },
  },
};
