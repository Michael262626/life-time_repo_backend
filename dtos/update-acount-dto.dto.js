const OccupationEnum = require("../models/enums/occupation.enum");

class UpdateAccountDto {
    constructor(data) {
      this.firstName = data.firstName;
      this.lastName = data.lastName;
      this.occupation = data.occupation
    }
    validate() {
      if (this.firstName && !this.lastName) {
        throw new Error("Name are required.");
      }
      if (!Object.values(OccupationEnum).includes(this.occupation)) {
        throw new Error(`Invalid occupation. Must be one of: ${Object.values(OccupationEnum).join(", ")}`);
      }
    }
  }

  module.exports = UpdateAccountDto;