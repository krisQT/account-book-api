const User = require('../scheme/User')

class UserModel {
  static async createUser(data) {
    return await User.create({
      account: data.account,
      name: data.name,
      password: data.password,
      genqder: data.gender,
      avatar: data.avatar
    })
  }

  static async login(data) {
    return await User.findOne({
      where: {
        account: data.account,
        password: data.password
      }
    });
  }

  static async getUser(data) {
    return await User.findOne({
      where: {
        account: data.account,
      }
    });
  }
}