const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
require('./config/Database')

//TODO: ROUTES
const userRouter = require("./routes/User")
const authRouter = require("./routes/Auth")

const app = express();
app.use(bodyParser.json())
app.use(cors())
const port: Number = 5000;

app.get("/", (req: any, res: { send: (arg0: string) => any; }) => res.send("Hello from server!"));
app.use("/user", userRouter);
app.use("/auth", authRouter);

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));