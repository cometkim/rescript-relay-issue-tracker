

import * as React from "react";
import LogoSvg from "./logo.svg";

var logo = LogoSvg;

function App(Props) {
  return React.createElement("div", {
              className: "App"
            }, "Hi there");
}

var make = App;

export {
  logo ,
  make ,
  
}
/* logo Not a pure module */
