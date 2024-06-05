import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasOne } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasOne } from '@adonisjs/lucid/types/relations'
import Pagamento from './pagamento.js'
import Cliente from './cliente.js'

export default class Cobranca extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare valor: number

  @column()
  declare data_vencimento: string

  @column()
  declare status: string

  @column()
  declare clienteId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasOne(()=> Pagamento)
  declare pagamento: HasOne<typeof Pagamento>
  
  @belongsTo(()=> Cliente)
  declare cliente: BelongsTo<typeof Cliente>
}