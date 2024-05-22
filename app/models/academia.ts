import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Equipamento from './equipamento.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Funcionario from './funcionario.js'
import Cliente from './cliente.js'

export default class Academia extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare endereco: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => Equipamento)
  declare equipamento: HasMany<typeof Equipamento>

  @hasMany(() => Funcionario)
  declare funcionario: HasMany<typeof Funcionario>

  @hasMany(() => Cliente)
  declare cliente: HasMany<typeof Cliente>
}