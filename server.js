const app = require("./app");

const server = app.listen(process.env.PORT, () => {
    console.log("Server Listening!");
});