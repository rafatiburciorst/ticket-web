const UsersController = () => import('#controllers/users_controller')
import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home/index')

router
  .group(() => {
    router.get('/create', [UsersController, 'create'])
    router.post('/create', [UsersController, 'create'])
  })
  .prefix('/users')
