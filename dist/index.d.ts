declare const availableConfigs: {
    readonly node: "node";
    readonly react: "react";
    readonly ts: "ts";
};
declare function configure(configs: Array<keyof typeof availableConfigs>, currentConfig: Record<string, unknown>): {
    [x: string]: unknown;
};
declare const configs: {
    eslint: {
        configure: typeof configure;
        availableConfigs: {
            readonly node: "node";
            readonly react: "react";
            readonly ts: "ts";
        };
        nodeConfig: {
            env: {
                es6: boolean;
                node: boolean;
            };
            extends: string[];
            plugins: string[];
            rules: {
                quotes: (string | number | {
                    avoidEscape: boolean;
                })[];
                indent: string[];
                semi: string[];
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
        };
        reactConfig: {
            env: {
                browser: boolean;
                es6: boolean;
                node: boolean;
            };
            extends: string[];
            plugins: string[];
            rules: {
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
        };
        tsConfig: {
            env: {
                es6: boolean;
                node: boolean;
            };
            extends: string[];
            overrides: {
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
        };
    };
    tsconfig: {
        compilerOptions: {
            target: string;
            module: string;
            jsx: string;
            lib: string[];
            baseUrl: string;
            moduleResolution: string;
            outDir: string;
            allowJs: boolean;
            allowSyntheticDefaultImports: boolean;
            esModuleInterop: boolean;
            skipLibCheck: boolean;
            noUnusedLocals: boolean;
            noUnusedParameters: boolean;
            isolatedModules: boolean;
            removeComments: boolean;
            preserveConstEnums: boolean;
            sourceMap: boolean;
            forceConsistentCasingInFileNames: boolean;
            resolveJsonModule: boolean;
            experimentalDecorators: boolean;
            emitDecoratorMetadata: boolean;
            strictNullChecks: boolean;
            paths: {};
        };
    };
};
export { configs };
