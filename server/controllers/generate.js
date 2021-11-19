const deepai = require("deepai");

exports.generate = (req, res) => {
    const {mode} = req.body;
    if (mode === "text") {
        const {input} = req.body;
        deepai.callStandardApi("text-generator", {
            text: input,
        }).then(response => {
            const resultArray = response.output.match(/\S.*?\."?(?=\s|$)/g);
            const result = `${resultArray[0]} ${resultArray[1]}`;
            res.json({usedTemplate: input, result: result});
        }).catch(error => {

        });
    }
};
