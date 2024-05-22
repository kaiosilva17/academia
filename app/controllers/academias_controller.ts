 import type { HttpContext } from '@adonisjs/core/http'
import Academia from '../models/academia.js'

export default class AcademiasController {

    async index({ request }: HttpContext) {

        const page = request.input('page', 1)
        const perpage = request.input('perpage', 10)
        return await Academia.query().paginate(page, perpage)
    }

    async show({ params }: HttpContext) {
        return await Academia.findOrFail(params.id)
    }

    async store({ request }: HttpContext) {
        const dados = request.only(['id', 'nome', 'endereco'])
        return await Academia.create(dados)
    }

    async update({ params, request }: HttpContext) {

        const academia = await Academia.findOrFail(params.id)
        const dados = request.only(['id', 'nome', 'endereco'])

        academia.merge(dados)
        return await academia.save()

    }

    async destroy({ params }: HttpContext) {
        const academia = await Academia.findOrFail(params.id)

        await academia.delete()
        return { msg: 'Registro deletado com sucesso', academia }

    }

    
}