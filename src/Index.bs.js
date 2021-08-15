

import * as App from "./App.bs.js";
import * as React from "react";
import * as RelayEnv from "./RelayEnv.bs.js";
import IndexCss from "./index.css";
import * as RescriptRelay from "rescript-relay/src/RescriptRelay.bs.js";
import * as ReactDomExperimental from "./bindings/ReactDomExperimental.bs.js";

var _css = IndexCss;

ReactDomExperimental.renderRootAtElementWithId(React.createElement(React.StrictMode, {
          children: React.createElement(RescriptRelay.Context.Provider.make, {
                environment: RelayEnv.environment,
                children: React.createElement(App.make, {})
              })
        }), "root");

export {
  _css ,
  
}
/* _css Not a pure module */
