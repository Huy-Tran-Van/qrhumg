// #region Global Imports
const nextRoutes = require("next-routes");
const configRoutes = require("../configs/router");
// #endregion Global Imports

function createRouter(basePath) {
    basePath = basePath || "";
    const routes = (module.exports = nextRoutes());

    for (let index = 0; index < configRoutes.length; index += 1) {
        const element = configRoutes[index];
        routes.add({
            page: element.destination,
            pattern: element.source,
        });
    }
    return routes;
}

module.exports = createRouter;
