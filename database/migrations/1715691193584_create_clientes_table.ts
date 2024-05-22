import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'clientes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('academia_id').unsigned().references('id').inTable('academias').notNullable()
      table.string('nome', 45).notNullable()
      table.string('email', 45)
      table.string('telefone', 45)
      table.date('data_nascimento')
      table.string('endereco', 45)
      table.integer('plano_id').unsigned().references('id').inTable('planos').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}