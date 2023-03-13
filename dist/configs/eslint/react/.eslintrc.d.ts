export declare namespace env {
    const browser: boolean;
    const es6: boolean;
    const node: boolean;
}
declare const _extends: string[];
export { _extends as extends };
export declare const plugins: string[];
export declare const rules: {
    quotes: (string | number | {
        avoidEscape: boolean;
    })[];
    indent: string[];
    semi: string[];
    "react/react-in-jsx-scope": string;
    "react/jsx-uses-react": string;
    "react/jsx-uses-vars": string;
    "react/prop-types": number;
    "react-hooks/rules-of-hooks": string;
    "react-hooks/exhaustive-deps": string;
    "react/jsx-curly-brace-presence": (string | {
        props: string;
        children: string;
    })[];
    "no-multiple-empty-lines": (string | {
        max: number;
    })[];
    "no-trailing-spaces": string[];
    "no-use-before-define": string;
    "prefer-const": string;
    "comma-dangle": string[];
    "linebreak-style": string[];
    "no-duplicate-imports": number;
    "sort-imports-es6-autofix/sort-imports-es6": (number | {
        ignoreCase: boolean;
        ignoreMemberSort: boolean;
        memberSyntaxSortOrder: string[];
    })[];
    "no-unused-vars": (number | {
        ignoreRestSiblings: boolean;
    })[];
    "no-dupe-class-members": string[];
    "import/no-extraneous-dependencies": (string | {
        devDependencies: boolean;
    })[];
    "prefer-template": string[];
};
