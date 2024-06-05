import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Cobranca from './cobranca.js'

export default class Pagamento extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare valor_pago: number

  @column()
  declare data_pagamento: string

  @column()
  declare cobrancaId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(()=> Cobranca)
  declare cobranca: BelongsTo<typeof Cobranca>
}