import Cliente from '#models/cliente'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
  await Cliente.createMany([
    { id: 1, academiaId: 1, nome: 'Nome 1', email: 'Email 1', telefone: 'Telefone 1', data_nascimento: 1, endereco: 'Endereço 1', planoId: 1},
    { id: 2, academiaId: 2, nome: 'Nome 2', email: 'Email 2', telefone: 'Telefone 2', data_nascimento: 2, endereco: 'Endereço 2', planoId: 2},
    { id: 3, academiaId: 3, nome: 'Nome 3', email: 'Email 3', telefone: 'Telefone 3', data_nascimento: 3, endereco: 'Endereço 3', planoId: 3},
    { id: 4, academiaId: 4, nome: 'Nome 4', email: 'Email 4', telefone: 'Telefone 4', data_nascimento: 4, endereco: 'Endereço 4', planoId: 2},
    { id: 5, academiaId: 5, nome: 'Nome 5', email: 'Email 5', telefone: 'Telefone 5', data_nascimento: 5, endereco: 'Endereço 5', planoId: 1},
  ])
  }
}