const deepai = require("deepai");
const {getGeneratedResult} = require("../helpers");
const {selectTemplates} = require("../postgres/select");
const _ = require('lodash');

exports.generate = async (req, res) => {
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
        const templatesSelect = await selectTemplates(category);
        if (_.isEmpty(templatesSelect)) {
            const templates = ["Griffith did nothing wrong", "Oh my God, it is awful, ", "I refuse to"];
            const template = templates[Math.floor(Math.random() * templates.length)];
            deepai.callStandardApi("text-generator", {
                text: template,
            }).then(response => {
                res.json(
                    {
                        usedTemplate: "No template was found matching selected category.\nHere's the default generated joke.",
                        result: getGeneratedResult(response.output)
                    });
            }).catch(error => {
                res.status(500).end();
            });
        } else {
            const templates = templatesSelect.map(selected => selected.body);
            const template = templates[Math.floor(Math.random() * templates.length)];
            deepai.callStandardApi("text-generator", {
                text: template,
            }).then(response => {
                res.json({usedTemplate: template, result: getGeneratedResult(response.output)});
            }).catch(error => {
                res.status(500).end();
            });
        }
    }
};
