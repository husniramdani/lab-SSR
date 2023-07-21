// The ignore-styles package is a workaround to prevent these style-related
// import or require statements from throwing errors and to allow the server
// to run without failing due to this particular issue.
require("ignore-styles");

require("@babel/register")({
  ignore: [/(node_modules)/],
  presets: ["@babel/preset-env", "@babel/preset-react"],
});

require("./server");
