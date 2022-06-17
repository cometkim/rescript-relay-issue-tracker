

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as Belt_Array from "rescript/lib/es6/belt_Array.js";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as Caml_exceptions from "rescript/lib/es6/caml_exceptions.js";
import * as Route__Root_route from "./Route__Root_route.bs.js";
import * as Belt_HashMapString from "rescript/lib/es6/belt_HashMapString.js";
import * as RelayRouter__Internal from "rescript-relay-router/src/RelayRouter__Internal.bs.js";
import * as Route__Root__HomeRoot_route from "./Route__Root__HomeRoot_route.bs.js";
import * as Route__Root__IssueDetailRoot_route from "./Route__Root__IssueDetailRoot_route.bs.js";

var Route_loading_failed = /* @__PURE__ */Caml_exceptions.create("RouteDeclarations.Route_loading_failed");

var loadedRouteRenderers = {
  renderer_Root: /* NotInitiated */0,
  renderer_Root__HomeRoot: /* NotInitiated */0,
  renderer_Root__IssueDetailRoot: /* NotInitiated */0
};

function make(prepareDisposeTimeoutOpt, param) {
  var prepareDisposeTimeout = prepareDisposeTimeoutOpt !== undefined ? prepareDisposeTimeoutOpt : 300000;
  var preparedMap = Belt_HashMapString.make(3);
  var disposeOfPrepared = function (routeKey) {
    var match = Belt_HashMapString.get(preparedMap, routeKey);
    if (match !== undefined) {
      return match.dispose();
    }
    
  };
  var $$clearTimeout$1 = function (routeKey) {
    var match = Belt_HashMapString.get(preparedMap, routeKey);
    if (match === undefined) {
      return ;
    }
    var timeoutId = match.timeout;
    if (timeoutId !== undefined) {
      clearTimeout(Caml_option.valFromOption(timeoutId));
      return ;
    }
    
  };
  var expirePrepared = function (routeKey) {
    disposeOfPrepared(routeKey);
    $$clearTimeout$1(routeKey);
    return Belt_HashMapString.remove(preparedMap, routeKey);
  };
  var addPrepared = function (routeKey, dispose, render) {
    Belt_HashMapString.set(preparedMap, routeKey, {
          dispose: dispose,
          render: render,
          timeout: undefined
        });
    $$clearTimeout$1(routeKey);
    var r = Belt_HashMapString.get(preparedMap, routeKey);
    if (r !== undefined) {
      r.timeout = Caml_option.some(setTimeout((function (param) {
                  disposeOfPrepared(routeKey);
                  return expirePrepared(routeKey);
                }), prepareDisposeTimeout));
      return ;
    }
    
  };
  var loadRouteRenderer = function (param) {
    var promise = import("@rescriptModule/Root_route_renderer");
    loadedRouteRenderers.renderer_Root = {
      TAG: /* Pending */0,
      _0: promise
    };
    return promise.then(function (m) {
                loadedRouteRenderers.renderer_Root = {
                  TAG: /* Loaded */1,
                  _0: m
                };
                return Promise.resolve(undefined);
              });
  };
  var loadRouteRenderer$1 = function (param) {
    var promise = import("@rescriptModule/Root__HomeRoot_route_renderer");
    loadedRouteRenderers.renderer_Root__HomeRoot = {
      TAG: /* Pending */0,
      _0: promise
    };
    return promise.then(function (m) {
                loadedRouteRenderers.renderer_Root__HomeRoot = {
                  TAG: /* Loaded */1,
                  _0: m
                };
                return Promise.resolve(undefined);
              });
  };
  var loadRouteRenderer$2 = function (param) {
    var promise = import("@rescriptModule/Root__IssueDetailRoot_route_renderer");
    loadedRouteRenderers.renderer_Root__IssueDetailRoot = {
      TAG: /* Pending */0,
      _0: promise
    };
    return promise.then(function (m) {
                loadedRouteRenderers.renderer_Root__IssueDetailRoot = {
                  TAG: /* Loaded */1,
                  _0: m
                };
                return Promise.resolve(undefined);
              });
  };
  return [{
            path: "/",
            loadRouteRenderer: loadRouteRenderer,
            preloadCode: (function (environment, pathParams, queryParams, $$location) {
                var apply = function (RouteRenderer) {
                  var preparedProps = Route__Root_route.makePrepareProps(environment, pathParams, queryParams, $$location);
                  var prepareCode = RouteRenderer.renderer.prepareCode;
                  if (prepareCode !== undefined) {
                    return prepareCode(preparedProps);
                  } else {
                    return [];
                  }
                };
                var promise = loadedRouteRenderers.renderer_Root;
                if (typeof promise === "number") {
                  var __x = loadRouteRenderer(undefined);
                  return __x.then(function (param) {
                              var RouteRenderer = loadedRouteRenderers.renderer_Root;
                              if (typeof RouteRenderer === "number") {
                                throw {
                                      RE_EXN_ID: Route_loading_failed,
                                      _1: "Invalid state after loading route renderer. Please report this error.",
                                      Error: new Error()
                                    };
                              }
                              if (RouteRenderer.TAG !== /* Pending */0) {
                                return Promise.resolve(apply(RouteRenderer._0));
                              }
                              throw {
                                    RE_EXN_ID: Route_loading_failed,
                                    _1: "Invalid state after loading route renderer. Please report this error.",
                                    Error: new Error()
                                  };
                            });
                }
                if (promise.TAG === /* Pending */0) {
                  var __x$1 = promise._0;
                  return __x$1.then(function (RouteRenderer) {
                              return Promise.resolve(apply(RouteRenderer));
                            });
                }
                var RouteRenderer = promise._0;
                return new Promise((function (resolve, param) {
                              return resolve(apply(RouteRenderer));
                            }));
              }),
            prepare: (function (environment, pathParams, queryParams, $$location) {
                var preparedProps = Route__Root_route.makePrepareProps(environment, pathParams, queryParams, $$location);
                var routeKey = Route__Root_route.makeRouteKey(pathParams, queryParams);
                var match = Belt_HashMapString.get(preparedMap, routeKey);
                if (match !== undefined) {
                  return match.render;
                }
                var preparedRef = {
                  contents: /* NotInitiated */0
                };
                var doPrepare = function (RouteRenderer) {
                  var prepareCode = RouteRenderer.renderer.prepareCode;
                  if (prepareCode !== undefined) {
                    prepareCode(preparedProps);
                  }
                  var prepared = Curry._1(RouteRenderer.renderer.prepare, preparedProps);
                  preparedRef.contents = {
                    TAG: /* Loaded */1,
                    _0: prepared
                  };
                  return prepared;
                };
                var promise = loadedRouteRenderers.renderer_Root;
                if (typeof promise === "number") {
                  var __x = loadRouteRenderer(undefined);
                  var preparePromise = __x.then(function (param) {
                        var RouteRenderer = loadedRouteRenderers.renderer_Root;
                        if (typeof RouteRenderer === "number") {
                          throw {
                                RE_EXN_ID: Route_loading_failed,
                                _1: "Route renderer not in loaded state even though it should be. This should be impossible, please report this error.",
                                Error: new Error()
                              };
                        }
                        if (RouteRenderer.TAG !== /* Pending */0) {
                          return Promise.resolve(doPrepare(RouteRenderer._0));
                        }
                        throw {
                              RE_EXN_ID: Route_loading_failed,
                              _1: "Route renderer not in loaded state even though it should be. This should be impossible, please report this error.",
                              Error: new Error()
                            };
                      });
                  preparedRef.contents = {
                    TAG: /* Pending */0,
                    _0: preparePromise
                  };
                } else if (promise.TAG === /* Pending */0) {
                  var preparePromise$1 = promise._0.then(function (RouteRenderer) {
                        return Promise.resolve(doPrepare(RouteRenderer));
                      });
                  preparedRef.contents = {
                    TAG: /* Pending */0,
                    _0: preparePromise$1
                  };
                } else {
                  doPrepare(promise._0);
                }
                var render = function (childRoutes) {
                  React.useEffect((function () {
                          $$clearTimeout$1(routeKey);
                          return (function (param) {
                                    return expirePrepared(routeKey);
                                  });
                        }), []);
                  var match = loadedRouteRenderers.renderer_Root;
                  var match$1 = preparedRef.contents;
                  if (typeof match$1 === "number") {
                    console.log("Warning: Tried to render route with prepared not initiated. This should not happen, prepare should be called prior to any rendering.");
                    return null;
                  }
                  if (match$1.TAG === /* Pending */0) {
                    throw(match$1._0);
                    return null;
                  }
                  if (typeof match === "number") {
                    console.log("Warning: Invalid state");
                    return null;
                  }
                  if (match.TAG !== /* Pending */0) {
                    return Curry._1(match._0.renderer.render, {
                                childRoutes: childRoutes,
                                prepared: match$1._0,
                                environment: environment,
                                location: $$location
                              });
                  }
                  console.log("Warning: Invalid state");
                  return null;
                };
                addPrepared(routeKey, (function () {
                        var prepared = preparedRef.contents;
                        if (typeof prepared === "number" || prepared.TAG === /* Pending */0) {
                          return ;
                        } else {
                          return Belt_Array.forEach(RelayRouter__Internal.extractDisposables(prepared._0), (function (dispose) {
                                        return dispose();
                                      }));
                        }
                      }), render);
                return render;
              }),
            children: [
              {
                path: "",
                loadRouteRenderer: loadRouteRenderer$1,
                preloadCode: (function (environment, pathParams, queryParams, $$location) {
                    var apply = function (RouteRenderer) {
                      var preparedProps = Route__Root__HomeRoot_route.makePrepareProps(environment, pathParams, queryParams, $$location);
                      var prepareCode = RouteRenderer.renderer.prepareCode;
                      if (prepareCode !== undefined) {
                        return prepareCode(preparedProps);
                      } else {
                        return [];
                      }
                    };
                    var promise = loadedRouteRenderers.renderer_Root__HomeRoot;
                    if (typeof promise === "number") {
                      var __x = loadRouteRenderer$1(undefined);
                      return __x.then(function (param) {
                                  var RouteRenderer = loadedRouteRenderers.renderer_Root__HomeRoot;
                                  if (typeof RouteRenderer === "number") {
                                    throw {
                                          RE_EXN_ID: Route_loading_failed,
                                          _1: "Invalid state after loading route renderer. Please report this error.",
                                          Error: new Error()
                                        };
                                  }
                                  if (RouteRenderer.TAG !== /* Pending */0) {
                                    return Promise.resolve(apply(RouteRenderer._0));
                                  }
                                  throw {
                                        RE_EXN_ID: Route_loading_failed,
                                        _1: "Invalid state after loading route renderer. Please report this error.",
                                        Error: new Error()
                                      };
                                });
                    }
                    if (promise.TAG === /* Pending */0) {
                      var __x$1 = promise._0;
                      return __x$1.then(function (RouteRenderer) {
                                  return Promise.resolve(apply(RouteRenderer));
                                });
                    }
                    var RouteRenderer = promise._0;
                    return new Promise((function (resolve, param) {
                                  return resolve(apply(RouteRenderer));
                                }));
                  }),
                prepare: (function (environment, pathParams, queryParams, $$location) {
                    var preparedProps = Route__Root__HomeRoot_route.makePrepareProps(environment, pathParams, queryParams, $$location);
                    var routeKey = Route__Root__HomeRoot_route.makeRouteKey(pathParams, queryParams);
                    var match = Belt_HashMapString.get(preparedMap, routeKey);
                    if (match !== undefined) {
                      return match.render;
                    }
                    var preparedRef = {
                      contents: /* NotInitiated */0
                    };
                    var doPrepare = function (RouteRenderer) {
                      var prepareCode = RouteRenderer.renderer.prepareCode;
                      if (prepareCode !== undefined) {
                        prepareCode(preparedProps);
                      }
                      var prepared = Curry._1(RouteRenderer.renderer.prepare, preparedProps);
                      preparedRef.contents = {
                        TAG: /* Loaded */1,
                        _0: prepared
                      };
                      return prepared;
                    };
                    var promise = loadedRouteRenderers.renderer_Root__HomeRoot;
                    if (typeof promise === "number") {
                      var __x = loadRouteRenderer$1(undefined);
                      var preparePromise = __x.then(function (param) {
                            var RouteRenderer = loadedRouteRenderers.renderer_Root__HomeRoot;
                            if (typeof RouteRenderer === "number") {
                              throw {
                                    RE_EXN_ID: Route_loading_failed,
                                    _1: "Route renderer not in loaded state even though it should be. This should be impossible, please report this error.",
                                    Error: new Error()
                                  };
                            }
                            if (RouteRenderer.TAG !== /* Pending */0) {
                              return Promise.resolve(doPrepare(RouteRenderer._0));
                            }
                            throw {
                                  RE_EXN_ID: Route_loading_failed,
                                  _1: "Route renderer not in loaded state even though it should be. This should be impossible, please report this error.",
                                  Error: new Error()
                                };
                          });
                      preparedRef.contents = {
                        TAG: /* Pending */0,
                        _0: preparePromise
                      };
                    } else if (promise.TAG === /* Pending */0) {
                      var preparePromise$1 = promise._0.then(function (RouteRenderer) {
                            return Promise.resolve(doPrepare(RouteRenderer));
                          });
                      preparedRef.contents = {
                        TAG: /* Pending */0,
                        _0: preparePromise$1
                      };
                    } else {
                      doPrepare(promise._0);
                    }
                    var render = function (childRoutes) {
                      React.useEffect((function () {
                              $$clearTimeout$1(routeKey);
                              return (function (param) {
                                        return expirePrepared(routeKey);
                                      });
                            }), []);
                      var match = loadedRouteRenderers.renderer_Root__HomeRoot;
                      var match$1 = preparedRef.contents;
                      if (typeof match$1 === "number") {
                        console.log("Warning: Tried to render route with prepared not initiated. This should not happen, prepare should be called prior to any rendering.");
                        return null;
                      }
                      if (match$1.TAG === /* Pending */0) {
                        throw(match$1._0);
                        return null;
                      }
                      if (typeof match === "number") {
                        console.log("Warning: Invalid state");
                        return null;
                      }
                      if (match.TAG !== /* Pending */0) {
                        return Curry._1(match._0.renderer.render, {
                                    childRoutes: childRoutes,
                                    prepared: match$1._0,
                                    environment: environment,
                                    location: $$location
                                  });
                      }
                      console.log("Warning: Invalid state");
                      return null;
                    };
                    addPrepared(routeKey, (function () {
                            var prepared = preparedRef.contents;
                            if (typeof prepared === "number" || prepared.TAG === /* Pending */0) {
                              return ;
                            } else {
                              return Belt_Array.forEach(RelayRouter__Internal.extractDisposables(prepared._0), (function (dispose) {
                                            return dispose();
                                          }));
                            }
                          }), render);
                    return render;
                  }),
                children: []
              },
              {
                path: "issue/:id",
                loadRouteRenderer: loadRouteRenderer$2,
                preloadCode: (function (environment, pathParams, queryParams, $$location) {
                    var apply = function (RouteRenderer) {
                      var preparedProps = Route__Root__IssueDetailRoot_route.makePrepareProps(environment, pathParams, queryParams, $$location);
                      var prepareCode = RouteRenderer.renderer.prepareCode;
                      if (prepareCode !== undefined) {
                        return prepareCode(preparedProps);
                      } else {
                        return [];
                      }
                    };
                    var promise = loadedRouteRenderers.renderer_Root__IssueDetailRoot;
                    if (typeof promise === "number") {
                      var __x = loadRouteRenderer$2(undefined);
                      return __x.then(function (param) {
                                  var RouteRenderer = loadedRouteRenderers.renderer_Root__IssueDetailRoot;
                                  if (typeof RouteRenderer === "number") {
                                    throw {
                                          RE_EXN_ID: Route_loading_failed,
                                          _1: "Invalid state after loading route renderer. Please report this error.",
                                          Error: new Error()
                                        };
                                  }
                                  if (RouteRenderer.TAG !== /* Pending */0) {
                                    return Promise.resolve(apply(RouteRenderer._0));
                                  }
                                  throw {
                                        RE_EXN_ID: Route_loading_failed,
                                        _1: "Invalid state after loading route renderer. Please report this error.",
                                        Error: new Error()
                                      };
                                });
                    }
                    if (promise.TAG === /* Pending */0) {
                      var __x$1 = promise._0;
                      return __x$1.then(function (RouteRenderer) {
                                  return Promise.resolve(apply(RouteRenderer));
                                });
                    }
                    var RouteRenderer = promise._0;
                    return new Promise((function (resolve, param) {
                                  return resolve(apply(RouteRenderer));
                                }));
                  }),
                prepare: (function (environment, pathParams, queryParams, $$location) {
                    var preparedProps = Route__Root__IssueDetailRoot_route.makePrepareProps(environment, pathParams, queryParams, $$location);
                    var routeKey = Route__Root__IssueDetailRoot_route.makeRouteKey(pathParams, queryParams);
                    var match = Belt_HashMapString.get(preparedMap, routeKey);
                    if (match !== undefined) {
                      return match.render;
                    }
                    var preparedRef = {
                      contents: /* NotInitiated */0
                    };
                    var doPrepare = function (RouteRenderer) {
                      var prepareCode = RouteRenderer.renderer.prepareCode;
                      if (prepareCode !== undefined) {
                        prepareCode(preparedProps);
                      }
                      var prepared = Curry._1(RouteRenderer.renderer.prepare, preparedProps);
                      preparedRef.contents = {
                        TAG: /* Loaded */1,
                        _0: prepared
                      };
                      return prepared;
                    };
                    var promise = loadedRouteRenderers.renderer_Root__IssueDetailRoot;
                    if (typeof promise === "number") {
                      var __x = loadRouteRenderer$2(undefined);
                      var preparePromise = __x.then(function (param) {
                            var RouteRenderer = loadedRouteRenderers.renderer_Root__IssueDetailRoot;
                            if (typeof RouteRenderer === "number") {
                              throw {
                                    RE_EXN_ID: Route_loading_failed,
                                    _1: "Route renderer not in loaded state even though it should be. This should be impossible, please report this error.",
                                    Error: new Error()
                                  };
                            }
                            if (RouteRenderer.TAG !== /* Pending */0) {
                              return Promise.resolve(doPrepare(RouteRenderer._0));
                            }
                            throw {
                                  RE_EXN_ID: Route_loading_failed,
                                  _1: "Route renderer not in loaded state even though it should be. This should be impossible, please report this error.",
                                  Error: new Error()
                                };
                          });
                      preparedRef.contents = {
                        TAG: /* Pending */0,
                        _0: preparePromise
                      };
                    } else if (promise.TAG === /* Pending */0) {
                      var preparePromise$1 = promise._0.then(function (RouteRenderer) {
                            return Promise.resolve(doPrepare(RouteRenderer));
                          });
                      preparedRef.contents = {
                        TAG: /* Pending */0,
                        _0: preparePromise$1
                      };
                    } else {
                      doPrepare(promise._0);
                    }
                    var render = function (childRoutes) {
                      React.useEffect((function () {
                              $$clearTimeout$1(routeKey);
                              return (function (param) {
                                        return expirePrepared(routeKey);
                                      });
                            }), []);
                      var match = loadedRouteRenderers.renderer_Root__IssueDetailRoot;
                      var match$1 = preparedRef.contents;
                      if (typeof match$1 === "number") {
                        console.log("Warning: Tried to render route with prepared not initiated. This should not happen, prepare should be called prior to any rendering.");
                        return null;
                      }
                      if (match$1.TAG === /* Pending */0) {
                        throw(match$1._0);
                        return null;
                      }
                      if (typeof match === "number") {
                        console.log("Warning: Invalid state");
                        return null;
                      }
                      if (match.TAG !== /* Pending */0) {
                        return Curry._1(match._0.renderer.render, {
                                    childRoutes: childRoutes,
                                    prepared: match$1._0,
                                    environment: environment,
                                    location: $$location,
                                    id: preparedProps.id
                                  });
                      }
                      console.log("Warning: Invalid state");
                      return null;
                    };
                    addPrepared(routeKey, (function () {
                            var prepared = preparedRef.contents;
                            if (typeof prepared === "number" || prepared.TAG === /* Pending */0) {
                              return ;
                            } else {
                              return Belt_Array.forEach(RelayRouter__Internal.extractDisposables(prepared._0), (function (dispose) {
                                            return dispose();
                                          }));
                            }
                          }), render);
                    return render;
                  }),
                children: []
              }
            ]
          }];
}

export {
  make ,
  
}
/* react Not a pure module */
