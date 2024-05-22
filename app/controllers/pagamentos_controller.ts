 import type { HttpContext } from '@adonisjs/core/http'
import Pagamento from '../models/pagamento.js'

export default class PagamentosController {

    async index({ request }: HttpContext) {

        const page = request.input('page', 1)
        const perpage = request.input('perpage', 10)
        return await Pagamento.query().paginate(page, perpage)
    }

    async show({ params }: HttpContext) {
        return await Pagamento.query().where('id',params.id).preload('cobranca').first()
    }

    async store({ request }: HttpContext) {
        const dados = request.only(['id', 'valor_pago', 'data_pagamento', 'cobrancaId'])
        return await Pagamento.create(dados)
    }

    async update({ params, request }: HttpContext) {

        const pagamento = await Pagamento.findOrFail(params.id)
        const dados = request.only(['id', 'valor_pago', 'data_pagamento', 'cobrancaId'])

        pagamento.merge(dados)
        return await pagamento.save()

    }

    async destroy({ params }: HttpContext) {
        const pagamento = await Pagamento.findOrFail(params.id)

        await pagamento.delete()
        return { msg: 'Registro deletado com sucesso', pagamento }

    }


}