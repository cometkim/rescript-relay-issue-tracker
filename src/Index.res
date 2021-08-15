@module("./index.css") external _css: string = "default"

ReactDomExperimental.renderRootAtElementWithId(
  <React.StrictMode>
    <ReactExperimental.Cache>
      <RescriptRelay.Context.Provider environment=RelayEnv.environment>
        <RescriptRelayRouter.Provider value={Routes.routerContext}>
          <RescriptRelayRouter.RouteRenderer
            renderNotFound={_ => React.string("Page not found")}
            renderFallback={() => React.string("Loading fallback...")}
            renderPending={pending =>
              switch pending {
              | true =>
                <div className="RouteRenderer-pending"> {React.string("Loading pending...")} </div>
              | false => React.null
              }}
          />
        </RescriptRelayRouter.Provider>
      </RescriptRelay.Context.Provider>
    </ReactExperimental.Cache>
  </React.StrictMode>,
  "root",
)
