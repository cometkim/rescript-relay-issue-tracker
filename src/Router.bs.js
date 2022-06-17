

import * as RelayEnv from "./RelayEnv.bs.js";
import * as RelayRouter from "rescript-relay-router/src/RelayRouter.bs.js";
import * as RouteDeclarations from "./routes/__generated__/RouteDeclarations.bs.js";

var match = RelayRouter.Router.make(RouteDeclarations.make(300000, undefined), RelayRouter.RouterEnvironment.makeBrowserEnvironment(undefined), RelayEnv.environment);

var _cleanup = match[0];

var routerContext = match[1];

export {
  _cleanup ,
  routerContext ,
  
}
/* match Not a pure module */
