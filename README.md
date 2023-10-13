# eslint-config

My eslint default configs for typescript node and react and prettier

### How to use
Install the package
```bash
npm i --dev @felipe-ds-lima/eslint-config
```
or
```bash
yarn -D @felipe-ds-lima/eslint-config
```
If you get some error, upgrade the typescript version to >=3.3.1

Create the `.eslint.json` file:
```json
{
  "extends": [
    "@felipe-ds-lima/eslint-config/react-config"
  ],
  "parserOptions": {
    "project": "tsconfig.json"
  },
  "ignorePatterns": ["*.js"],
  "rules": {
  }
}
```
In rules you can put your own rules.

Create the `.prettierrc` file:
```json
{
  "semi": false,
  "singleQuote": true,
  "arrowParens": "always",
  "trailingComma": "es5",
  "endOfLine": "auto"
}
```