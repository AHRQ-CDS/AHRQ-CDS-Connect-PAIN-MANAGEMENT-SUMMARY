const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

// This is a CRACO configuration file.  Together with the `craco` CLI, it allows the default
// Create React App (CRA) configurations to be modified.  In the case of the Pain Management
// Summary, we must modify the WebpackConfig to setup the launch.html entry point and to
// add some aliases to replace large unnecessary files with smaller stubs.
//
// See: https://craco.js.org/

// Adds the launch.js entry.
// This transforms:
//   entry: "/path/to/pain-management-summary/src/index.js"
// to
//   entry: {
//     main: "/path/to/pain-management-summary/src/index.js",
//     launch: "/path/to/pain-management-summary/src/index.js"
//   }
const addLaunch = (config) => {
  const entry = config.entry;
  if (!entry || !entry.endsWith(`${path.sep}index.js`)) {
    console.error(
      "Cannot add launch.js to entry. Unexpected starting value for entry:",
      entry
    );
    return;
  }
  config.entry = {
    main: entry,
    launch: entry.replace(/[\/\\]index.js$/, `${path.sep}launch.js`),
  };
};

// Changes the output filename in development (not necessary in production).
// In development, this transforms:
//   output.filename: "static/js/bundle.js"
// to
//   output.filename: "static/js/[name].js"
const changeOutputFilenameForDev = (config, env) => {
  if (env !== "development") {
    return;
  }
  const filename = config.output.filename;
  if (!filename.endsWith("/bundle.js")) {
    console.error(
      "Cannot modify output filename. Unexpected starting value:",
      filename
    );
    return;
  }
  config.output.filename = filename.replace(/\/bundle.js$/, "/[name].js");
};

// Changes the existing HtmlWebpackPlugin for index.html to specify that it should use the main chunk.
// In production and development this transforms HtmlWebpackPlugin's:
//   userOptions.chunks: "all"
// to
//   userOptions.chunks: ["main"]
// In production, it also sets filename to index.html (which is already set in development).
const editHtmlWebpackPluginForIndex = (config) => {
  const indexPlugin = getIndexHtmlWebpackPlugin(config);
  if (indexPlugin == null) {
    console.error("Cannot modify HtmlWebpackPlugin for index.html: not found.");
    return;
  }
  indexPlugin.filename = 'index.html';
  indexPlugin.userOptions.chunks = ["main"];
};

// Adds a new HtmlWebpackPlugin for launch.html.  It is configured the same as the index.html one,
// except filename is "launch.html" and chunks are ["launch"].
const addHtmlWebpackPluginForLaunch = (config) => {
  const indexPlugin = getIndexHtmlWebpackPlugin(config);
  if (indexPlugin == null) {
    console.error(
      "Cannot find HtmlWebpackPlugin for index.html to use as baseline for launch plugin."
    );
    return;
  }
  const launchOptions = Object.assign({}, indexPlugin.userOptions);
  launchOptions.filename = "launch.html";
  launchOptions.chunks = ["launch"];
  config.plugins.push(new HtmlWebpackPlugin(launchOptions));
};

// Configures fallbacks for modules that aren't available to webpack. In our case, we don't need
// the polyfills, so just set fallback to false.
const configureFallbacks = (config) => {
  // currently, resolve.fallback doesn't exist, but play nice in case it is added in the future.
  if (config.resolve.fallback == null) {
    config.resolve.fallback = {};
  }
  const fallback = config.resolve.fallback;
  fallback['fs'] = false;
  fallback['buffer'] = false;
  fallback['timers'] = false;
};

// Stubs out files that are not needed but take up lots of space in webpacked source. This includes:
// ./fhir/models (from cql-execution)
// ./modelInfos/fhir-modelinfo-1.6.xml.js (from cql-exec-fhir)
// ./modelInfos/fhir-modelinfo-3.0.0.xml.js (from cql-exec-fhir)
// ./modelInfos/fhir-modelinfo-4.0.0.xml.js (from cql-exec-fhir)
const stubUnneededFiles = (config) => {
  // currently, resolve.alias exists (for react-native), but play it safe in case this
  // changes in the future
  if (config.resolve.alias == null) {
    config.resolve.alias = {};
  }
  const alias = config.resolve.alias;
  // Replace cql-execution's packaged FHIR model w/ a stubbed version since we
  // don't use the FHIR model from cql-execution and it takes up a lot of space.
  alias["./fhir/models"] = path.resolve(
    __dirname,
    "./src/stubs/fhir-models.js"
  );
  // Replace cql-exec-fhir's bundled 1.6, 3.0.0, and 4.0.0 modelinfos with stubs since we
  // only use the 1.0.2 and 4.0.1 modelinfos and the others take up a lot of space.
  alias["./modelInfos/fhir-modelinfo-1.6.xml.js"] = path.resolve(
    __dirname,
    "./src/stubs/fhir-modelinfo-stub.xml.js"
  );
  alias["./modelInfos/fhir-modelinfo-3.0.0.xml.js"] = path.resolve(
    __dirname,
    "./src/stubs/fhir-modelinfo-stub.xml.js"
  );
  alias["./modelInfos/fhir-modelinfo-4.0.0.xml.js"] = path.resolve(
    __dirname,
    "./src/stubs/fhir-modelinfo-stub.xml.js"
  );
};

// Gets the HtmlWebpackPlugin for index.html
const getIndexHtmlWebpackPlugin = (config) => {
  const htmlWebpackPlugins = config.plugins.filter((plugin) => {
    return plugin.constructor.name === 'HtmlWebpackPlugin' && plugin.userOptions.template.endsWith("index.html");
  });
  if (htmlWebpackPlugins.length === 1) {
    return htmlWebpackPlugins[0];
  }
}

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      addLaunch(webpackConfig);
      changeOutputFilenameForDev(webpackConfig, env);
      editHtmlWebpackPluginForIndex(webpackConfig);
      addHtmlWebpackPluginForLaunch(webpackConfig);
      configureFallbacks(webpackConfig);
      stubUnneededFiles(webpackConfig);
      return webpackConfig;
    }
  },
};
