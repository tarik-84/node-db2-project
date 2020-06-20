
exports.seed = async function(knex) {
  await knex('cars').insert([
    {VIN: 'Aq123h45h66', make: 'Chevrolet', model: 'Malibu', mileage: '5999', transmission: 'true', title: 'green'},
    {VIN: 'Gn321h54d67', make: 'GMC', model: 'Acadia', mileage: '7890', transmission: 'true', title: 'green'},
    {VIN: 'Ks257h49m68', make: 'Cadillac', model: 'Escalade', mileage: '2130', transmission: 'true', title: 'green'}
  ])
}
