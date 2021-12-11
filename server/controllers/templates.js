const language = require('@google-cloud/language');
const client = new language.LanguageServiceClient();

exports.suggestCategories = async(req, res) => {
    const {username, password} = req.cookies;
    const {input} = req.body;
    const document = {
        content: input,
        type: 'PLAIN_TEXT',
    };
    // const [result] = await client.analyzeEntities({document});
    // const entities = result.entities;
    // entities.forEach(entity => {
    //     console.log(entity.name);
    //     console.log(` - Type: ${entity.type}, Salience: ${entity.salience}`);
    //     if (entity.metadata && entity.metadata.wikipedia_url) {
    //         console.log(` - Wikipedia URL: ${entity.metadata.wikipedia_url}`);
    //     }
    // });
    // const keyWordsArray = keyWords.toLowerCase().split(",").map(value => value.trim());
    res.json({suggestedCategories: ["12346"]});
};

exports.addTemplate = (req, res) => {
    const {username, password} = req.cookies;
    // const {name, keyWords, type} = req.body;
    // const keyWordsArray = keyWords.toLowerCase().split(",").map(value => value.trim());
    res.status(200).end();
};