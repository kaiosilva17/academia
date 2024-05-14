import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Cliente extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare academiaId: number

  @column()
  declare nome: string

  @column()
  declare email: string

  @column()
  declare telefone: string

  @column()
  declare data_nascimento: number

  @column()
  declare endereco: string

  @column()
  declare planoId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}