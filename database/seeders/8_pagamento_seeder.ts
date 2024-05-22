import Pagamento from '#models/pagamento'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
  
    await Pagamento.createMany([
      {id: 1, valor_pago: 100, data_pagamento: 20240515, cobrancaId: 1},
      {id: 2, valor_pago: 200, data_pagamento: 20240515, cobrancaId: 2},
      {id: 3, valor_pago: 300, data_pagamento: 20240515, cobrancaId: 3},
    ])}
}