const add = require("./stringcalc");

it("should return zero on an empty string", () => {
	expect(add("")).toBe(0);
});