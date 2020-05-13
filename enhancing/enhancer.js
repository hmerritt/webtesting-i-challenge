module.exports = {
    succeed,
    fail,
    repair,
    get,
};

function succeed(item) {
    switch (true) {
        case item.enhancement < 0: // Stop value going below 0
            item.enhancement = 0;
            break;

        case item.enhancement < 20: // Increment if below 20
            item.enhancement += 1;
            break;

        case item.enhancement > 20: // Keep value at 20
            item.enhancement = 20;
            break;
    }
    return { ...item };
}

function fail(item) {
    // Ammount to decrement durability by
    let decrementBy = 0;

    // decrement durability
    if (item.enhancement >= 15) {
        item.durability -= 10;
    } else {
        item.durability -= 5;
    }

    // decrement enhancement
    if (item.enhancement > 16)
        item.enhancement -= 1;

    // Stop value going below 0
    if (item.durability < 0) item.durability = 0;
    if (item.enhancement < 0) item.enhancement = 0;

    return { ...item };
}

function repair(item) {
    return { ...item, durability: 100 };
}

function get(item) {
    return { ...item };
}
