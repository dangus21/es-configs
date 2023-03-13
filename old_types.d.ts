import node_eslintrc from './configs/eslint/node/.eslintrc.js'
import react_eslintrc from './configs/eslint/react/.eslintrc.js'
import ts_eslintrc from './configs/eslint/typescript/.eslintrc.js'

import ts_config from './configs/tsconfig.json'

import utils from './util'


type GetSecondArgumentOfAnyFunction<T> = T extends (
	first: utils.availableConfigs,
	second: infer SecondArgument,
	...args: any[]
) => any
	? SecondArgument
	: never

declare namespace eslint {
	export declare const nodeConfig = node_eslintrc;
	export declare const reactConfig = react_eslintrc;
	export declare const tsConfig = ts_eslintrc;
	export declare const availableConfigs = utils.availableConfigs
	// export declare const configure = (configs: utils.availableConfigs, currentConfig: T) => infer T ? T : any
}

export declare const tsconfig = ts_config;