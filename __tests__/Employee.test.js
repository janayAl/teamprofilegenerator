const { TestWatcher } = require("jest");
const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should create a new Employee Class", () => {
      const obj = new Employee("Janay", 0, "nunnya@test.com");

      expect(obj instanceof Employee).toEqual(true);
    });

    it("should return Employee as a role", () => {
      const obj = new Employee("Janay", 0, "nunnya@test.com");

      expect(obj.getRole()).toEqual("Employee");
    })

    it("Should return Janay as a name.", () => {
      const obj = new Employee("Janay", 0, "nunnya@test.com");

      expect(obj.getName()).toEqual("Janay");
    })

    it("Should return 0 as Employee id.", () => {
      const obj = new Employee("Janay", 0, "nunnya@test.com");
      expect(obj.getId()).toEqual(0);
    })

    it("Should return nunnya@test.com" as email.", () =>{
      const obj = new Employee("Janay", 0, "nunnya@test.com");

    expect(obj.getEmail()).toEqual("nunnya@test.com");

  })
})