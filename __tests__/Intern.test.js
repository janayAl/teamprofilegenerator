const { TestWatcher } = require("jest");
const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should create a new Intern Class", () => {
      const obj = new Intern("Janay", 0, "nunnya@test.com");

      expect(obj instanceof Intern).toEqual(true);
    });

    it("should return Intern as a role", () => {
      const obj = new Intern("Janay", 0, "nunnya@test.com")
    })
  })