const deepai = require("deepai");
const {getGeneratedResult} = require("../helpers");

exports.generate = (req, res) => {
    const {mode} = req.body;
    if (mode === "text") {
        const {input} = req.body;
        deepai.callStandardApi("text-generator", {
            text: input,
        }).then(response => {
            res.json({usedTemplate: input, result: getGeneratedResult(response.output)});
        }).catch(error => {
            res.status(500).end();
        });
    } else {
        const {category} = req.body;
        const {username, password} = req.cookies;
        const templates = ["Griffith did nothing wrong", "Oh my God, it is awful, ", "I refuse to"];
        const template = templates[Math.floor(Math.random()*templates.length)];
        deepai.callStandardApi("text-generator", {
            text: template,
        }).then(response => {
            res.json({usedTemplate: template, result: getGeneratedResult(response.output)});
        }).catch(error => {
            res.status(500).end();
        });
    }
};
