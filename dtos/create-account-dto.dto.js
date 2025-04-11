const OccupationEnum = require("../models/enums/occupation.enum");

class CreateAccountDto {
  constructor({ firstName, lastName, occupation, image}) {
    if (!firstName || !occupation) {
      throw new Error("First name and occupation are required.");
    }

    this.firstName = firstName;
    this.lastName = lastName;
    this.occupation = occupation;
    this.image = image
  }

  validate() {
    if (!this.firstName || !this.occupation) {
      throw new Error("First name and occupation are required.");
    }

    if (!Object.values(OccupationEnum).includes(this.occupation)) {
      throw new Error(`Invalid occupation. Must be one of: ${Object.values(OccupationEnum).join(", ")}`);
    }
  }

}

module.exports = CreateAccountDto;
