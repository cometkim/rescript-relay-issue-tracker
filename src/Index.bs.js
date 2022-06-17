

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as Router from "./Router.bs.js";
import * as RelayEnv from "./RelayEnv.bs.js";
import IndexCss from "./index.css";
import * as RelayRouter from "rescript-relay-router/src/RelayRouter.bs.js";
import * as RescriptRelay from "rescript-relay/src/RescriptRelay.bs.js";
import * as ReactDOMExperimental from "rescript-relay/src/ReactDOMExperimental.bs.js";
import * as RescriptReactErrorBoundary from "@rescript/react/src/RescriptReactErrorBoundary.bs.js";

var _css = IndexCss;

ReactDOMExperimental.renderConcurrentRootAtElementWithId(React.createElement(React.StrictMode, {
          children: React.createElement(RescriptRelay.Context.Provider.make, {
                environment: RelayEnv.environment,
                children: React.createElement(RelayRouter.Provider.make, Curry._3(RelayRouter.Provider.makeProps, Router.routerContext, React.createElement(React.Suspense, {
                              children: React.createElement(RescriptReactErrorBoundary.make, {
                                    children: React.createElement(RelayRouter.RouteRenderer.make, {
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
                                            })
                                        }),
                                    fallback: (function (param) {
                                        return "Error!";
                                      })
                                  }),
                              fallback: "Loading..."
                            }), undefined))
              })
        }), "root");

export {
  _css ,
  
}
/* _css Not a pure module */
