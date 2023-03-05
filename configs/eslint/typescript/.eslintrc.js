module.exports = {
	env: {
		es6: true,
		node: true
	},
	extends: [
		"plugin:import/typescript"
	],
	overrides: [
		{
			"files": ["*.ts", "*.tsx"],
			"extends": ["plugin:import/typescript"],
			"parser": "@typescript-eslint/parser",
			"plugins": ["@typescript-eslint"],
			"rules": {
				"no-unused-vars": "off",
				"@typescript-eslint/no-unused-vars": [2, { "ignoreRestSiblings": true }],
				"no-dupe-class-members": "off",
				"@typescript-eslint/no-dupe-class-members": ["error"],
				"@typescript-eslint/semi": ["error", "always"],
				"@typescript-eslint/adjacent-overload-signatures": "off",
				"@typescript-eslint/array-type": [
					"error",
					{
						"default": "array"
					}
				],
				"@typescript-eslint/ban-types": [
					"error",
					{
						"types": {
							"Object": {
								"message": "Avoid using the `Object` type. Did you mean `object`?"
							},
							"Function": {
								"message": "Avoid using the `Function` type. Prefer a specific function type, like `() => void`."
							},
							"Boolean": {
								"message": "Avoid using the `Boolean` type. Did you mean `boolean`?"
							},
							"Number": {
								"message": "Avoid using the `Number` type. Did you mean `number`?"
							},
							"String": {
								"message": "Avoid using the `String` type. Did you mean `string`?"
							},
							"Symbol": {
								"message": "Avoid using the `Symbol` type. Did you mean `symbol`?"
							}
						}
					}
				],
				"@typescript-eslint/consistent-type-assertions": "error",
				"@typescript-eslint/dot-notation": "error",
				"@typescript-eslint/indent": "off",
				"@typescript-eslint/member-delimiter-style": [
					"error",
					{
						"multiline": {
							"delimiter": "semi",
							"requireLast": true
						},
						"singleline": {
							"delimiter": "semi",
							"requireLast": false
						}
					}
				],
				"@typescript-eslint/no-empty-function": "error",
				"@typescript-eslint/no-empty-interface": "error",
				"@typescript-eslint/no-explicit-any": "warn",
				"@typescript-eslint/no-misused-new": "error",
				"@typescript-eslint/no-namespace": "error",
				"@typescript-eslint/no-parameter-properties": "off",
				"@typescript-eslint/no-unused-expressions": "error",
				"@typescript-eslint/no-use-before-define": "warn",
				"@typescript-eslint/no-var-requires": "off",
				"@typescript-eslint/prefer-for-of": "error",
				"@typescript-eslint/prefer-function-type": "error",
				"@typescript-eslint/prefer-namespace-keyword": "error",
				"@typescript-eslint/quotes": "off",
				"@typescript-eslint/triple-slash-reference": [
					"error",
					{
						"path": "always",
						"types": "prefer-import",
						"lib": "always"
					}
				],
				"@typescript-eslint/type-annotation-spacing": "error",
				"@typescript-eslint/unified-signatures": "error",
				"@typescript-eslint/naming-convention": [
					"warn",
					{
						"selector": "interface",
						"format": ["PascalCase"],
						"custom": {
							"regex": "^I[A-Z]",
							"match": false
						}
					}
				]
			}
		}
	]
};
