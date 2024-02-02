const Joi = require("joi");

const schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
});

const validatedUser = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({
            error: error.details[0].message,
        });
    }
    next();
};

module.exports = validatedUser;
