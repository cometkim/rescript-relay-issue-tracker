

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as Js_dict from "rescript/lib/es6/js_dict.js";
import * as Caml_obj from "rescript/lib/es6/caml_obj.js";
import * as Belt_Array from "rescript/lib/es6/belt_Array.js";
import * as Belt_Option from "rescript/lib/es6/belt_Option.js";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as Caml_exceptions from "rescript/lib/es6/caml_exceptions.js";
import * as RescriptReactRouter from "@rescript/react/src/RescriptReactRouter.bs.js";

function matchesUrl(t, url) {
  return Curry._1(t.matchesUrl, url);
}

function preload(t, url) {
  return Curry._1(t.preload, url);
}

function render(t, url) {
  return Curry._1(t.render, url);
}

function make(matchUrl, prepare, render) {
  return {
          preload: (function (url) {
              var params = Curry._1(matchUrl, url);
              if (params !== undefined) {
                Curry._1(prepare, Caml_option.valFromOption(params));
                return ;
              }
              
            }),
          matchesUrl: (function (url) {
              return Curry._1(matchUrl, url) !== undefined;
            }),
          render: (function (url) {
              var params = Curry._1(matchUrl, url);
              if (params !== undefined) {
                return Curry._1(render, Curry._1(prepare, Caml_option.valFromOption(params)));
              } else {
                return null;
              }
            })
        };
}

var RouteFamily = {
  matchesUrl: matchesUrl,
  preload: preload,
  render: render,
  make: make
};

function getHash(url) {
  var index = url.indexOf("#");
  if (index >= 0) {
    return url.slice(index + 1 | 0);
  } else {
    return String("");
  }
}

function pathParse(str) {
  switch (str) {
    case "" :
    case "/" :
        return /* [] */0;
    default:
      var raw = str.slice(1);
      var match = raw[raw.length - 1 | 0];
      var raw$1 = match === "/" ? raw.slice(0, -1) : raw;
      var match$1 = raw$1.split("?", 2);
      var raw$2 = match$1.length !== 2 ? raw$1 : match$1[0];
      var a = raw$2.split("/").filter(function (item) {
            return item.length !== 0;
          });
      var _i = a.length - 1 | 0;
      var _res = /* [] */0;
      while(true) {
        var res = _res;
        var i = _i;
        if (i < 0) {
          return res;
        }
        _res = {
          hd: a[i],
          tl: res
        };
        _i = i - 1 | 0;
        continue ;
      };
  }
}

function searchParse(str) {
  switch (str) {
    case "" :
    case "?" :
        return "";
    default:
      var match = str.split("?", 2);
      if (match.length !== 2) {
        return "";
      } else {
        return match[1];
      }
  }
}

function parseUrl(url) {
  return {
          path: pathParse(url),
          hash: getHash(url),
          search: searchParse(url)
        };
}

var context = React.createContext(undefined);

var make$1 = context.Provider;

function makeProps(value, children, param) {
  return {
          value: value,
          children: children
        };
}

var No_router_in_context = /* @__PURE__ */Caml_exceptions.create("RescriptRelayRouter.No_router_in_context");

function replaceShallow(path) {
  var match = typeof history === "undefined" ? undefined : history;
  var match$1 = typeof window === "undefined" ? undefined : window;
  if (match !== undefined && match$1 !== undefined) {
    match.replaceState(null, "", path);
    return ;
  }
  
}

function pushShallow(path) {
  var match = typeof history === "undefined" ? undefined : history;
  var match$1 = typeof window === "undefined" ? undefined : window;
  if (match !== undefined && match$1 !== undefined) {
    match.pushState(null, "", path);
    return ;
  }
  
}

var NavigationUtils = {
  replaceShallow: replaceShallow,
  pushShallow: pushShallow
};

function make$2(routes) {
  var initialUrl = RescriptReactRouter.dangerouslyGetInitialUrl(undefined, undefined);
  var matchRoutes = function (routes, url) {
    return Belt_Array.getBy(routes, (function (r) {
                  return Curry._1(r.matchesUrl, url);
                }));
  };
  var currentRoute = {
    contents: {
      route: matchRoutes(routes, initialUrl),
      url: initialUrl
    }
  };
  var subscribers = {};
  var subId = {
    contents: 0
  };
  var getNextId = function (param) {
    subId.contents = subId.contents + 1 | 0;
    return String(subId.contents);
  };
  RescriptReactRouter.watchUrl(function (url) {
        if (!Caml_obj.caml_notequal(url.path, currentRoute.contents.url.path)) {
          return ;
        }
        var route = matchRoutes(routes, url);
        if (route !== undefined) {
          Curry._1(route.preload, url);
        }
        var nextEntry = {
          route: route,
          url: url
        };
        currentRoute.contents = nextEntry;
        return Belt_Array.forEach(Js_dict.values(subscribers), (function (x) {
                      if (x !== undefined) {
                        return Curry._1(x, nextEntry);
                      }
                      
                    }));
      });
  return {
          get: (function (param) {
              return currentRoute.contents;
            }),
          preload: (function (url) {
              var asRouterUrl = parseUrl(url);
              var r = matchRoutes(routes, asRouterUrl);
              if (r !== undefined) {
                return Curry._1(r.preload, asRouterUrl);
              }
              
            }),
          subscribe: (function (cb) {
              var id = getNextId(undefined);
              subscribers[id] = cb;
              return function (param) {
                subscribers[id] = undefined;
                
              };
            })
        };
}

function useRouter(param) {
  var router = React.useContext(context);
  return React.useMemo((function () {
                return {
                        push: RescriptReactRouter.push,
                        pushShallow: pushShallow,
                        replace: RescriptReactRouter.replace,
                        replaceShallow: pushShallow,
                        preload: router.preload
                      };
              }), [router.preload]);
}

function RescriptRelayRouter$RouteRenderer(Props) {
  var renderPending = Props.renderPending;
  var renderFallback = Props.renderFallback;
  var renderNotFound = Props.renderNotFound;
  var match = React.useState(function () {
        return false;
      });
  var initialized = match[0];
  var router = React.useContext(context);
  var match$1 = React.useTransition();
  var startTransition = match$1[1];
  var match$2 = React.useState(function () {
        return Curry._1(router.get, undefined);
      });
  var setRouteEntry = match$2[1];
  var routeEntry = match$2[0];
  var match$3 = routeEntry.route;
  if (initialized || match$3 === undefined) {
    
  } else {
    Curry._1(match$3.preload, routeEntry.url);
    Curry._1(match[1], (function (param) {
            return true;
          }));
  }
  React.useEffect((function () {
          var currentEntry = Curry._1(router.get, undefined);
          if (Caml_obj.caml_notequal(routeEntry.url, currentEntry.url)) {
            Curry._1(setRouteEntry, (function (param) {
                    return currentEntry;
                  }));
            return ;
          } else {
            return Curry._1(router.subscribe, (function (nextRoute) {
                          return Curry._1(startTransition, (function (param) {
                                        return Curry._1(setRouteEntry, (function (param) {
                                                      return nextRoute;
                                                    }));
                                      }));
                        }));
          }
        }), [
        router,
        startTransition
      ]);
  var match$4 = routeEntry.route;
  var renderedContent = initialized && match$4 !== undefined ? Caml_option.some(Curry._1(match$4.render, routeEntry.url)) : undefined;
  if (initialized) {
    return React.createElement(React.Fragment, undefined, renderPending !== undefined ? Curry._1(renderPending, match$1[0]) : null, React.createElement(React.Suspense, {
                    children: renderedContent !== undefined ? Caml_option.valFromOption(renderedContent) : (
                        renderNotFound !== undefined ? Curry._1(renderNotFound, routeEntry.url) : null
                      ),
                    fallback: renderFallback !== undefined ? Curry._1(renderFallback, undefined) : null
                  }));
  } else {
    return null;
  }
}

var RouteRenderer = {
  make: RescriptRelayRouter$RouteRenderer
};

function isModifiedEvent(e) {
  var match = e.metaKey;
  var match$1 = e.altKey;
  var match$2 = e.ctrlKey;
  var match$3 = e.shiftKey;
  if (match$2 || match$3 || match$1 || match) {
    return true;
  } else {
    return false;
  }
}

function RescriptRelayRouter$Link(Props) {
  var to_ = Props.to_;
  var title = Props.title;
  var id = Props.id;
  var className = Props.className;
  var classNameDynamic = Props.classNameDynamic;
  var browserTarget = Props.target;
  var mode = Props.mode;
  var render = Props.render;
  var preloadOnHover = Props.preloadOnHover;
  var children = Props.children;
  var router = React.useContext(context);
  var url = RescriptReactRouter.useUrl(undefined, undefined);
  var changeRoute = React.useCallback((function (e) {
          var match = e.isDefaultPrevented();
          var match$1 = e.button;
          var match$2 = isModifiedEvent(e);
          if (match) {
            return ;
          }
          if (match$1 !== 0) {
            return ;
          }
          if (browserTarget !== undefined && browserTarget !== "self") {
            return ;
          }
          if (match$2) {
            return ;
          }
          e.preventDefault();
          var navigate = function (param) {
            if (mode === "replace") {
              return RescriptReactRouter.replace(to_);
            } else {
              return RescriptReactRouter.push(to_);
            }
          };
          navigate(undefined);
          
        }), [
        to_,
        router
      ]);
  var preload = React.useCallback((function (param) {
          return Curry._1(router.preload, to_);
        }), [
        to_,
        router
      ]);
  if (render !== undefined) {
    var linkUrl = parseUrl(to_);
    return Curry._4(render, preload, changeRoute, url, linkUrl);
  }
  var tmp = {
    className: Belt_Option.getWithDefault(className, "") + (
      classNameDynamic !== undefined ? " " + Curry._2(classNameDynamic, url, parseUrl(to_)) : ""
    ),
    href: to_,
    target: browserTarget !== undefined ? (
        browserTarget === "blank" ? "_blank" : "_self"
      ) : "",
    onClick: changeRoute,
    onMouseDown: (function (param) {
        return Curry._1(preload, undefined);
      }),
    onMouseEnter: (function (param) {
        if (preloadOnHover !== undefined && preloadOnHover) {
          return Curry._1(preload, undefined);
        }
        
      }),
    onTouchStart: (function (param) {
        return Curry._1(preload, undefined);
      })
  };
  if (id !== undefined) {
    tmp.id = Caml_option.valFromOption(id);
  }
  if (title !== undefined) {
    tmp.title = Caml_option.valFromOption(title);
  }
  return React.createElement("a", tmp, children);
}

var Link = {
  make: RescriptRelayRouter$Link
};

var Provider = {
  makeProps: makeProps,
  make: make$1
};

export {
  RouteFamily ,
  Provider ,
  No_router_in_context ,
  useRouter ,
  make$2 as make,
  RouteRenderer ,
  Link ,
  NavigationUtils ,
  
}
/* context Not a pure module */
