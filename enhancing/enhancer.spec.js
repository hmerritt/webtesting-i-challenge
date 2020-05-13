const enhancer = require("./enhancer.js");
// test away!

const defaultItem = {
    name: "testName",
    enhancement: 10,
    durability: 50,
};

describe("enhancer", () => {
    it("fn succeed", () => {
        // The item's enhancement increases by 1
        expect(enhancer.succeed(defaultItem))
            .toEqual({...defaultItem, enhancement: 11});

        // The item's enhancement increases by 1
        expect(enhancer.succeed({ ...defaultItem, enhancement: 19 }))
            .toEqual({ ...defaultItem, enhancement: 20 });

        // Stays at 20
        expect(enhancer.succeed({ ...defaultItem, enhancement: 20 }))
            .toEqual({ ...defaultItem, enhancement: 20 });

        // Stays between 0 - 20
        expect(enhancer.succeed({ ...defaultItem, enhancement: -10 }).enhancement)
            .toBeGreaterThanOrEqual(0);
        expect(enhancer.succeed({ ...defaultItem, enhancement: 200 }).enhancement)
            .toBeLessThanOrEqual(20);
    });

    it("fn fail", () => {

        // If the item's enhancement is less than 15,
        // the durability of the item is decreased by 5
        expect(enhancer.fail({ ...defaultItem, enhancement: 10 }))
            .toEqual({...defaultItem, enhancement: 10, durability: 45});

        // If the item's enhancement is 15 or more,
        // the durability of the item is decreased by 10
        expect(enhancer.fail({ ...defaultItem, enhancement: 15 }))
            .toEqual({ ...defaultItem, enhancement: 15, durability: 40 });

        expect(enhancer.fail({ ...defaultItem, enhancement: 17 }))
            .toEqual({ ...defaultItem, durability: 40, enhancement: 16 });

        // expect(enhancer.succeed({ ...defaultItem, enhancement: -10 }).enhancement)
        //     .toBeGreaterThanOrEqual(0);
        // expect(enhancer.succeed({ ...defaultItem, enhancement: 200 }).enhancement)
        //     .toBeLessThanOrEqual(20);
    });

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
