"use strict";
const availableConfigs = {
    node: "node",
    react: "react",
    ts: "ts"
};
function configure(configs, currentConfig) {
    return {
        currentConfig,
    };
}
module.exports = {
    availableConfigs,
    configure
};
//# sourceMappingURL=util.js.map