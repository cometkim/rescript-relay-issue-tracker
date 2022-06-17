@module("./index.css") external _css: string = "default"

ReactDOMExperimental.renderConcurrentRootAtElementWithId(
  <React.StrictMode>
    <RescriptRelay.Context.Provider environment=RelayEnv.environment>
      <RelayRouter.Provider value=Router.routerContext>
        <React.Suspense fallback={React.string("Loading...")}>
          <RescriptReactErrorBoundary fallback={_ => React.string("Error!")}>
            <RelayRouter.RouteRenderer
              renderFallback={_ => React.string("Loading fallback...")}
              renderPending={pending =>
                switch pending {
                | true =>
                  <div className="RouteRenderer-pending">
                    {React.string("Loading pending...")}
                  </div>
                | false => React.null
                }}
            />
          </RescriptReactErrorBoundary>
        </React.Suspense>
      </RelayRouter.Provider>
    </RescriptRelay.Context.Provider>
  </React.StrictMode>,
  "root",
)
