@module("./index.css") external _css: string = "default"

ReactDOMExperimental.renderConcurrentRootAtElementWithId(
  <React.StrictMode>
    <ReactExperimental.Cache>
      <RescriptRelay.Context.Provider environment=RelayEnv.environment>
        <Router.Provider value={Routes.routerContext}>
          <Router.RouteRenderer
            renderNotFound={_ => React.string("Page not found")}
            renderFallback={() => React.string("Loading fallback...")}
            renderPending={pending =>
              switch pending {
              | true =>
                <div className="RouteRenderer-pending"> {React.string("Loading pending...")} </div>
              | false => React.null
              }}
          />
        </Router.Provider>
      </RescriptRelay.Context.Provider>
    </ReactExperimental.Cache>
  </React.StrictMode>,
  "root",
)
