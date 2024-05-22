 import type { HttpContext } from '@adonisjs/core/http'
import Equipamento from '../models/equipamento.js'

export default class EquipamentosController {

    async index({ request }: HttpContext) {

        const page = request.input('page', 1)
        const perpage = request.input('perpage', 10)
        return await Equipamento.query().paginate(page, perpage)
    }

    async show({ params }: HttpContext) {
        return await Equipamento.query().where('id',params.id).preload('academia').first()
    }

    async store({ request }: HttpContext) {
        const dados = request.only(['id', 'academiaId', 'nome', 'grupo', 'quantidade'])
        return await Equipamento.create(dados)
    }

    async update({ params, request }: HttpContext) {

        const equipamento = await Equipamento.findOrFail(params.id)
        const dados = request.only(['id', 'academiaId', 'nome', 'grupo', 'quantidade'])

        equipamento.merge(dados)
        return await equipamento.save()

    }

    async destroy({ params }: HttpContext) {
        const equipamento = await Equipamento.findOrFail(params.id)

        await equipamento.delete()
        return { msg: 'Registro deletado com sucesso', equipamento }

    }


}