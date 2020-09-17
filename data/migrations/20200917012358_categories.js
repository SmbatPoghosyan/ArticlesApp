
exports.up = function(knex) {
    return knex.schema.createTable("categories", tbl => {
        tbl.increments();
        tbl.text("name", 128).notNullable();
        tbl.text("description", 128).notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("categories");
};
