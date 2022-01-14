

import * as React from "react";
import * as Router from "./Router.bs.js";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as Js_null_undefined from "rescript/lib/es6/js_null_undefined.js";
import * as Hooks from "react-relay/hooks";
import * as RescriptRelay_Internal from "rescript-relay/src/RescriptRelay_Internal.bs.js";
import * as IssuesListItem_issue_graphql from "./__generated__/IssuesListItem_issue_graphql.bs.js";

function use(fRef) {
  var data = Hooks.useFragment(IssuesListItem_issue_graphql.node, fRef);
  return RescriptRelay_Internal.internal_useConvertedValue(IssuesListItem_issue_graphql.Internal.convertFragment, data);
}

function useOpt(opt_fRef) {
  var fr = opt_fRef !== undefined ? Caml_option.some(Caml_option.valFromOption(opt_fRef)) : undefined;
  var nullableFragmentData = Hooks.useFragment(IssuesListItem_issue_graphql.node, fr !== undefined ? Js_null_undefined.fromOption(Caml_option.some(Caml_option.valFromOption(fr))) : null);
  var data = (nullableFragmentData == null) ? undefined : Caml_option.some(nullableFragmentData);
  return RescriptRelay_Internal.internal_useConvertedValue((function (rawFragment) {
                if (rawFragment !== undefined) {
                  return IssuesListItem_issue_graphql.Internal.convertFragment(rawFragment);
                }
                
              }), data);
}

var IssueFragment = {
  Types: undefined,
  use: use,
  useOpt: useOpt
};

function IssuesListItem(Props) {
  var issue = Props.issue;
  var issue$1 = use(issue);
  return React.createElement(Router.Link.make, {
              to_: "/issue/" + issue$1.id,
              preloadOnHover: true,
              children: issue$1.title
            });
}

var make = IssuesListItem;

export {
  IssueFragment ,
  make ,
  
}
/* react Not a pure module */
