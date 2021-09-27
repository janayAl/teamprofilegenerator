const Employee = require("../lib/Employee");
const { TestWatcher } = require("jest");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should create a new Employee Class", () => {
      const obj = new Employee("Janay", 0, "nunnya@test.com");

      expect(obj instanceof Employee).toEqual(true);
    });

    it("should return Employee as a role", () => {
      const obj = new Employee("Janay", 0, "nunnya@test.com")
    });