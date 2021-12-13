const crypto = require("crypto");
const hash = text => crypto.createHash('sha512').update(text).digest('base64');

const getGeneratedResult = (deepAiOutput) => {
    const resultArray = deepAiOutput.match(/\S.*?\."?(?=\s|$)/g);
    return `${resultArray[0]} ${resultArray[1]}`;
};

const getHash = (password) => hash(hash(password + process.env.salt1) + process.env.salt2);

const checkPassword = (password, savedHash) => savedHash === getHash(password);

module.exports = {
    getHash,
    getGeneratedResult,
    checkPassword
}