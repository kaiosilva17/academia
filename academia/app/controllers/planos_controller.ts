 import type { HttpContext } from '@adonisjs/core/http'
import Plano from '../models/plano.js'

export default class PlanosController {

    async index({ request }: HttpContext) {

        const page = request.input('page', 1)
        const perpage = request.input('perpage', 10)
        return await Plano.query().paginate(page, perpage)
    }

    async show({ params }: HttpContext) {
        return await Plano.findOrFail(params.id)
    }

    async store({ request }: HttpContext) {
        const dados = request.only(['id', 'nome', 'descricao', 'valor'])
        return await Plano.create(dados)
    }

    async update({ params, request }: HttpContext) {

        const plano = await Plano.findOrFail(params.id)
        const dados = request.only(['id', 'nome', 'descricao', 'valor'])

        plano.merge(dados)
        return await plano.save()

    }

    async destroy({ params }: HttpContext) {
        const plano = await Plano.findOrFail(params.id)

        await plano.delete()
        return { msg: 'Registro deletado com sucesso', plano }

    }


}