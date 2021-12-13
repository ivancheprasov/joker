const {selectUser} = require("../postgres/select");
const {insertUser} = require("../postgres/insert");
const {checkPassword} = require("../helpers");

exports.loadProfile = async (req, res) => {
    const {username, password} = req.cookies;
    if (username) {
        const user = await selectUser(username);
        if (user) {
            if (checkPassword(password, user.password)) {
                res.json({username, isSuperuser: user.is_superuser});
            } else {
                res.status(403).end();
            }
        } else {
            res.status(404).end();
        }
    } else {
        res.status(403).end();
    }
};

exports.login = async (req, res) => {
    const {username, password} = req.body;
    const user = await selectUser(username);
    if (user) {
        if (checkPassword(password, user.password)) {
            res.json({username, isSuperuser: user.is_superuser});
        } else {
            res.status(403).end();
        }
    } else {
        res.status(404).end();
    }
};

exports.register = async (req, res) => {
    const {username, password} = req.body;
    try {
        await insertUser(username, password);
        res.json({username, password, isSuperuser: false});
    } catch (e) {
        res.status(500).end();
    }
};