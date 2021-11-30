exports.loadCategories = (req, res) => {
    const {username, password} = req.cookies;
    res.json({
        categories: [
            {
                type: "Private categories",
                values: [{id: "12345", name: "First"}]
            },
            {
                type: "Global categories",
                values: [{id: "12346", name: "Second"}]
            }
        ]
    });
};

exports.addCategory = (req, res) => {
    const {username, password} = req.cookies;
    const {name, keyWords, type} = req.body;
    const keyWordsArray = keyWords.toLowerCase().split(",").map(value => value.trim());
    res.status(200).end();
};