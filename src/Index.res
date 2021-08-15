@module("./index.css") external _css: string = "default"

ReactDomExperimental.renderRootAtElementWithId(
  <React.StrictMode>
    <RescriptRelay.Context.Provider environment=RelayEnv.environment>
      <App />
    </RescriptRelay.Context.Provider>
  </React.StrictMode>,
  "root",
)
