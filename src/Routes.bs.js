

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as Config from "./Config.bs.js";
import * as Router from "./Router.bs.js";
import * as RelayEnv from "./RelayEnv.bs.js";
import * as RootLazy from "./RootLazy.bs.js";
import * as HomeRootLazy from "./HomeRootLazy.bs.js";
import * as RootQuery_graphql from "./__generated__/RootQuery_graphql.bs.js";
import * as IssueDetailRootLazy from "./IssueDetailRootLazy.bs.js";
import * as HomeRootQuery_graphql from "./__generated__/HomeRootQuery_graphql.bs.js";
import * as IssueDetailRootQuery_graphql from "./__generated__/IssueDetailRootQuery_graphql.bs.js";

var routes = Router.RouteFamily.make((function (url) {
        var match = url.path;
        if (!match) {
          return "Home";
        }
        if (match.hd !== "issue") {
          return ;
        }
        var match$1 = match.tl;
        if (match$1 && !match$1.tl) {
          return {
                  NAME: "IssueDetail",
                  VAL: match$1.hd
                };
        }
        
      }), (function (route) {
        if (typeof route === "object") {
          RootLazy.preload(undefined);
          IssueDetailRootLazy.preload(undefined);
          return {
                  NAME: "IssueDetail",
                  VAL: [
                    Curry._6(RootQuery_graphql.load, RelayEnv.environment, {
                          owner: Config.owner,
                          name: Config.name
                        }, /* StoreOrNetwork */1, undefined, undefined, undefined),
                    Curry._6(IssueDetailRootQuery_graphql.load, RelayEnv.environment, {
                          id: route.VAL
                        }, /* StoreOrNetwork */1, undefined, undefined, undefined)
                  ]
                };
        } else {
          RootLazy.preload(undefined);
          HomeRootLazy.preload(undefined);
          return {
                  NAME: "Home",
                  VAL: [
                    Curry._6(RootQuery_graphql.load, RelayEnv.environment, {
                          owner: Config.owner,
                          name: Config.name
                        }, /* StoreOrNetwork */1, undefined, undefined, undefined),
                    Curry._6(HomeRootQuery_graphql.load, RelayEnv.environment, {
                          owner: Config.owner,
                          name: Config.name
                        }, /* StoreOrNetwork */1, undefined, undefined, undefined)
                  ]
                };
        }
      }), (function (route) {
        if (route.NAME === "Home") {
          var match = route.VAL;
          return React.createElement(RootLazy.make, RootLazy.makeProps(match[0], React.createElement(HomeRootLazy.make, HomeRootLazy.makeProps(match[1], undefined, undefined)), undefined, undefined));
        }
        var match$1 = route.VAL;
        return React.createElement(RootLazy.make, RootLazy.makeProps(match$1[0], React.createElement(IssueDetailRootLazy.make, IssueDetailRootLazy.makeProps(match$1[1], undefined, undefined)), undefined, undefined));
      }));

var routerContext = Router.make([routes]);

export {
  routes ,
  routerContext ,
  
}
/* routes Not a pure module */
