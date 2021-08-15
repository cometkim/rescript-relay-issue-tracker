

import * as ReactDom from "react-dom";

function renderRootAtElementWithId(content, id) {
  var element = document.getElementById(id);
  if (element == null) {
    throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "ReactExperimental.renderConcurrentRootAtElementWithId : no element of id " + id + " found in the HTML.",
          Error: new Error()
        };
  }
  ReactDom.createRoot(element).render(content);
  
}

export {
  renderRootAtElementWithId ,
  
}
/* react-dom Not a pure module */
