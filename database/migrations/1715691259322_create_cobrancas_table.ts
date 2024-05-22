import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'cobrancas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('valor', 45).notNullable()
      table.date('data_vencimento').notNullable()
      table.string('status', 45)
      table.integer('cliente_id').unsigned().references('id').inTable('clientes').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}