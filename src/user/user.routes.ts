import * as express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    console.log("user requested");
    // Make some call to user.controller.ts here
    res.json({user: "erick", fullname: "Erick Roberts"});
});

module.exports = router;
