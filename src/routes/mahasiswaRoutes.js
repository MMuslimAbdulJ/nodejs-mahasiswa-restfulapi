const express = require("express");
const router = express.Router();
const mahasiswaController = require("../controllers/mahasiswaController");
const validatedMahasiswa = require("../validator/mahasiswaValidation");
const authMiddleware = require('../middleware/authMiddleware');

router.get("/mahasiswa", authMiddleware, mahasiswaController.getAllMahasiswa);
router.get("/mahasiswa/:nim", authMiddleware, mahasiswaController.getMahasiswaByNIM);
router.post("/mahasiswa", [authMiddleware,validatedMahasiswa], mahasiswaController.addMahasiswa);
router.put("/mahasiswa/:nim", [authMiddleware, validatedMahasiswa], mahasiswaController.updateMahasiswa);
router.delete("/mahasiswa/:nim", authMiddleware, mahasiswaController.deleteMahasiswa);

module.exports = router;
