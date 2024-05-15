import Funcionario from '#models/funcionario'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
  await Funcionario.createMany([
    {id: 1, nome: 'Funcionário 1', cargo: 'Cargo 1', salario: 1000, data_contratacao: 1, academiaId: 1},
    {id: 2, nome: 'Funcionário 2', cargo: 'Cargo 2', salario: 2000, data_contratacao: 2, academiaId: 2},
    {id: 3, nome: 'Funcionário 3', cargo: 'Cargo 3', salario: 3000, data_contratacao: 3, academiaId: 3},
    {id: 4, nome: 'Funcionário 4', cargo: 'Cargo 4', salario: 4000, data_contratacao: 4, academiaId: 4},
  ])
  }
}