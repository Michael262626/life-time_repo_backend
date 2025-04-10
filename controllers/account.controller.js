const accountService = require("../services/account.service");
const  CreateAccountDto = require("../dtos/create-account-dto.dto");
const UpdateAccountDto  = require("../dtos/update-acount-dto.dto");

class AccountController {
  async create(req, res, next) {
    try {
      const dto = new CreateAccountDto(req.body);
      dto.validate();
      const image = req.file;
      const account = await accountService.createAccount(dto);
      res.status(201).json(account);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const id = parseInt(req.params.id);

      const dto = new UpdateAccountDto(req.body);
      dto.validate();
      
      const account = await accountService.updateAccount(id, dto);
      res.status(200).json(account);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const id = parseInt(req.params.id);
      await accountService.deleteAccount(id);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }

  async get(req, res, next) {
    try {
      const id = parseInt(req.params.id);
      const account = await accountService.getAccount(id);
      res.status(200).json(account);
    } catch (error) {
      next(error);
    }
  }

  async getAll(req, res, next) {
    try {
      const accounts = await accountService.getAllAccounts();
      res.status(200).json(accounts);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new AccountController();
