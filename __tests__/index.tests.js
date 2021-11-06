const SHIP = require("../index.js");

describe("SHIP function", () => {
    it("SHIP CLASS creates a SHIP instance as an object",() => {
        //arrange

        //act
        const Enterprise = new SHIP;
        //assert
        expect(typeof Enterprise).toBe("object");
    })
})