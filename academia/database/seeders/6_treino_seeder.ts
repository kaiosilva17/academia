import Treino from '#models/treino'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method

    await Treino.createMany([
      { id: 1, nome: 'Treino 1', descricao: 'Descrição 1', clienteId: 1 },
      { id: 2, nome: 'Treino 2', descricao: 'Descrição 2', clienteId: 2 },
      { id: 3, nome: 'Treino 3', descricao: 'Descrição 3', clienteId: 3 },
      { id: 4, nome: 'Treino 4', descricao: 'Descrição 4', clienteId: 4 },
      { id: 5, nome: 'Treino 5', descricao: 'Descrição 5', clienteId: 5 },

    ])
  }
}