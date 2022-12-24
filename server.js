// | ----------------------------------------------------------- |
// | ----------------------------------------------------------- |
// | --- Project Name :- Wolwer   ------------------------------ |
// | --- Author :- Avichal Kaushik ----------------------------- |
// | --- Author Email :- avichalkaushik0007@gmail.com ---------- |
// | ----------------------------------------------------------- |
// | ----------------------------------------------------------- |

// Configuring the environmental variables.
require("dotenv").config({
    path: "./config.env"
});

// Required Imports.
const app = require("./app");
const dbConnect = require("./src/dbConnect");

dbConnect();

const server = app.listen(process.env.PORT, () => {
    console.log(`Server Listening on ${process.env.APP_HOME_URL}`);
});