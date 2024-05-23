import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany, hasOne } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany, HasOne } from '@adonisjs/lucid/types/relations'
import Academia from './academia.js'
import Treino from './treino.js'
import Plano from './plano.js'
import Cobranca from './cobranca.js'

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

  @belongsTo(()=> Academia)
  declare academia: BelongsTo<typeof Academia>
  
  @belongsTo(()=> Plano)
  declare plano: BelongsTo<typeof Plano>
  
  @hasMany(()=> Treino)
  declare treino: HasMany<typeof Treino>

  @hasOne(()=> Cobranca)
  declare cobranca: HasOne<typeof Cobranca>
}