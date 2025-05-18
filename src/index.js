const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const PORT = 3000;

const io = new Server(httpServer);

io.on("connect", (socket) => {
    console.log("socket", socket);
})

app.use(express.static("public"));

app.listen(PORT, () => {
    console.log("Rodando na porta:", PORT)
});