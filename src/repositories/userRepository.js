const db = require("../database/db");

function handleCallback(callback) {
    return (error, results, fields) => {
        if (error) {
            callback(error);
        }
        console.log(results);
        return callback(null, results);
    };
}

function save(user, callback) {
    db.query("INSERT INTO users SET ?", user, handleCallback(callback));
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
