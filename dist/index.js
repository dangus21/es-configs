"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.configs = void 0;
const _eslintrc_js_1 = __importDefault(require("./configs/eslint/node/.eslintrc.js"));
const _eslintrc_js_2 = __importDefault(require("./configs/eslint/react/.eslintrc.js"));
const _eslintrc_js_3 = __importDefault(require("./configs/eslint/typescript/.eslintrc.js"));
const tsconfig_json_1 = __importDefault(require("./configs/tsconfig.json"));
const availableConfigs = {
    node: "node",
    react: "react",
    ts: "ts"
};
const configsMap = {
    [availableConfigs.node]: _eslintrc_js_1.default,
    [availableConfigs.react]: _eslintrc_js_2.default,
    [availableConfigs.ts]: _eslintrc_js_3.default,
};
function configure(configs, currentConfig) {
    let result = structuredClone(currentConfig);
    for (const key of configs) {
        Object.assign(result, configsMap[key]);
    }
    return result;
}
const configs = {
    eslint: {
        configure,
        availableConfigs,
        nodeConfig: _eslintrc_js_1.default,
        reactConfig: _eslintrc_js_2.default,
        tsConfig: _eslintrc_js_3.default,
    },
    tsconfig: tsconfig_json_1.default,
};
exports.configs = configs;
//# sourceMappingURL=index.js.map