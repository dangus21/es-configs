module.exports = {
	"env": {
		"browser": true,
		"es6": true,
		"node": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:import/errors",
		"plugin:import/warnings",
		"plugin:import/typescript",
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 2018,
		sourceType: "module",
		project: ["./tsconfig.json"]
	},
	plugins: [
		"react",
		"unused-imports",
		"babel",
		"sort-imports-es6-autofix",
		"react-hooks",
		"import"
	],
	rules: {
		quotes: [2, "double", { "avoidEscape": true }],
		indent: ["error", "tab"],
		semi: ["error", "always"],
		"no-multiple-empty-lines": ["error", { "max": 1 }],
		"no-trailing-spaces": ["error"],
		"no-use-before-define": "error",
		"prefer-const": "error",
		"react/react-in-jsx-scope": "off",
		"comma-dangle": ["error", "never"],
		"linebreak-style": ["error", "unix"],
		"react/jsx-uses-react": "error",
		"react/jsx-uses-vars": "error",
		"react/prop-types": 0,
		"no-duplicate-imports": 2,
		"sort-imports-es6-autofix/sort-imports-es6": [
			2,
			{
				"ignoreCase": false,
				"ignoreMemberSort": false,
				"memberSyntaxSortOrder": ["none", "all", "multiple", "single"]
			}
		],
		"no-unused-vars": [2, { "ignoreRestSiblings": true }],
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn",
		"no-dupe-class-members": ["error"],
		"import/no-extraneous-dependencies": [
			"error",
			{ "devDependencies": true }
		],
		"prefer-template": ["error"],
		// "no-console": ["error"],
		"react/jsx-curly-brace-presence": [
			"error",
			{ "props": "never", "children": "never" }
		]
	},
	overrides: [
		{
			files: ["*.ts", "*.tsx"],
			extends: ["plugin:import/typescript"],
			parser: "@typescript-eslint/parser",
			plugins: ["@typescript-eslint"],
		}
	],
	settings: {
		react: {
			version: "detect"
		}
	}
}
