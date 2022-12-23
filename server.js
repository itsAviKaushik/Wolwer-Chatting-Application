// | ----------------------------------------------------------- |
// | ----------------------------------------------------------- |
// | --- Project Name :- Unicorn   ----------------------------- |
// | --- Author :- Avichal Kaushik ----------------------------- |
// | --- Author Email :- avichalkaushik0007@gmail.com ---------- |
// | ----------------------------------------------------------- |
// | ----------------------------------------------------------- |

// Configuring the environmental variables.
require("dotenv").config();

const app = require("./app");

const server = app.listen(process.env.PORT, () => {
    console.log(`Server Listening on ${process.env.APP_HOME_URL} !`);
});