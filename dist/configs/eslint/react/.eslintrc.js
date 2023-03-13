"use strict";
module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    extends: [
        "plugin:react/recommended",
        "eslint:recommended",
        "plugin:import/errors",
        "plugin:import/warnings"
    ],
    plugins: [
        "react",
        "react-hooks",
        "unused-imports",
        "babel",
        "sort-imports-es6-autofix",
        "import"
    ],
    rules: {
        quotes: [
            2,
            "double", {
                avoidEscape: true
            }
        ],
        indent: ["error", "tab"],
        semi: ["error", "always"],
        "react/react-in-jsx-scope": "off",
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "react/prop-types": 0,
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "react/jsx-curly-brace-presence": [
            "error",
            {
                props: "never",
                children: "never"
            }
        ],
        "no-multiple-empty-lines": [
            "error",
            {
                max: 1
            }
        ],
        "no-trailing-spaces": ["error"],
        "no-use-before-define": "error",
        "prefer-const": "error",
        "comma-dangle": ["error", "never"],
        "linebreak-style": ["error", "unix"],
        "no-duplicate-imports": 2,
        "sort-imports-es6-autofix/sort-imports-es6": [
            2,
            {
                ignoreCase: false,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ["none", "all", "multiple", "single"]
            }
        ],
        "no-unused-vars": [
            2,
            {
                ignoreRestSiblings: true
            }
        ],
        "no-dupe-class-members": ["error"],
        "import/no-extraneous-dependencies": [
            "error",
            {
                devDependencies: true
            }
        ],
        "prefer-template": ["error"]
    }
};
//# sourceMappingURL=.eslintrc.js.map