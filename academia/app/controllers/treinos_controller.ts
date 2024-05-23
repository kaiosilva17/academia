 import type { HttpContext } from '@adonisjs/core/http'
import Treino from '../models/treino.js'

export default class TreinosController {

    async index({ request }: HttpContext) {

        const page = request.input('page', 1)
        const perpage = request.input('perpage', 10)
        return await Treino.query().paginate(page, perpage)
    }

    async show({ params }: HttpContext) {
        return await Treino.query().where('id',params.id).preload('cliente').first()
    }

    async store({ request }: HttpContext) {
        const dados = request.only(['id', 'nome', 'descricao', 'clienteId'])
        return await Treino.create(dados)
    }

    async update({ params, request }: HttpContext) {

        const treino = await Treino.findOrFail(params.id)
        const dados = request.only(['id', 'nome', 'descricao', 'clienteId'])

        treino.merge(dados)
        return await treino.save()

    }

    async destroy({ params }: HttpContext) {
        const treino = await Treino.findOrFail(params.id)

        await treino.delete()
        return { msg: 'Registro deletado com sucesso', treino }

    }

}