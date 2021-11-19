exports.loadProfile = (req, res) => {
    const {username, password} = req.cookies;
    res.json({username, isSuperuser: true});
};

exports.login = (req, res) => {
    const {username, password} = req.body;
    res.json({username, password, isSuperuser: true});
};

exports.register = (req, res) => {
    const {username, password} = req.body;
    res.json({username, password, isSuperuser: false});
};