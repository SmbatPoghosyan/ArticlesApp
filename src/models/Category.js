const { Model } = require('objection');

class Category extends Model {

    static get tableName() {
        return 'categories';
    }


    static get jsonSchema() {
        return {
            type: 'object',
            required: ['name', 'description'],

            properties: {
                id: { type: 'integer' },
                name: { type: 'string' },
                description: { type: 'string' }
            }
        };
    }
}

module.exports = {
    Category
};
