

import * as React from "react";
import * as Router from "./Router.bs.js";
import * as Routes from "./Routes.bs.js";
import * as RelayEnv from "./RelayEnv.bs.js";
import IndexCss from "./index.css";
import * as RescriptRelay from "rescript-relay/src/RescriptRelay.bs.js";
import * as ReactDOMExperimental from "rescript-relay/src/ReactDOMExperimental.bs.js";

var _css = IndexCss;

ReactDOMExperimental.renderConcurrentRootAtElementWithId(React.createElement(React.StrictMode, {
          children: React.createElement(React.unstable_Cache, {
                children: React.createElement(RescriptRelay.Context.Provider.make, {
                      environment: RelayEnv.environment,
                      children: React.createElement(Router.Provider.make, Router.Provider.makeProps(Routes.routerContext, React.createElement(Router.RouteRenderer.make, {
                                    renderPending: (function (pending) {
                                        if (pending) {
                                          return React.createElement("div", {
                                                      className: "RouteRenderer-pending"
                                                    }, "Loading pending...");
                                        } else {
                                          return null;
                                        }
                                      }),
                                    renderFallback: (function (param) {
                                        return "Loading fallback...";
                                      }),
                                    renderNotFound: (function (param) {
                                        return "Page not found";
                                      })
                                  }), undefined))
                    })
              })
        }), "root");

export {
  _css ,
  
}
/* _css Not a pure module */
