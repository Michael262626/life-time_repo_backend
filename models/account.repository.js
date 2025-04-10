const { Account } = require("./index");

class AccountRepository {
  async create(data) {
    return await Account.create(data);
  }

  async update(id, dto) {
    const account = await Account.findByPk(id);
    if (!account) {
      throw new Error("Account not found");
    }

    account.firstName = dto.firstName;
    account.lastName = dto.lastName;
    account.occupation = dto.occupation;

    await account.save();
    return account;
  }

  async delete(id) {
    const account = await Account.findByPk(id);
    if (!account) {
      return false;
    }
    await account.destroy();
    return true;
  }

  async findById(id) {
    return await Account.findByPk(id);
  }

  async findAll() {
    return await Account.findAll();
  }
}

module.exports = new AccountRepository();
