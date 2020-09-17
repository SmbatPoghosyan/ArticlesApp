
exports.up = function(knex) {
    return knex.schema.createTable("articles", tbl => {
        tbl.increments();
        tbl.text("name", 128).notNullable();
        tbl.text("content", 128).notNullable();
        tbl.integer('category_id').unsigned().index().references('id').inTable('categories')
        tbl.integer('user_id').unsigned().index().references('id').inTable('users')
        tbl.timestamps();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("articles");
};
