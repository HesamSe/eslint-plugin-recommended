import { TSESLint } from '@typescript-eslint/utils';

const rule: TSESLint.RuleModule<'noJsxInTsx', []> = {
    defaultOptions: [],
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallow .tsx files without JSX',
        },
        messages: {
            noJsxInTsx: 'This file has a .tsx extension but does not contain any JSX elements.',
        },
        schema: [],
    },
    create(context) {
        const filename = context.getFilename();
        if (!filename.endsWith('.tsx')) {
            return {};
        }

        let containsJSX = false;

        return {
            JSXElement() {
                containsJSX = true;
            },
            'Program:exit'(node) {
                if (!containsJSX) {
                    context.report({
                        node,
                        messageId: 'noJsxInTsx',
                    });
                }
            },
        };
    }
};

export default rule;
