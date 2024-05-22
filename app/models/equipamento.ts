import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Academia from './academia.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Equipamento extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare academiaId: number

  @column()
  declare nome: string

  @column()
  declare grupo: string

  @column()
  declare quantidade: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(()=> Academia)
  declare academia: BelongsTo<typeof Academia>
}