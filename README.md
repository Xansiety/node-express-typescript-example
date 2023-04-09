Create a TypeScript configuration file

(-- ) is a flag that is passed to the TypeScript compiler. It is not a flag for the yarn tsc command.

```
yarn tsc -- --init
```

and modify with your requirements for development.

Run the TypeScript compiler

```
yarn tsc
```

This creates a dist folder with the compiled JavaScript files.

`./build`

-- For formatting, use tslint

```bash
yarn add -D ts-standard
```

and add the following to package.json

```json
"scripts": {
 "lint": "ts-standard src/**/*.ts",
},
"eslintConfig": {
    "parserOptions": {
      "project": "./tsconfig.json"
    },
    "extends": "./node_modules/ts-standard/eslintrc.json"
  }
```

if you using Prettier, add the following to package.json

```json
"prettier": {
    "singleQuote": true,
    "trailingComma": "all",
    "semi": true
  }
```
 
