type callback<'input, 'output> = 'input => 'output

@module("react")
external useTransition: unit => (bool, callback<callback<unit, unit>, unit>) = "useTransition"

module SuspenseList = {
  @module("react") @react.component
  external make: (
    ~children: React.element,
    ~revealOrder: [#forwards | #backwards | #together]=?,
  ) => React.element = "SuspenseList"
}

module Cache = {
  @module("react") @react.component
  external make: (~children: React.element) => React.element = "unstable_Cache"
}
