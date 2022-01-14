

import * as Js_dict from "rescript/lib/es6/js_dict.js";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as RescriptRelay from "rescript-relay/src/RescriptRelay.bs.js";
import * as Webapi__Fetch from "rescript-webapi/src/Webapi/Webapi__Fetch.bs.js";
import * as RelayRuntime from "relay-runtime";
import * as Caml_exceptions from "rescript/lib/es6/caml_exceptions.js";

var Graphql_error = /* @__PURE__ */Caml_exceptions.create("RelayEnv.Graphql_error");

function fetchQuery(operation, variables, _cacheConfig, _uploadables) {
  return fetch("https://api.github.com/graphql", Webapi__Fetch.RequestInit.make(/* Post */2, {
                      authorization: "Bearer " + import.meta.env.VITE_GITHUB_TOKEN,
                      "content-type": "application/json",
                      accept: "application/json"
                    }, Caml_option.some(JSON.stringify(Js_dict.fromList({
                                  hd: [
                                    "query",
                                    operation.text
                                  ],
                                  tl: {
                                    hd: [
                                      "variables",
                                      variables
                                    ],
                                    tl: /* [] */0
                                  }
                                }))), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(undefined)).then(function (resp) {
              if (resp.ok) {
                return resp.json();
              } else {
                return Promise.reject({
                            RE_EXN_ID: Graphql_error,
                            _1: "Request failed: " + resp.statusText
                          });
              }
            });
}

var network = RelayRuntime.Network.create(fetchQuery, undefined);

var environment = RescriptRelay.Environment.make(network, RescriptRelay.Store.make(new RelayRuntime.RecordSource(undefined), 10, undefined, undefined), undefined, undefined, undefined, undefined);

export {
  Graphql_error ,
  fetchQuery ,
  network ,
  environment ,
  
}
/* network Not a pure module */
