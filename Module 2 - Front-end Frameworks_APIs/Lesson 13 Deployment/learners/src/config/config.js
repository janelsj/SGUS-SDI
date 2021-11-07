// require('dotenv').config();

const env = process.env.REACT_APP_ENV;

let config = {
    baseURL: "http://localhost/",
};

switch (env.toUpperCase()) {
    case "STAGE":
        config.baseURL = "https://stage.janelsj.github.io/deployment-test/";
        break;
    case "PRODUCTION":
        config.baseURL = "https://janelsj.github.io/deployment-test/";
        break;
}

export default config;