export declare namespace env {
    const es6: boolean;
    const node: boolean;
}
declare const _extends: string[];
export { _extends as extends };
export declare const overrides: {
    files: string[];
    extends: string[];
    parser: string;
    plugins: string[];
    rules: {
        "no-unused-vars": string;
        "@typescript-eslint/no-unused-vars": (number | {
            ignoreRestSiblings: boolean;
        })[];
        "no-dupe-class-members": string;
        "@typescript-eslint/no-dupe-class-members": string[];
        "@typescript-eslint/semi": string[];
        "@typescript-eslint/adjacent-overload-signatures": string;
        "@typescript-eslint/array-type": (string | {
            default: string;
        })[];
        "@typescript-eslint/ban-types": (string | {
            types: {
                Object: {
                    message: string;
                };
                Function: {
                    message: string;
                };
                Boolean: {
                    message: string;
                };
                Number: {
                    message: string;
                };
                String: {
                    message: string;
                };
                Symbol: {
                    message: string;
                };
            };
        })[];
        "@typescript-eslint/consistent-type-assertions": string;
        "@typescript-eslint/dot-notation": string;
        "@typescript-eslint/indent": string;
        "@typescript-eslint/member-delimiter-style": (string | {
            multiline: {
                delimiter: string;
                requireLast: boolean;
            };
            singleline: {
                delimiter: string;
                requireLast: boolean;
            };
        })[];
        "@typescript-eslint/no-empty-function": string;
        "@typescript-eslint/no-empty-interface": string;
        "@typescript-eslint/no-explicit-any": string;
        "@typescript-eslint/no-misused-new": string;
        "@typescript-eslint/no-namespace": string;
        "@typescript-eslint/no-parameter-properties": string;
        "@typescript-eslint/no-unused-expressions": string;
        "@typescript-eslint/no-use-before-define": string;
        "@typescript-eslint/no-var-requires": string;
        "@typescript-eslint/prefer-for-of": string;
        "@typescript-eslint/prefer-function-type": string;
        "@typescript-eslint/prefer-namespace-keyword": string;
        "@typescript-eslint/quotes": string;
        "@typescript-eslint/triple-slash-reference": (string | {
            path: string;
            types: string;
            lib: string;
        })[];
        "@typescript-eslint/type-annotation-spacing": string;
        "@typescript-eslint/unified-signatures": string;
        "@typescript-eslint/naming-convention": (string | {
            selector: string;
            format: string[];
            custom: {
                regex: string;
                match: boolean;
            };
        })[];
    };
}[];
