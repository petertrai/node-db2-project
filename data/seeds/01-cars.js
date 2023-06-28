// STRETCH
const cars = [
    {
        vin: '4Y1SL65848Z411439',
        make: 'toyota',
        model: 'prius',
        mileage: 250000,
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin: '222222222222',
        make: 'toyota',
        model: 'corolla',
        mileage: 150000,
        title: 'clean',
        transmission: 'salvage',
    },
    {
        vin: '333333333',
        make: 'ford',
        model: 'focus',
        mileage: 15000,
        title: 'clean',
        transmission: 'manual',
    }
]

exports.seed = async function (knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}