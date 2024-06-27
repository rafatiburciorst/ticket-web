import User from '#models/user'
import type { CreateUserPayload } from '#validators/user_validator'
export default class UserService {
  async create(payload: CreateUserPayload) {
    await User.create(payload)
  }
}
