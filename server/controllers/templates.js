exports.suggestCategories = (req, res) => {
    const {username, password} = req.cookies;
    const {input} = req.body;
    // const keyWordsArray = keyWords.toLowerCase().split(",").map(value => value.trim());
    res.json({suggestedCategories: ["12346"]});
};

exports.addTemplate = (req, res) => {
    const {username, password} = req.cookies;
    // const {name, keyWords, type} = req.body;
    // const keyWordsArray = keyWords.toLowerCase().split(",").map(value => value.trim());
    res.status(200).end();
};