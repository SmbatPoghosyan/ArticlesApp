const jwt = require('jsonwebtoken');
require('dotenv').config();
const secret = process.env.JWT_SECRET;
const { Model } = require('objection');

class User extends Model {

    static get tableName() {
        return 'users';
    }

    generateJWT = function() {
        const today = new Date();
        const exp = new Date(today);
        exp.setDate(today.getDate() + 60);
        return jwt.sign({
            id: this.id,
            name: this.name,
            login: this.login,
            role: this.role,
            exp: parseInt(exp.getTime() / 1000),
        }, secret);
    };

    toAuthJSON = () => {
        return {
            id: this.id,
            name: this.name,
            login: this.login,
            token: this.generateJWT(),
        };
    };


    static get jsonSchema() {
        return {
            type: 'object',
            required: ['name', 'login', 'password'],

            properties: {
                id: { type: 'integer' },
                name: { type: 'string' },
                login: { type: 'string' },
                password: { type: 'string'},
                role: { type: 'string' }
            }
        };
    }
}

module.exports = {
    User
};
