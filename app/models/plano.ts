import { DateTime } from 'luxon'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import Cliente from './cliente.js'
import type { HasOne } from '@adonisjs/lucid/types/relations'

export default class Plano extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare descricao: string

  @column()
  declare valor: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasOne(()=> Cliente)
  declare cliente: HasOne<typeof Cliente>
}