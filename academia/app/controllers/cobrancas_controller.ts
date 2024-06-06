 import type { HttpContext } from '@adonisjs/core/http'
import Cobranca from '../models/cobranca.js'

export default class CobrancasController {

    async index({ request }: HttpContext) {

        const page = request.input('page', 1)
        const perpage = request.input('perpage', 10)
        return await Cobranca.query().paginate(page, perpage)
    }

    async show({ params }: HttpContext) {
        return await Cobranca.query().where('id',params.id).preload('cliente').first()
    }

    async store({ request }: HttpContext) {
        const dados = request.only(['id', 'valor', 'data_vencimento', 'status','clienteId'])
        return await Cobranca.create(dados)
    }

    async update({ params, request }: HttpContext) {

        const cobranca = await Cobranca.findOrFail(params.id)
        const dados = request.only(['id', 'valor', 'data_vencimento', 'status','clienteId'])

        cobranca.merge(dados)
        return await cobranca.save()

    }

    async destroy({ params }: HttpContext) {
        const cobranca = await Cobranca.findOrFail(params.id)

        await cobranca.delete()
        return { msg: 'Registro deletado com sucesso', cobranca }

    }


}