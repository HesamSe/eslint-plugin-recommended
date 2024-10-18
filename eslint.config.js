const hesamseRecommended = require('./lib');
const typescriptParser = require('@typescript-eslint/parser');

module.exports =
    {
        files: ["**/*.ts", "**/*.tsx"],
        languageOptions: {
            parser: typescriptParser
        },
        plugins: {
            '@hesamse/recommended': hesamseRecommended
        },
        rules: {
            '@hesamse/recommended/no-tsx-without-jsx': 'error',
        },
    }
;