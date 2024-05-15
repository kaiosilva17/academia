import Plano from '#models/plano'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
  
    await Plano.createMany([
      {id: 1, nome: 'Plano 1', descricao: 'Descrição 1', valor: 100},
      {id: 2, nome: 'Plano 2', descricao: 'Descrição 2', valor: 200},
      {id: 3, nome: 'Plano 3', descricao: 'Descrição 3', valor: 300},
    ])}
}