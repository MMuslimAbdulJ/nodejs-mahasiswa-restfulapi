const db = require("../database/db");

const userTable = `
CREATE TABLE IF NOT EXISTS users (
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
)`;

db.query(userTable, (error, results, fields) => {
    if (error) {
        console.error(`Error creating user table: ${error.stack}`);
        return;
    }
    console.log("User table created successfully");
});

db.end();