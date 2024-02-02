const db = require("../database/db");

function handleCallback(callback) {
    return (error, results, fields) => {
        if (error) {
            callback(error);
        }
        return callback(null, results);
    };
}

function getAllMahasiswa(callback) {
    db.query("SELECT * FROM mahasiswa", handleCallback(callback));
}

function getMahasiswaByNIM(nim, callback) {
    db.query(
        "SELECT * FROM mahasiswa WHERE nim = ?",
        [nim],
        (error, results, fields) => {
            if (error) {
                callback(error);
            }
            return callback(null, results[0]);
        }
    );
}

function addMahasiswa(mahasiswa, callback) {
    db.query(
        "INSERT INTO mahasiswa SET ?",
        mahasiswa,
        handleCallback(callback)
    );
}

function updateMahasiswa(nim, mahasiswa, callback) {
    db.query(
        "UPDATE mahasiswa SET ? WHERE nim = ?",
        [mahasiswa, nim],
        handleCallback(callback)
    );
}

function deleteMahasiswa(nim, callback) {
    db.query(
        "DELETE FROM mahasiswa WHERE nim = ?",
        [nim],
        handleCallback(callback)
    );
}

module.exports = {
    getAllMahasiswa,
    getMahasiswaByNIM,
    addMahasiswa,
    updateMahasiswa,
    deleteMahasiswa,
};
