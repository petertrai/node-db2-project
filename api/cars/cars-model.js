const knex = require('knex')

const db = require('../../data/db-config')

function getAll() {
return db('cars')
}

function getById(id) {
  return db('cars').where('id', id).first()
}

//might be wrong - copied from db2 guided
function create(car) {
  return db('cars').insert(car)
  .then(([id]) => getById(id))
}

module.exports = {
  getAll,
  getById,
  create
}