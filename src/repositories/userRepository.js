const db = require("../database/db");

function save(user, callback) {
    db.query("INSERT INTO users SET ?", user, (error, results, fields) => {
        if (error) {
            callback(error);
        }
        return callback(null, results);
    });
}

function findOne(username, callback) {
    db.query(
        "SELECT * FROM users WHERE username = ? LIMIT 1",
        [username],
        (error, results, fields) => {
            if (error) {
                callback(error);
            }
            return callback(null, results[0]);
        }
    );
}

module.exports = {
    save,
    findOne,
};
