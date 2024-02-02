const Mahasiswa = require("../models/mahasiswaModel");
const mahasiswaRepository = require("../repositories/mahasiswaRepository");

function handleResponse(res, err, message, statusCode = 500) {
    if (err) {
        return res.status(statusCode).json({ error: err.message });
    }
    return res.status(statusCode).json({ data: message });
}

function getAllMahasiswa(req, res) {
    mahasiswaRepository.getAllMahasiswa((err, result) => {
        handleResponse(res, err, result, 200);
    });
}

function getMahasiswaByNIM(req, res) {
    const nim = req.params.nim;
    mahasiswaRepository.getMahasiswaByNIM(nim, (err, result) => {
        if (!result) {
            return handleResponse(
                res,
                null,
                `Mahasiswa with NIM (${nim}) is not found.`,
                404
            );
        }
        handleResponse(res, err, result, 200);
    });
}

function addMahasiswa(req, res) {
    const { nim, nama, fakultas, prodi } = req.body;
    const mahasiswa = new Mahasiswa(nim, nama, fakultas, prodi);
    mahasiswaRepository.addMahasiswa(mahasiswa, (err) => {
        handleResponse(
            res,
            err,
            `Mahasiswa with NIM (${nim}) added successfully.`,
            201
        );
    });
}

function updateMahasiswa(req, res) {
    const nim = req.params.nim;
    const { nama, fakultas, prodi } = req.body;
    const mahasiswa = new Mahasiswa(nim, nama, fakultas, prodi);
    mahasiswaRepository.updateMahasiswa(nim, mahasiswa, (err) => {
        handleResponse(
            res,
            err,
            `Mahasiswa with NIM (${nim}) updated successfully.`,
            200
        );
    });
}

function deleteMahasiswa(req, res) {
    const nim = req.params.nim;
    mahasiswaRepository.getMahasiswaByNIM(nim, (err, result) => {
        if (!result) {
            return handleResponse(res, null, `Mahasiswa is not found.`, 404);
        }
        mahasiswaRepository.deleteMahasiswa(nim, (err) => {
            handleResponse(
                res,
                err,
                `Mahasiswa with NIM ${nim} deleted successfully.`,
                200
            );
        });
    });
}

module.exports = {
    getAllMahasiswa,
    getMahasiswaByNIM,
    addMahasiswa,
    updateMahasiswa,
    deleteMahasiswa,
};
