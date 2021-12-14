const language = require('@google-cloud/language');
const {selectAvailableCategories, selectCategoriesKeyWords} = require("../postgres/select");
const {insertTemplate, insertTemplateCategoryRelation} = require("../postgres/insert");
const client = new language.LanguageServiceClient();

exports.suggestCategories = async (req, res) => {
    const {username, password} = req.cookies;
    const {input} = req.body;
    const document = {
        content: input,
        type: 'PLAIN_TEXT',
    };
    const [result] = await client.analyzeEntities({document});
    const entities = result.entities;
    const keyWordsArray = entities.map(value => value.name.toLowerCase().trim());
    const categories = await selectAvailableCategories(username);
    const categories_id = categories.map(category => category.id);
    const keyWords = await selectCategoriesKeyWords(categories_id);
    const usedCategories = keyWords.flatMap(keyWord => keyWordsArray.some(usedKeyWord => usedKeyWord === keyWord.name) ? [keyWord.category_id] : []);
    res.json({suggestedCategories: [...new Set(usedCategories)]});
};

exports.addTemplate = async (req, res) => {
    const {username, password} = req.cookies;
    const {name, input, categories, type} = req.body;
    const templates = await insertTemplate(name, username, input, type);
    const template_id = templates[0].id;
    for (const category_id of categories) {
        await insertTemplateCategoryRelation(category_id, template_id);
    }
    res.status(200).end();
};