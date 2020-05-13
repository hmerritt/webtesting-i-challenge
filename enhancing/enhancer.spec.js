const enhancer = require("./enhancer.js");
// test away!

const defaultItem = {
    name: "testName",
    enhancement: 10,
    durability: 50,
};

describe("enhancer", () => {
    it("fn succeed", () => {
        const expectedItem = {
            ...defaultItem,
            enhancement: 11,
        };

        expect(enhancer.succeed(defaultItem)).toEqual(expectedItem);

        expect(enhancer.succeed({ ...defaultItem, enhancement: 19 }))
            .toEqual({ ...defaultItem, enhancement: 20 });

        expect(enhancer.succeed({ ...defaultItem, enhancement: 20 }))
            .toEqual({ ...defaultItem, enhancement: 20 });

        expect(enhancer.succeed({ ...defaultItem, enhancement: -10 }).enhancement)
            .toBeGreaterThanOrEqual(0);
        expect(enhancer.succeed({ ...defaultItem, enhancement: 200 }).enhancement)
            .toBeLessThanOrEqual(20);
    });

    it("fn fail", () => {});

    it("fn repair", () => {
        const expectedItem = {
            ...defaultItem,
            durability: 100,
        };

        expect(enhancer.repair(defaultItem)).toEqual(expectedItem);

        expect(enhancer.repair({ ...defaultItem, durability: -10 }))
            .toEqual(expectedItem);

        expect(enhancer.repair({ ...defaultItem, durability: 1000 }))
            .toEqual(expectedItem);

        expect(enhancer.repair({ ...defaultItem, durability: -10 }).durability)
            .toBeGreaterThanOrEqual(0);
        expect(enhancer.repair({ ...defaultItem, durability: 1000 }).durability)
            .toBeLessThanOrEqual(100);
    });
});
