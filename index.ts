import eslintrc_node from "./configs/eslint/node/.eslintrc.js";
import eslintrc_react from "./configs/eslint/react/.eslintrc.js";
import eslintrc_ts from "./configs/eslint/typescript/.eslintrc.js";

import tsconfig from "./configs/tsconfig.json";

const availableConfigs = {
	node: "node",
	react: "react",
	ts: "ts"
} as const;

const configsMap = {
	[availableConfigs.node]: eslintrc_node,
	[availableConfigs.react]: eslintrc_react,
	[availableConfigs.ts]: eslintrc_ts,
}

function configure(configs: Array<keyof typeof availableConfigs>, currentConfig: Record<string, unknown>) {
	let result = { ...currentConfig };

	for (const key of configs) {
		Object.assign(result, configsMap[key])
	}

	return result;
}

const configs = {
	eslint: {
		configure,
		availableConfigs,
		nodeConfig: eslintrc_node,
		reactConfig: eslintrc_react,
		tsConfig: eslintrc_ts,
	},
	tsconfig,
}

export { configs };
