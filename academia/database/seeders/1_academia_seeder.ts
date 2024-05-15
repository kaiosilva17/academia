
import Academia from '#models/academia'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
  
    await Academia.createMany([
      {id: 1, nome: 'Academia 1', endereco: 'Endereço 1'},
      {id: 2, nome: 'Academia 2', endereco: 'Endereço 2'},
      {id: 3, nome: 'Academia 3', endereco: 'Endereço 3'},
      {id: 4, nome: 'Academia 4', endereco: 'Endereço 4'},
    ])
  }
}