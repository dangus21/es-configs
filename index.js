const eslintrc_node = require("./configs/eslint/node/.eslintrc.js");
const eslintrc_react = require("./configs/eslint/react/.eslintrc.js");
const eslintrc_ts = require("./configs/eslint/typescript/.eslintrc.js");

const tsconfig = require("./configs/tsconfig.json");


module.exports = {
	eslint: {
		nodeConfig: eslintrc_node,
		reactConfig: eslintrc_react,
		tsConfig: eslintrc_ts,
	},
	tsconfig,
};
