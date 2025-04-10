const AccountRepository = require("../models/account.repository");
const HttpException = require("../exceptions/httpException");
const CreateAccountDto  = require("../dtos/create-account-dto.dto");
const  UpdateAccountDto = require("../dtos/update-acount-dto.dto");


class AccountService {
  async createAccount(dtoData) {
    const dto = new CreateAccountDto(dtoData);
    dto.validate(); 
    return await AccountRepository.create(dto);
  }

  async updateAccount(id, dtoData) {
    const dto = new UpdateAccountDto(dtoData);
    dto.validate();  

    const account = await AccountRepository.findById(id);
    if (!account) throw new HttpException(404, "Account not found");

    return await AccountRepository.update(id, dto);
  }

  async deleteAccount(id) {
    const success = await AccountRepository.delete(id);
    if (!success) throw new HttpException(404, "Account not found");
  }

  async getAccount(id) {
    const account = await AccountRepository.findById(id);
    if (!account) throw new HttpException(404, "Account not found");
    return account;
  }

  async getAllAccounts() {
    return await AccountRepository.findAll();
  }
}

module.exports = new AccountService();
