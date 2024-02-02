const Joi = require("joi");

const schema = Joi.object({
    nim: Joi.string().required(),
    nama: Joi.string().required(),
    fakultas: Joi.string().required(),
    prodi: Joi.string().required(),
});

const validatedMahasiswa = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({
            error: error.details[0].message
        });
    }
    next();
};

module.exports = validatedMahasiswa;
