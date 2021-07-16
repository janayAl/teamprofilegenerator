const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should create a new Manager Class", () => {
      const obj = new Manager("Janay", 0, "nunnya@test.com");

      expect(obj instanceof Manager).toEqual(true);
    });

    it("should return Manager as a role", () => {
      const obj = new Manager ("Janay", 0, "nunnya@test.com")
});