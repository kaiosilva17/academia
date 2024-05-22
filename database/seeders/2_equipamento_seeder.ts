import Equipamento from '#models/equipamento'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
  
    await Equipamento.createMany([

      {id: 1, academiaId: 1, nome: 'Equipamento 1', grupo: 'Grupo 1', quantidade: 10},
      {id: 2, academiaId: 1, nome: 'Equipamento 2', grupo: 'Grupo 2', quantidade: 20},
      {id: 3, academiaId: 1, nome: 'Equipamento 3', grupo: 'Grupo 3', quantidade: 30},
      {id: 4, academiaId: 2, nome: 'Equipamento 1', grupo: 'Grupo 1', quantidade: 10},
      {id: 5, academiaId: 2, nome: 'Equipamento 2', grupo: 'Grupo 2', quantidade: 20},
      {id: 6, academiaId: 2, nome: 'Equipamento 3', grupo: 'Grupo 3', quantidade: 30},
      {id: 7, academiaId: 3, nome: 'Equipamento 1', grupo: 'Grupo 1', quantidade: 10},
      {id: 8, academiaId: 3, nome: 'Equipamento 2', grupo: 'Grupo 2', quantidade: 20},
      {id: 9, academiaId: 3, nome: 'Equipamento 3', grupo: 'Grupo 3', quantidade: 30},
      {id: 10, academiaId: 4, nome: 'Equipamento 1', grupo: 'Grupo 1', quantidade: 10},
    ])
  }
}