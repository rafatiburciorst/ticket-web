import UserService from '#services/user_service'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import { createUserValidator } from '#validators/user_validator'

@inject()
export default class UsersController {
  constructor(private userService: UserService) {}
  async create({ view }: HttpContext) {
    return view.render('users/create')
  }

  async store({ request, response }: HttpContext) {
    try {
      const data = request.all()
      const payload = createUserValidator.parse(data)
      await this.userService.create(payload)
      response.redirect().toRoute('/')
    } catch (error) {
      response.redirect().toRoute('/register')
    }
  }
}
