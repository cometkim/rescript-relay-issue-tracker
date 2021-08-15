type props

type resetKeys<'a> = array<'a>

type onResetKeysChange<'a> = (resetKeys<'a>, resetKeys<'a>) => unit
type onReset = unit => unit
type onError = (Js.Exn.t, string) => unit

type fallbackProps = {
  error: option<Js.Exn.t>,
  componentStack: option<string>,
  resetErrorBoundary: unit => unit,
}

type fallback = [
  | #element(React.element)
  | #render(React.component<fallbackProps>)
]

@obj
external makeErrorBoundaryPropsWithRender: (
  ~children: 'children=?,
  ~fallbackRender: fallbackProps => React.element,
  ~resetKeys: resetKeys<'a>=?,
  ~onError: onError=?,
  ~onReset: onReset=?,
  ~onResetKeysChange: onResetKeysChange<'a>=?,
  unit,
) => props = ""

@obj
external makeErrorBoundaryPropsWithFallback: (
  ~children: 'children=?,
  ~fallback: React.element,
  ~resetKeys: resetKeys<'a>=?,
  ~onError: onError=?,
  ~onReset: onReset=?,
  ~onResetKeysChange: onResetKeysChange<'a>=?,
  unit,
) => props = ""

let makeProps = (
  ~children=?,
  ~fallback: fallback,
  ~resetKeys: option<resetKeys<'a>>=?,
  ~onError: option<onError>=?,
  ~onReset: option<onReset>=?,
  ~onResetKeysChange: option<onResetKeysChange<'a>>=?,
  (),
) =>
  switch fallback {
  | #element(fallback) =>
    makeErrorBoundaryPropsWithFallback(
      ~children?,
      ~fallback,
      ~resetKeys?,
      ~onError?,
      ~onReset?,
      ~onResetKeysChange?,
      (),
    )
  | #render(fallbackRender) =>
    makeErrorBoundaryPropsWithRender(
      ~children?,
      ~fallbackRender,
      ~resetKeys?,
      ~onError?,
      ~onReset?,
      ~onResetKeysChange?,
      (),
    )
  }

@module("react-error-boundary")
external make: React.component<'a> = "ErrorBoundary"
