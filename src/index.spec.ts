import { expect } from "chai";
import { returnsTrue } from ".";

describe("index", () => {
	describe("returnsTrue", () => {
		it("should return true", () => {
			expect(returnsTrue()).to.equal(true);
		});
	});
});
