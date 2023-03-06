import node_eslintrc from './configs/eslint/node/.eslintrc.js'
import react_eslintrc from './configs/eslint/react/.eslintrc.js'
import ts_eslintrc from './configs/eslint/typescript/.eslintrc.js'

import ts_config from './configs/tsconfig.json'


declare namespace eslint {
	export declare const nodeConfig = node_eslintrc
	export declare const reactConfig = react_eslintrc
	export declare const tsConfig = ts_eslintrc
}

export declare const tsconfig = ts_config;