import DBLocal from 'db-local'

const { Schema } = new DBLocal({ path: './db' })

const User = Schema('User', {
  _id: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true }
})

export class UserRepository {
  static create ({ username, password }) {
    // Validacion del username
    if (typeof username !== 'string' || username.length < 6) {
      throw new Error('Username must be a string with at least 6 characters')
    }
    // Validacion de que el username no existe
    const user = User.findOne({ username })
    if (user) throw new Error('Username already exists')
    const id = crypto.randomUUID()
    // Creacion del usuario
    User.create({ _id: id, username, password }).save()
  }

  static login ({ username, password }) {
    // Validacion del password
    if (typeof password !== 'string' || password.length < 6) {
      throw new Error('Password must be a string with at least 6 characters')
    }
  }
}
