import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Cobranca extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare valor: string

  @column()
  declare data_vencimento: number

  @column()
  declare status: string

  @column()
  declare clienteId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}