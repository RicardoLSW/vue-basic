module.exports = {
  moduleFileExtensions: ["js", "json", "vue", "ts"],
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.vue$": "vue-jest",
    "^.+\\.ts$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts)$",
};
