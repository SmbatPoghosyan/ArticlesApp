const { Model } = require('objection');
const { User } = require('./User');
const { Category } = require('./Category');

class Article extends Model {

    static get tableName() {
        return 'articles';
    }

    static relationMappings = {
        user: {
            relation: Model.BelongsToOneRelation,
            modelClass: User,
            join: {
                from: 'articles.user_id',
                to: 'users.id'
            }
        },
        category: {
            relation: Model.BelongsToOneRelation,
            modelClass: Category,
            join: {
                from: 'articles.category_id',
                to: 'categories.id'
            }
        },
    };
}

module.exports = {
    Article
};
