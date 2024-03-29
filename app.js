const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const session = require("cookie-session");

const config = require("./config");
const passport = require("./utils/passport");
const redis = require("./utils/redis");

const router = require("./routes");

const app = express();

// Middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(
  session({
    secret: config.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: redis,
  })
);

// Passport.js
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/api/", router);

const PORT = config.PORT;

app.listen(PORT, () => {
  console.log("Server started on port : ", PORT);
});
