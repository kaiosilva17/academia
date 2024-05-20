/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import AcademiasController from '../app/controllers/academias_controller.js'
import ClientesController from '../app/controllers/clientes_controller.js'
import CobrancasController from '../app/controllers/cobrancas_controller.js'
import EquipamentosController from '../app/controllers/equipamentos_controller.js'
import FuncionariosController from '../app/controllers/funcionarios_controller.js'
import PagamentosController from '../app/controllers/pagamentos_controller.js'
import PlanosController from '../app/controllers/planos_controller.js'
import TreinosController from '../app/controllers/treinos_controller.js'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.resource('/academias', AcademiasController).apiOnly()
router.resource('/clientes', ClientesController).apiOnly()
router.resource('/cobrancas', CobrancasController).apiOnly()
router.resource('/equipamentos', EquipamentosController).apiOnly()
router.resource('/funcionarios', FuncionariosController).apiOnly()
router.resource('/pagamentos', PagamentosController).apiOnly()
router.resource('/planos', PlanosController).apiOnly()
router.resource('/treinos', TreinosController).apiOnly()
