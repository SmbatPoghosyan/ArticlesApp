
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Jhon', login: 'jhon777', 'password': 'asdasd', 'role': 'member'},
        {id: 2, name: 'Sam', login: 'sam777', 'password': 'asdasd', 'role': 'moderator'},
        {id: 3, name: 'Kate', login: 'admin777', 'password': 'asdasd', 'role': 'admin'}
      ]);
    });
};
