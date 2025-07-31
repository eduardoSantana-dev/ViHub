module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      // Adicione APENAS este plugin do WatermelonDB como PRIMEIRO
      ["@babel/plugin-proposal-decorators", { "legacy": true }],
      
      // Mantenha os plugins que já estavam funcionando
      "react-native-reanimated/plugin"
    ],
  };
};