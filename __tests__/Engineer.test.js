const Employee = require("../lib/Employee");
const { TestWatcher } = require("jest");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should create a new Engineer Class", () => {
      const obj = new Engineer("Janay", 0, "nunnya@test.com");

      expect(obj instanceof Engineer).toEqual(true);
    });

    it("should return Engineer as a role", () => {
      const obj = new Engineer("Janay", 0, "nunnya@test.com")
    });