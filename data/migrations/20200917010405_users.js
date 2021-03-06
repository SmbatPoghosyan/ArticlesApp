
exports.up = function(knex) {
    return knex.schema.createTable("users", tbl => {
        tbl.increments();
        tbl.text("name", 128).notNullable();
        tbl.text("login", 128).notNullable();
        tbl.text("password", 128).notNullable();
        tbl.text("role", 128).notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("users");
};
