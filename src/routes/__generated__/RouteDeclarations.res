
@val external suspend: Js.Promise.t<'any> => unit = "throw"

exception Route_loading_failed(string)


module type T__Root = module type of Root_route_renderer
@val external import__Root: (@as(json`"@rescriptModule/Root_route_renderer"`) _, unit) => Js.Promise.t<module(T__Root)> = "import"

module type T__Root__HomeRoot = module type of Root__HomeRoot_route_renderer
@val external import__Root__HomeRoot: (@as(json`"@rescriptModule/Root__HomeRoot_route_renderer"`) _, unit) => Js.Promise.t<module(T__Root__HomeRoot)> = "import"

module type T__Root__IssueDetailRoot = module type of Root__IssueDetailRoot_route_renderer
@val external import__Root__IssueDetailRoot: (@as(json`"@rescriptModule/Root__IssueDetailRoot_route_renderer"`) _, unit) => Js.Promise.t<module(T__Root__IssueDetailRoot)> = "import"

type loadedRouteRenderer<'routeRendererModule> = NotInitiated | Pending(Js.Promise.t<'routeRendererModule>) | Loaded('routeRendererModule)

type loadedRouteRendererMap = {
  mutable renderer_Root: loadedRouteRenderer<module(T__Root)>,
  mutable renderer_Root__HomeRoot: loadedRouteRenderer<module(T__Root__HomeRoot)>,
  mutable renderer_Root__IssueDetailRoot: loadedRouteRenderer<module(T__Root__IssueDetailRoot)>,
}

let loadedRouteRenderers: loadedRouteRendererMap = {
  renderer_Root: NotInitiated,
  renderer_Root__HomeRoot: NotInitiated,
  renderer_Root__IssueDetailRoot: NotInitiated,
}

type preparedContainer = {
  dispose: (. unit) => unit,
  render: RelayRouter.Types.renderRouteFn,
  mutable timeout: option<Js.Global.timeoutId>
}

let make = (~prepareDisposeTimeout=5 * 60 * 1000, ()): array<RelayRouter.Types.route> => {
  let preparedMap: Belt.HashMap.String.t<preparedContainer> = Belt.HashMap.String.make(~hintSize=3)

  let getPrepared = (~routeKey) => 
    preparedMap->Belt.HashMap.String.get(routeKey)

  let disposeOfPrepared = (~routeKey) => {
    switch getPrepared(~routeKey) {
      | None => ()
      | Some({dispose}) => dispose(.)
    }
  }

  let clearTimeout = (~routeKey) => {
    switch getPrepared(~routeKey) {
      | Some({timeout: Some(timeoutId)}) => Js.Global.clearTimeout(timeoutId)
      | _ => ()
    }
  }

  let expirePrepared = (~routeKey) => {
    disposeOfPrepared(~routeKey)
    clearTimeout(~routeKey)
    preparedMap->Belt.HashMap.String.remove(routeKey)
  }

  let setTimeout = (~routeKey) => {
    clearTimeout(~routeKey)
    switch getPrepared(~routeKey) {
      | Some(r) => 
        r.timeout = Some(Js.Global.setTimeout(() => {
          disposeOfPrepared(~routeKey)
          expirePrepared(~routeKey)
        }, prepareDisposeTimeout))
      | None => ()
    }
  }

  let addPrepared = (~routeKey, ~dispose, ~render) => {
    preparedMap->Belt.HashMap.String.set(routeKey, {
      dispose,
      render,
      timeout: None
    })


    setTimeout(~routeKey)
  }

  [
      {
    let loadRouteRenderer = () => {
      let promise = import__Root()
      loadedRouteRenderers.renderer_Root = Pending(promise)
  
      promise->Js.Promise.then_(m => {
        let module(M: T__Root) = m
        loadedRouteRenderers.renderer_Root = Loaded(module(M))
        Js.Promise.resolve()
      }, _)
    }
  
    {
      path: "/",
      loadRouteRenderer,
      preloadCode: (
        . ~environment: RescriptRelay.Environment.t,
        ~pathParams: Js.Dict.t<string>,
        ~queryParams: RelayRouter.Bindings.QueryParams.t,
        ~location: RelayRouter.Bindings.History.location,
      ) => {
        let apply = (module(RouteRenderer: T__Root)) => {
          let preparedProps = Route__Root_route.makePrepareProps(.
            ~environment,
            ~pathParams,
            ~queryParams,
            ~location,
          )
        
          switch RouteRenderer.renderer.prepareCode {
            | Some(prepareCode) => prepareCode(. preparedProps)
            | None => []
          }
        }
  
        switch loadedRouteRenderers.renderer_Root {
        | NotInitiated => loadRouteRenderer()->Js.Promise.then_(() => {
          switch loadedRouteRenderers.renderer_Root {
            | Loaded(module(RouteRenderer)) => module(RouteRenderer)->apply->Js.Promise.resolve
            | _ => raise(Route_loading_failed("Invalid state after loading route renderer. Please report this error."))
          }
        }, _)
        | Pending(promise) => promise->Js.Promise.then_((module(RouteRenderer: T__Root)) => {
            module(RouteRenderer)->apply->Js.Promise.resolve
          }, _)
        | Loaded(module(RouteRenderer)) => 
          Js.Promise.make((~resolve, ~reject as _) => {
            resolve(. apply(module(RouteRenderer)))
          })
        }
      },
      prepare: (
        . ~environment: RescriptRelay.Environment.t,
        ~pathParams: Js.Dict.t<string>,
        ~queryParams: RelayRouter.Bindings.QueryParams.t,
        ~location: RelayRouter.Bindings.History.location,
      ) => {
        let preparedProps = Route__Root_route.makePrepareProps(.
          ~environment,
          ~pathParams,
          ~queryParams,
          ~location,
        )
        let routeKey = Route__Root_route.makeRouteKey(~pathParams, ~queryParams)
  
        switch getPrepared(~routeKey) {
          | Some({render}) => render
          | None => 
  
          let preparedRef = ref(NotInitiated)
  
          let doPrepare = (module(RouteRenderer: T__Root)) => {
            switch RouteRenderer.renderer.prepareCode {
            | Some(prepareCode) =>
              let _ = prepareCode(. preparedProps)
            | None => ()
            }
  
            let prepared = RouteRenderer.renderer.prepare(preparedProps)
            preparedRef.contents = Loaded(prepared)
  
            prepared
          }
          
          switch loadedRouteRenderers.renderer_Root {
          | NotInitiated =>
            let preparePromise = loadRouteRenderer()->Js.Promise.then_(() => {
              switch loadedRouteRenderers.renderer_Root {
              | Loaded(module(RouteRenderer)) => doPrepare(module(RouteRenderer))->Js.Promise.resolve
              | _ => raise(Route_loading_failed("Route renderer not in loaded state even though it should be. This should be impossible, please report this error."))
              }
            }, _)
            preparedRef.contents = Pending(preparePromise)
          | Pending(promise) =>
            let preparePromise = promise->Js.Promise.then_((module(RouteRenderer: T__Root)) => {
              doPrepare(module(RouteRenderer))->Js.Promise.resolve
            }, _)
            preparedRef.contents = Pending(preparePromise)
          | Loaded(module(RouteRenderer)) => let _ = doPrepare(module(RouteRenderer))
          }
  
          let render = (. ~childRoutes) => {
            React.useEffect0(() => {
              clearTimeout(~routeKey)
  
              Some(() => {
                expirePrepared(~routeKey)
              })
            })
  
            switch (
              loadedRouteRenderers.renderer_Root,
              preparedRef.contents,
            ) {
            | (_, NotInitiated) =>
              Js.log(
                "Warning: Tried to render route with prepared not initiated. This should not happen, prepare should be called prior to any rendering.",
              )
              React.null
            | (_, Pending(promise)) =>
              suspend(promise)
              React.null
            | (Loaded(module(RouteRenderer: T__Root)), Loaded(prepared)) =>
              RouteRenderer.renderer.render({
                environment: environment,
                childRoutes: childRoutes,
                location: location,
                prepared: prepared,
  
  
              })
            | _ =>
              Js.log("Warning: Invalid state")
              React.null
            }
          }
  
          addPrepared(~routeKey, ~render, ~dispose=(. ) => {
            switch preparedRef.contents {
              | Loaded(prepared) => 
                RelayRouter.Internal.extractDisposables(. prepared)
                ->Belt.Array.forEach(dispose => {
                  dispose(.)
                })
              | _ => ()
            }
          })
  
          render
        }
      },
      children: [    {
        let loadRouteRenderer = () => {
          let promise = import__Root__HomeRoot()
          loadedRouteRenderers.renderer_Root__HomeRoot = Pending(promise)
      
          promise->Js.Promise.then_(m => {
            let module(M: T__Root__HomeRoot) = m
            loadedRouteRenderers.renderer_Root__HomeRoot = Loaded(module(M))
            Js.Promise.resolve()
          }, _)
        }
      
        {
          path: "",
          loadRouteRenderer,
          preloadCode: (
            . ~environment: RescriptRelay.Environment.t,
            ~pathParams: Js.Dict.t<string>,
            ~queryParams: RelayRouter.Bindings.QueryParams.t,
            ~location: RelayRouter.Bindings.History.location,
          ) => {
            let apply = (module(RouteRenderer: T__Root__HomeRoot)) => {
              let preparedProps = Route__Root__HomeRoot_route.makePrepareProps(.
                ~environment,
                ~pathParams,
                ~queryParams,
                ~location,
              )
            
              switch RouteRenderer.renderer.prepareCode {
                | Some(prepareCode) => prepareCode(. preparedProps)
                | None => []
              }
            }
      
            switch loadedRouteRenderers.renderer_Root__HomeRoot {
            | NotInitiated => loadRouteRenderer()->Js.Promise.then_(() => {
              switch loadedRouteRenderers.renderer_Root__HomeRoot {
                | Loaded(module(RouteRenderer)) => module(RouteRenderer)->apply->Js.Promise.resolve
                | _ => raise(Route_loading_failed("Invalid state after loading route renderer. Please report this error."))
              }
            }, _)
            | Pending(promise) => promise->Js.Promise.then_((module(RouteRenderer: T__Root__HomeRoot)) => {
                module(RouteRenderer)->apply->Js.Promise.resolve
              }, _)
            | Loaded(module(RouteRenderer)) => 
              Js.Promise.make((~resolve, ~reject as _) => {
                resolve(. apply(module(RouteRenderer)))
              })
            }
          },
          prepare: (
            . ~environment: RescriptRelay.Environment.t,
            ~pathParams: Js.Dict.t<string>,
            ~queryParams: RelayRouter.Bindings.QueryParams.t,
            ~location: RelayRouter.Bindings.History.location,
          ) => {
            let preparedProps = Route__Root__HomeRoot_route.makePrepareProps(.
              ~environment,
              ~pathParams,
              ~queryParams,
              ~location,
            )
            let routeKey = Route__Root__HomeRoot_route.makeRouteKey(~pathParams, ~queryParams)
      
            switch getPrepared(~routeKey) {
              | Some({render}) => render
              | None => 
      
              let preparedRef = ref(NotInitiated)
      
              let doPrepare = (module(RouteRenderer: T__Root__HomeRoot)) => {
                switch RouteRenderer.renderer.prepareCode {
                | Some(prepareCode) =>
                  let _ = prepareCode(. preparedProps)
                | None => ()
                }
      
                let prepared = RouteRenderer.renderer.prepare(preparedProps)
                preparedRef.contents = Loaded(prepared)
      
                prepared
              }
              
              switch loadedRouteRenderers.renderer_Root__HomeRoot {
              | NotInitiated =>
                let preparePromise = loadRouteRenderer()->Js.Promise.then_(() => {
                  switch loadedRouteRenderers.renderer_Root__HomeRoot {
                  | Loaded(module(RouteRenderer)) => doPrepare(module(RouteRenderer))->Js.Promise.resolve
                  | _ => raise(Route_loading_failed("Route renderer not in loaded state even though it should be. This should be impossible, please report this error."))
                  }
                }, _)
                preparedRef.contents = Pending(preparePromise)
              | Pending(promise) =>
                let preparePromise = promise->Js.Promise.then_((module(RouteRenderer: T__Root__HomeRoot)) => {
                  doPrepare(module(RouteRenderer))->Js.Promise.resolve
                }, _)
                preparedRef.contents = Pending(preparePromise)
              | Loaded(module(RouteRenderer)) => let _ = doPrepare(module(RouteRenderer))
              }
      
              let render = (. ~childRoutes) => {
                React.useEffect0(() => {
                  clearTimeout(~routeKey)
      
                  Some(() => {
                    expirePrepared(~routeKey)
                  })
                })
      
                switch (
                  loadedRouteRenderers.renderer_Root__HomeRoot,
                  preparedRef.contents,
                ) {
                | (_, NotInitiated) =>
                  Js.log(
                    "Warning: Tried to render route with prepared not initiated. This should not happen, prepare should be called prior to any rendering.",
                  )
                  React.null
                | (_, Pending(promise)) =>
                  suspend(promise)
                  React.null
                | (Loaded(module(RouteRenderer: T__Root__HomeRoot)), Loaded(prepared)) =>
                  RouteRenderer.renderer.render({
                    environment: environment,
                    childRoutes: childRoutes,
                    location: location,
                    prepared: prepared,
      
      
                  })
                | _ =>
                  Js.log("Warning: Invalid state")
                  React.null
                }
              }
      
              addPrepared(~routeKey, ~render, ~dispose=(. ) => {
                switch preparedRef.contents {
                  | Loaded(prepared) => 
                    RelayRouter.Internal.extractDisposables(. prepared)
                    ->Belt.Array.forEach(dispose => {
                      dispose(.)
                    })
                  | _ => ()
                }
              })
      
              render
            }
          },
          children: [],
        }
      },
      {
        let loadRouteRenderer = () => {
          let promise = import__Root__IssueDetailRoot()
          loadedRouteRenderers.renderer_Root__IssueDetailRoot = Pending(promise)
      
          promise->Js.Promise.then_(m => {
            let module(M: T__Root__IssueDetailRoot) = m
            loadedRouteRenderers.renderer_Root__IssueDetailRoot = Loaded(module(M))
            Js.Promise.resolve()
          }, _)
        }
      
        {
          path: "issue/:id",
          loadRouteRenderer,
          preloadCode: (
            . ~environment: RescriptRelay.Environment.t,
            ~pathParams: Js.Dict.t<string>,
            ~queryParams: RelayRouter.Bindings.QueryParams.t,
            ~location: RelayRouter.Bindings.History.location,
          ) => {
            let apply = (module(RouteRenderer: T__Root__IssueDetailRoot)) => {
              let preparedProps = Route__Root__IssueDetailRoot_route.makePrepareProps(.
                ~environment,
                ~pathParams,
                ~queryParams,
                ~location,
              )
            
              switch RouteRenderer.renderer.prepareCode {
                | Some(prepareCode) => prepareCode(. preparedProps)
                | None => []
              }
            }
      
            switch loadedRouteRenderers.renderer_Root__IssueDetailRoot {
            | NotInitiated => loadRouteRenderer()->Js.Promise.then_(() => {
              switch loadedRouteRenderers.renderer_Root__IssueDetailRoot {
                | Loaded(module(RouteRenderer)) => module(RouteRenderer)->apply->Js.Promise.resolve
                | _ => raise(Route_loading_failed("Invalid state after loading route renderer. Please report this error."))
              }
            }, _)
            | Pending(promise) => promise->Js.Promise.then_((module(RouteRenderer: T__Root__IssueDetailRoot)) => {
                module(RouteRenderer)->apply->Js.Promise.resolve
              }, _)
            | Loaded(module(RouteRenderer)) => 
              Js.Promise.make((~resolve, ~reject as _) => {
                resolve(. apply(module(RouteRenderer)))
              })
            }
          },
          prepare: (
            . ~environment: RescriptRelay.Environment.t,
            ~pathParams: Js.Dict.t<string>,
            ~queryParams: RelayRouter.Bindings.QueryParams.t,
            ~location: RelayRouter.Bindings.History.location,
          ) => {
            let preparedProps = Route__Root__IssueDetailRoot_route.makePrepareProps(.
              ~environment,
              ~pathParams,
              ~queryParams,
              ~location,
            )
            let routeKey = Route__Root__IssueDetailRoot_route.makeRouteKey(~pathParams, ~queryParams)
      
            switch getPrepared(~routeKey) {
              | Some({render}) => render
              | None => 
      
              let preparedRef = ref(NotInitiated)
      
              let doPrepare = (module(RouteRenderer: T__Root__IssueDetailRoot)) => {
                switch RouteRenderer.renderer.prepareCode {
                | Some(prepareCode) =>
                  let _ = prepareCode(. preparedProps)
                | None => ()
                }
      
                let prepared = RouteRenderer.renderer.prepare(preparedProps)
                preparedRef.contents = Loaded(prepared)
      
                prepared
              }
              
              switch loadedRouteRenderers.renderer_Root__IssueDetailRoot {
              | NotInitiated =>
                let preparePromise = loadRouteRenderer()->Js.Promise.then_(() => {
                  switch loadedRouteRenderers.renderer_Root__IssueDetailRoot {
                  | Loaded(module(RouteRenderer)) => doPrepare(module(RouteRenderer))->Js.Promise.resolve
                  | _ => raise(Route_loading_failed("Route renderer not in loaded state even though it should be. This should be impossible, please report this error."))
                  }
                }, _)
                preparedRef.contents = Pending(preparePromise)
              | Pending(promise) =>
                let preparePromise = promise->Js.Promise.then_((module(RouteRenderer: T__Root__IssueDetailRoot)) => {
                  doPrepare(module(RouteRenderer))->Js.Promise.resolve
                }, _)
                preparedRef.contents = Pending(preparePromise)
              | Loaded(module(RouteRenderer)) => let _ = doPrepare(module(RouteRenderer))
              }
      
              let render = (. ~childRoutes) => {
                React.useEffect0(() => {
                  clearTimeout(~routeKey)
      
                  Some(() => {
                    expirePrepared(~routeKey)
                  })
                })
      
                switch (
                  loadedRouteRenderers.renderer_Root__IssueDetailRoot,
                  preparedRef.contents,
                ) {
                | (_, NotInitiated) =>
                  Js.log(
                    "Warning: Tried to render route with prepared not initiated. This should not happen, prepare should be called prior to any rendering.",
                  )
                  React.null
                | (_, Pending(promise)) =>
                  suspend(promise)
                  React.null
                | (Loaded(module(RouteRenderer: T__Root__IssueDetailRoot)), Loaded(prepared)) =>
                  RouteRenderer.renderer.render({
                    environment: environment,
                    childRoutes: childRoutes,
                    location: location,
                    prepared: prepared,
                      id: preparedProps.id,
      
                  })
                | _ =>
                  Js.log("Warning: Invalid state")
                  React.null
                }
              }
      
              addPrepared(~routeKey, ~render, ~dispose=(. ) => {
                switch preparedRef.contents {
                  | Loaded(prepared) => 
                    RelayRouter.Internal.extractDisposables(. prepared)
                    ->Belt.Array.forEach(dispose => {
                      dispose(.)
                    })
                  | _ => ()
                }
              })
      
              render
            }
          },
          children: [],
        }
      }],
    }
  }
  ]
}