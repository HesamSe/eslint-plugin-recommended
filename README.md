
# @hesamse/eslint-plugin-recommended

An ESLint plugin with custom rules for TypeScript projects, including a rule to enforce the presence of JSX elements in `.tsx` files. Ideal for projects using React with TypeScript.

## Features

- **`no-tsx-without-jsx`**: Enforces that `.tsx` files contain JSX elements. If a `.tsx` file does not include any JSX, this rule will report an error, encouraging you to use the correct file extensions (`.ts` instead of `.tsx` when JSX is not used).

## Installation

First, install the plugin using npm:

```bash
npm install --save-dev @hesamse/eslint-plugin-recommended
```

Or with yarn:

```bash
yarn add --dev @hesamse/eslint-plugin-recommended
```

## Usage

To use this plugin, include it in your ESLint configuration:

### `eslint.config.js`

If you are using `eslint.config.js`:

```javascript
import hesamseRecommended from '@hesamse/eslint-plugin-recommended';

export default {
  parser: '@typescript-eslint/parser',
  plugins: {
    '@hesamse/recommended': hesamseRecommended,
  },
  rules: {
    '@hesamse/recommended/no-tsx-without-jsx': 'error',
  },
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        '@hesamse/recommended/no-tsx-without-jsx': 'error',
      },
    },
  ],
};
```

### `.eslintrc.json` (if you still prefer JSON configuration)

```json
{
  "parser": "@typescript-eslint/parser",
  "plugins": ["@hesamse/recommended"],
  "rules": {
    "@hesamse/recommended/no-tsx-without-jsx": "error"
  },
  "overrides": [
    {
      "files": ["**/*.tsx"],
      "rules": {
        "@hesamse/recommended/no-tsx-without-jsx": "error"
      }
    }
  ]
}
```

## Rule: `no-tsx-without-jsx`

### What does it do?

The `no-tsx-without-jsx` rule ensures that files with a `.tsx` extension contain at least one JSX element. This helps maintain consistency in your project by enforcing the use of `.tsx` files only when necessary. If no JSX is present, consider renaming the file to `.ts`.

### Example

#### ✅ Valid

```tsx
// myComponent.tsx
import React from 'react';

const MyComponent = () => <div>Hello, World!</div>;

export default MyComponent;
```

#### ❌ Invalid

```tsx
// myUtility.tsx
export function myUtilityFunction() {
  return 42;
}
```

The above code would trigger an error, suggesting that the file should be renamed to `.ts` since no JSX is present.

## Contributing

Contributions are welcome! If you want to add new rules or improve existing ones, feel free to fork the repository and open a pull request.

## License

MIT © [hesamSe](https://github.com/hesamSe)
