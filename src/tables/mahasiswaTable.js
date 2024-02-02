const db = require("../database/db");

const mahasiswaTable = `
CREATE TABLE IF NOT EXISTS mahasiswa (
    nim VARCHAR(20) PRIMARY KEY,
    nama VARCHAR(255) NOT NULL,
    fakultas VARCHAR(255) NOT NULL,
    prodi VARCHAR(255) NOT NULL
)`;

db.query(mahasiswaTable, (error, results, fields) => {
    if (error) {
        console.error(`Error creating mahasiswa table: ${error.stack}`);
        return;
    }
    console.log("Mahasiswa table created successfully");
});

db.end();
