const eslintrc_node = require("./configs/eslint/node/.eslintrc.js");
const eslintrc_react = require("./configs/eslint/react/.eslintrc.js");
const eslintrc_ts = require("./configs/eslint/typescript/.eslintrc.js");

const tsconfig = require("./configs/tsconfig.json");


module.exports = {
	eslint: {
		reactConfig: eslintrc_react,
		nodeConfig: eslintrc_node,
		tsConfig: eslintrc_ts,
	},
	tsconfig,
};
