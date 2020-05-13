const enhancer = require("./enhancer.js");
// test away!

const defaultItem = {
    name: "testName",
    enhancement: 10,
    durability: 50,
};

describe("enhancer", () => {
    it("fn succeed", () => {});

    it("fn fail", () => {});

    it("fn repair", () => {
        const expectedItem = {
            ...defaultItem,
            durability: 100,
        };

        expect(enhancer.repair(defaultItem)).toEqual(expectedItem);

        expect(enhancer.repair({ ...defaultItem, durability: -10 })).toEqual(
            expectedItem
        );
    
        expect(enhancer.repair({ ...defaultItem, durability: 1000 })).toEqual(
            expectedItem
        );
    });
});
