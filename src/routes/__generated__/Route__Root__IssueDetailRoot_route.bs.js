

import * as React from "react";
import * as Js_dict from "rescript/lib/es6/js_dict.js";
import * as Belt_Option from "rescript/lib/es6/belt_Option.js";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as ReactRouter from "react-router";
import * as RelayRouter__Utils from "rescript-relay-router/src/RelayRouter__Utils.bs.js";

function makeLink(id) {
  return "/issue/" + encodeURIComponent(id);
}

function isRouteActive(param, $staropt$star, param$1) {
  var exact = $staropt$star !== undefined ? $staropt$star : false;
  return Belt_Option.isSome(Caml_option.nullable_to_opt(ReactRouter.matchPath({
                      path: "/issue/:id",
                      end: exact
                    }, param.pathname)));
}

function useIsRouteActive(exactOpt, param) {
  var exact = exactOpt !== undefined ? exactOpt : false;
  var $$location = RelayRouter__Utils.useLocation(undefined);
  return React.useMemo((function () {
                return isRouteActive($$location, exact, undefined);
              }), [
              $$location,
              exact
            ]);
}

function makeRouteKey(pathParams, queryParams) {
  return "Root__IssueDetailRoot:" + Belt_Option.getWithDefault(Js_dict.get(pathParams, "id"), "");
}

function makePrepareProps(environment, pathParams, queryParams, $$location) {
  return {
          environment: environment,
          location: $$location,
          id: pathParams["id"]
        };
}

export {
  makeLink ,
  isRouteActive ,
  useIsRouteActive ,
  makeRouteKey ,
  makePrepareProps ,
  
}
/* react Not a pure module */
