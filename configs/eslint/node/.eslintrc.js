module.exports = {
	env: {
		es6: true,
		node: true
	},
	extends: [
		"eslint:recommended",
		"plugin:import/errors",
		"plugin:import/warnings"
	],
	plugins: [
		"babel",
		"import",
		"unused-imports",
		"sort-imports-es6-autofix"
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
