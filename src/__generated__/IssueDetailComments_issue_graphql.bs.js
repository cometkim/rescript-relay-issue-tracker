/* @generated */

import * as Belt_Array from "rescript/lib/es6/belt_Array.js";
import * as RescriptRelay from "rescript-relay/src/RescriptRelay.bs.js";
import * as IssueDetailCommentsQuery_graphql from "./IssueDetailCommentsQuery_graphql.bs.js";

var Types = {};

var fragmentConverter = {};

function convertFragment(v) {
  return RescriptRelay.convertObj(v, fragmentConverter, undefined, undefined);
}

var Internal = {
  fragmentConverter: fragmentConverter,
  fragmentConverterMap: undefined,
  convertFragment: convertFragment
};

function getConnectionNodes(connection) {
  var edges = connection.edges;
  if (edges !== undefined) {
    return Belt_Array.keepMap(edges, (function (edge) {
                  if (edge !== undefined) {
                    return edge.node;
                  }
                  
                }));
  } else {
    return [];
  }
}

var Utils = {
  getConnectionNodes: getConnectionNodes
};

function makeNode(rescript_graphql_node_IssueDetailCommentsQuery) {
  return ((function(){
var v0 = [
  "comments"
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": 10,
      "kind": "LocalArgument",
      "name": "count"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "cursor"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "count",
          "cursor": "cursor"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [
        "node"
      ],
      "operation": rescript_graphql_node_IssueDetailCommentsQuery,
      "identifierField": "id"
    }
  },
  "name": "IssueDetailComments_issue",
  "selections": [
    {
      "alias": "comments",
      "args": null,
      "concreteType": "IssueCommentConnection",
      "kind": "LinkedField",
      "name": "__IssueDetailComments_comments_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "IssueCommentEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "IssueComment",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                (v1/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "concreteType": null,
                  "kind": "LinkedField",
                  "name": "author",
                  "plural": false,
                  "selections": [
                    (v2/*: any*/),
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "login",
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "avatarUrl",
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "body",
                  "storageKey": null
                },
                (v2/*: any*/)
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            },
            {
              "kind": "ClientExtension",
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__id",
                  "storageKey": null
                }
              ]
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    (v1/*: any*/)
  ],
  "type": "Issue",
  "abstractKey": null
};
})());
}

var node = makeNode(IssueDetailCommentsQuery_graphql.node);

export {
  Types ,
  Internal ,
  Utils ,
  node ,
  
}
/* node Not a pure module */
