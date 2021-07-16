const Employee = require("../lib/Employee");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should create a new Intern Class", () => {
      const obj = new Employee("Janay", 0, "nunnya@test.com");

      expect(obj instanceof Employee).toEqual(true);
    });

    it("should return Intern as a role", () => {
      const obj = new Intern ("Janay", 0, "nunnya@test.com")
});