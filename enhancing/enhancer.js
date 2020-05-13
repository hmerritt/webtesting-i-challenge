module.exports = {
    succeed,
    fail,
    repair,
    get,
};

function succeed(item) {
    if (item.enhancement < 0) item.enhancement = 0; // Stop value going below 0
    if (item.enhancement < 20) item.enhancement += 1; // Increment if below 20
    return { ...item };
}

function fail(item) {
    // Ammount to decrement durability by
    let decrementBy = 1;

    //
    switch (true) {
        case item.enhancement < 15:
            decrementBy = 5;
            break;

        case item.enhancement >= 15:
            decrementBy = 10;
            break;
    }

    // decrement durability
    item.durability -= decrementBy;

    // Stop value going below 0
    if (item.durability < 0) item.durability = 0;

    return { ...item };
}

function repair(item) {
    return { ...item, durability: 100 };
}

function get(item) {
    return { ...item };
}
