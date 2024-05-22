import Cobranca from '#models/cobranca'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
  await Cobranca.createMany([
    {id: 1, valor:100, data_vencimento:20240515,status: 'Pendente', clienteId: 1},
    {id: 2, valor:200, data_vencimento:20240515,status: 'Pendente', clienteId: 2},
    {id: 3, valor:300, data_vencimento:20240515,status: 'Paga', clienteId: 3},
  ])
  }
}