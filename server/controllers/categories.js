const {insertCategory, insertKeyWord} = require("../postgres/insert");
const {selectAvailableCategories} = require("../postgres/select");
const _ = require('lodash');

exports.loadCategories = async (req, res) => {
    const {username, password} = req.cookies;
    const categories = await selectAvailableCategories(username);
    const filteredCategories = _.partition(categories, {type: "private"});
    res.json({
        categories: [
            {
                type: "Private categories",
                values: filteredCategories[0]
            },
            {
                type: "Global categories",
                values: filteredCategories[1]
            }
        ]
    });
};

exports.addCategory = async (req, res) => {
    const {username, password} = req.cookies;
    const {name, keyWords, type} = req.body;
    const keyWordsArray = keyWords.toLowerCase().split(",").map(value => value.trim());
    const categories = await insertCategory(name, username, type);
    const category_id = categories[0].id;
    for (const keyWord of keyWordsArray) {
        await insertKeyWord(keyWord, category_id);
    }
    res.status(200).end();
};