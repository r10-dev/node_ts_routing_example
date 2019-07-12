import * as bodyParser from "body-parser";
import * as express from "express";

export const register = ( app: express.Application, router: express.Router ) => {
    const users = require("../user/user.routes");
    const base = "/api";
    router
        .use( (req, res, next) => {
        // do logging
            console.log("Something is happening.");
            next(); // make sure we go to the next routes and don't stop here
        })
        .get(base + "/", (req, res) => {
            res.json({ message: "hooray! welcome to our api!" });
        });

    app
        .use(bodyParser.urlencoded({ extended: true }))
        .use(bodyParser.json({type: ["application/json", "application/csp-report"]}))
        .use(base + "/users", users);

};
